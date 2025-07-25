'use no memo';

/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import { act, render, waitFor, fireEvent } from '@testing-library/react';
import { Component, FC, useEffect } from 'react';
import { GraphiQL } from './GraphiQL';
import type { Fetcher } from '@graphiql/toolkit';
import {
  ToolbarButton,
  useGraphiQL,
  useOperationsEditorState,
  MonacoEditor,
} from '@graphiql/react';
import '@graphiql/react/setup-workers/vite';

// The smallest possible introspection result that builds a schema.
const simpleIntrospection = {
  data: {
    __schema: {
      queryType: { name: 'Q' },
      types: [
        {
          kind: 'OBJECT',
          name: 'Q',
          interfaces: [],
          fields: [{ name: 'q', args: [], type: { name: 'Q' } }],
        },
      ],
    },
  },
};

beforeEach(() => {
  localStorage.clear();
});

describe('GraphiQL', () => {
  // @ts-expect-error -- fixme
  const noOpFetcher: Fetcher = () => {};

  describe('fetcher', () => {
    it('should throw error without fetcher', () => {
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

      // @ts-expect-error fetcher is a required prop to GraphiQL
      expect(() => render(<GraphiQL />)).toThrow(
        'The `GraphiQLProvider` component requires a `fetcher` function to be passed as prop.',
      );
      spy.mockRestore();
    });

    it('should construct correctly with fetcher', () => {
      // `return` fix error:
      // Warning: An update to GraphiQLInterface inside a test was not wrapped in act(...).
      return act(() => {
        expect(() => render(<GraphiQL fetcher={noOpFetcher} />)).not.toThrow();
      });
    });

    it('should refetch schema with new fetcher', async () => {
      let firstCalled = false;

      function firstFetcher() {
        firstCalled = true;
        return Promise.resolve(simpleIntrospection);
      }

      let secondCalled = false;

      function secondFetcher() {
        secondCalled = true;
        return Promise.resolve(simpleIntrospection);
      }

      // Initial render calls fetcher
      const { rerender } = render(<GraphiQL fetcher={firstFetcher} />);

      await waitFor(() => {
        expect(firstCalled).toEqual(true);
      });

      // Re-render does not call fetcher again
      firstCalled = false;
      await act(async () => {
        rerender(<GraphiQL fetcher={firstFetcher} />);
      });

      await waitFor(() => {
        expect(firstCalled).toEqual(false);
      });

      // Re-render with new fetcher is called.
      await act(async () => {
        rerender(<GraphiQL fetcher={secondFetcher} />);
      });

      await waitFor(() => {
        expect(secondCalled).toEqual(true);
      });
    });

    it('should refresh schema with new fetcher after a fetchError', async () => {
      function firstFetcher() {
        return Promise.reject('Schema Error');
      }

      function secondFetcher() {
        return Promise.resolve(simpleIntrospection);
      }

      // Use a bad fetcher for our initial render
      const { rerender, container, getByLabelText } = render(
        <GraphiQL fetcher={firstFetcher} />,
      );

      const showDocExplorerButton = getByLabelText(
        'Show Documentation Explorer',
      );

      await waitFor(() => {
        expect(showDocExplorerButton).not.toBe(null);
      });

      act(() => {
        fireEvent.click(showDocExplorerButton);
      });

      await waitFor(() => {
        expect(
          container.querySelector('.graphiql-doc-explorer-error'),
        ).not.toBe(null);
      });

      // Re-render with valid fetcher
      await act(async () => {
        rerender(<GraphiQL fetcher={secondFetcher} />);
      });

      await waitFor(() => {
        expect(container.querySelector('.graphiql-doc-explorer-error')).toBe(
          null,
        );
      });
    });
  }); // fetcher

  describe('schema', () => {
    it('should not throw error if schema missing and query provided', async () => {
      await act(async () => {
        expect(() =>
          render(<GraphiQL fetcher={noOpFetcher} initialQuery="{}" />),
        ).not.toThrow();
      });
    });
  }); // schema

  describe('default query', () => {
    it('defaults to the built-in default query', async () => {
      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      await waitFor(() => {
        const queryEditor = container.querySelector<HTMLDivElement>(
          '.graphiql-editor .monaco-scrollable-element',
        );
        expect(queryEditor).toBeVisible();
        expect(queryEditor!.textContent).toBe('# Welcome to GraphiQL');
      });
    });

    it('accepts a custom default query', async () => {
      const { container } = render(
        <GraphiQL fetcher={noOpFetcher} defaultQuery="GraphQL Party!!" />,
      );

      await waitFor(() => {
        const queryEditor = container.querySelector<HTMLDivElement>(
          '.graphiql-editor .monaco-scrollable-element',
        );
        expect(queryEditor).toBeVisible();
        expect(queryEditor!.textContent).toBe('GraphQL Party!!');
      });
    });
  }); // default query

  // TODO: rewrite these plugin tests after plugin API has more structure
  describe('plugins', () => {
    it('displays correct plugin when visiblePlugin prop is used', async () => {
      const { container } = render(
        <GraphiQL
          fetcher={noOpFetcher}
          visiblePlugin="Documentation Explorer"
        />,
      );
      await waitFor(() => {
        expect(
          container.querySelector('.graphiql-doc-explorer'),
        ).toBeInTheDocument();
      });
    });

    it('defaults to not displaying plugin pane', async () => {
      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      await waitFor(() => {
        expect(container.querySelector('.graphiql-plugin')).not.toBeVisible();
      });
    });
  }); // plugins

  describe('editor tools', () => {
    it('can control the default editor tools visibility', async () => {
      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      const editorToolTabPanelWrap = container.querySelector(
        '.graphiql-editor-tool',
      );

      await waitFor(() => {
        expect(editorToolTabPanelWrap).not.toBeVisible();
      });

      const secondaryEditorTitle = container.querySelector(
        '.graphiql-editor-tools',
      )!;

      // drag the editor tools handle up
      act(() => {
        fireEvent.mouseDown(secondaryEditorTitle);
        fireEvent.mouseMove(secondaryEditorTitle, { buttons: 1, clientY: 50 });
      });

      await waitFor(() => {
        expect(editorToolTabPanelWrap).toBeVisible();
      });
    });

    it('correctly displays variables editor when using defaultEditorToolsVisibility prop', async () => {
      const { container } = render(
        <GraphiQL
          fetcher={noOpFetcher}
          defaultEditorToolsVisibility="variables"
        />,
      );
      await waitFor(() => {
        expect(
          container.querySelector('[aria-label="Variables"]'),
        ).toBeVisible();
      });
    });

    it('correctly displays request headers editor when using defaultEditorToolsVisibility prop', async () => {
      const { container } = render(
        <GraphiQL
          fetcher={noOpFetcher}
          defaultEditorToolsVisibility="headers"
        />,
      );
      await waitFor(() => {
        expect(container.querySelector('[aria-label="Headers"]')).toBeVisible();
      });
    });

    it('correctly hides editor tools when using defaultEditorToolsVisibility prop is false but either of the editors has a value', async () => {
      const { container } = render(
        <GraphiQL
          fetcher={noOpFetcher}
          initialVariables="🚀"
          defaultEditorToolsVisibility={false}
        />,
      );

      const editorToolTabPanelWrap = container.querySelector(
        '.graphiql-editor-tool',
      );

      await waitFor(() => {
        expect(editorToolTabPanelWrap).not.toBeVisible();
      });
    });
  }); // editor tools

  describe('panel resizing', () => {
    it('readjusts the query wrapper flex style field when the result panel is resized', async () => {
      // Mock the drag bar width
      const clientWidthSpy = vi
        .spyOn(Element.prototype, 'clientWidth', 'get')
        .mockReturnValue(0);
      // Mock the container width
      const boundingClientRectSpy = vi
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockReturnValue({ left: 0, right: 900 } as DOMRect);

      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      const dragBar = container.querySelector('.graphiql-horizontal-drag-bar')!;
      const editors =
        container.querySelector<HTMLDivElement>('.graphiql-editors')!;

      act(() => {
        fireEvent.mouseDown(dragBar, {
          button: 0,
          ctrlKey: false,
        });

        fireEvent.mouseMove(dragBar, {
          buttons: 1,
          clientX: 700,
        });

        fireEvent.mouseUp(dragBar);
      });

      await waitFor(() => {
        // 700 / (900 - 700) = 3.5
        expect(editors.style.flex).toEqual('3.5');
      });

      clientWidthSpy.mockRestore();
      boundingClientRectSpy.mockRestore();
    });

    it('allows for resizing the doc explorer correctly', async () => {
      // Mock the drag bar width
      const clientWidthSpy = vi
        .spyOn(Element.prototype, 'clientWidth', 'get')
        .mockReturnValue(0);
      // Mock the container width
      const boundingClientRectSpy = vi
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockReturnValue({ left: 0, right: 1200 } as DOMRect);

      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      act(() => {
        fireEvent.click(
          container.querySelector(
            '[aria-label="Show Documentation Explorer"]',
          )!,
        );
      });

      const dragBar = container.querySelector('.graphiql-horizontal-drag-bar')!;

      act(() => {
        fireEvent.mouseDown(dragBar, {
          clientX: 3,
        });

        fireEvent.mouseMove(dragBar, {
          buttons: 1,
          clientX: 800,
        });
        fireEvent.mouseUp(dragBar);
      });

      await waitFor(() => {
        // 797 / (1200 - 797) = 1.977667493796526
        expect(
          container.querySelector<HTMLDivElement>('.graphiql-plugin')!.style
            .flex,
        ).toBe('1.977667493796526');
      });

      clientWidthSpy.mockRestore();
      boundingClientRectSpy.mockRestore();
    });
  }); // panel resizing

  it('allows the user to control persisting headers if it is true', async () => {
    const { container, findByText } = render(
      <GraphiQL shouldPersistHeaders fetcher={noOpFetcher} />,
    );

    act(() => {
      fireEvent.click(
        container.querySelector('[aria-label="Open settings dialog"]')!,
      );
    });

    const element = await findByText('Persist headers');
    expect(element).toBeInTheDocument();
  });

  it('allows the user to control persisting headers if it is not passed in', async () => {
    const { container, findByText } = render(
      <GraphiQL fetcher={noOpFetcher} />,
    );

    act(() => {
      fireEvent.click(
        container.querySelector('[aria-label="Open settings dialog"]')!,
      );
    });

    const element = await findByText('Persist headers');
    expect(element).toBeInTheDocument();
  });

  it('does not allow the user to control persisting headers is false', async () => {
    const { container, findByText } = render(
      <GraphiQL shouldPersistHeaders={false} fetcher={noOpFetcher} />,
    );

    act(() => {
      fireEvent.click(
        container.querySelector('[aria-label="Open settings dialog"]')!,
      );
    });

    const callback = async () => {
      try {
        await findByText('Persist headers');
      } catch {
        // eslint-disable-next-line no-throw-literal
        throw 'failed';
      }
    };
    await expect(callback).rejects.toEqual('failed');
  });

  describe('Tabs', () => {
    it('show tabs', async () => {
      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tabs .graphiql-tab'),
        ).toHaveLength(1);
      });

      act(() => {
        fireEvent.click(container.querySelector('.graphiql-tab-add')!);
      });

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tabs .graphiql-tab'),
        ).toHaveLength(2);
      });

      act(() => {
        fireEvent.click(container.querySelector('.graphiql-tab-add')!);
      });

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tabs .graphiql-tab'),
        ).toHaveLength(3);
      });
    });

    it('each tab has a close button when multiple tabs are open', async () => {
      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tab .graphiql-tab-close'),
        ).toHaveLength(0);
      });

      act(() => {
        fireEvent.click(container.querySelector('.graphiql-tab-add')!);
      });

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tab .graphiql-tab-close'),
        ).toHaveLength(2);
      });

      act(() => {
        fireEvent.click(container.querySelector('.graphiql-tab-add')!);
      });

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tab .graphiql-tab-close'),
        ).toHaveLength(3);
      });
    });

    it('close button removes a tab', async () => {
      const { container } = render(<GraphiQL fetcher={noOpFetcher} />);

      act(() => {
        fireEvent.click(container.querySelector('.graphiql-tab-add')!);
      });

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tab .graphiql-tab-close'),
        ).toHaveLength(2);
      });

      act(() => {
        fireEvent.click(
          container.querySelector('.graphiql-tab .graphiql-tab-close')!,
        );
      });

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tabs .graphiql-tab'),
        ).toHaveLength(1);
        expect(
          container.querySelectorAll('.graphiql-tab .graphiql-tab-close'),
        ).toHaveLength(0);
      });
    });

    it('shows default tabs', async () => {
      const { container } = render(
        <GraphiQL
          fetcher={noOpFetcher}
          defaultTabs={[
            {
              query: 'query Person { person { name } }',
            },
            {
              query: 'query Image { image }',
            },
          ]}
        />,
      );

      await waitFor(() => {
        expect(
          container.querySelectorAll('.graphiql-tabs .graphiql-tab'),
        ).toHaveLength(2);
      });
    });
  });

  describe('children overrides', () => {
    const MyFunctionalComponent = () => {
      return null;
    };

    it('properly ignores fragments', async () => {
      const myFragment = (
        <>
          <MyFunctionalComponent />
          <MyFunctionalComponent />
        </>
      );

      const { container, getByRole } = render(
        <GraphiQL fetcher={noOpFetcher}>{myFragment}</GraphiQL>,
      );

      await waitFor(() => {
        expect(
          container.querySelector('.graphiql-container'),
        ).toBeInTheDocument();
        expect(container.querySelector('.graphiql-logo')).toBeInTheDocument();
        expect(getByRole('toolbar')).toBeInTheDocument();
      });
    });

    it('properly ignores non-override children components', async () => {
      const { container, getByRole } = render(
        <GraphiQL fetcher={noOpFetcher}>
          <MyFunctionalComponent />
        </GraphiQL>,
      );

      await waitFor(() => {
        expect(
          container.querySelector('.graphiql-container'),
        ).toBeInTheDocument();
        expect(container.querySelector('.graphiql-logo')).toBeInTheDocument();
        expect(getByRole('toolbar')).toBeInTheDocument();
      });
    });

    it('properly ignores non-override class components', async () => {
      // eslint-disable-next-line react/prefer-stateless-function
      class MyClassComponent extends Component {
        render() {
          return null;
        }
      }

      const { container, getByRole } = render(
        <GraphiQL fetcher={noOpFetcher}>
          <MyClassComponent />
        </GraphiQL>,
      );

      await waitFor(() => {
        expect(
          container.querySelector('.graphiql-container'),
        ).toBeInTheDocument();
        expect(container.querySelector('.graphiql-logo')).toBeInTheDocument();
        expect(getByRole('toolbar')).toBeInTheDocument();
      });
    });

    describe('GraphiQL.Logo', () => {
      it('can be overridden using the exported type', async () => {
        const { getByText } = render(
          <GraphiQL fetcher={noOpFetcher}>
            <GraphiQL.Logo>My Exported Type Logo</GraphiQL.Logo>
          </GraphiQL>,
        );

        await waitFor(() => {
          expect(getByText('My Exported Type Logo')).toBeInTheDocument();
        });
      });
    });

    describe('GraphiQL.Toolbar', () => {
      it('can be overridden using the exported type', async () => {
        const { container } = render(
          <GraphiQL fetcher={noOpFetcher}>
            <GraphiQL.Toolbar>
              {() => <ToolbarButton label="My Fun Label" />}
            </GraphiQL.Toolbar>
          </GraphiQL>,
        );

        await waitFor(() => {
          expect(
            container.querySelectorAll(
              '[role="toolbar"] .graphiql-toolbar-button',
            ),
          ).toHaveLength(1);
        });
      });
    });

    describe('GraphiQL.Footer', () => {
      it('can be overridden using the exported type', async () => {
        const { container } = render(
          <GraphiQL fetcher={noOpFetcher}>
            <GraphiQL.Footer>
              <ToolbarButton label="My Fun Label" />
            </GraphiQL.Footer>
          </GraphiQL>,
        );

        await waitFor(() => {
          expect(
            container.querySelectorAll('.graphiql-footer button'),
          ).toHaveLength(1);
        });
      });
    });
  });

  it('should support multiple instances', async () => {
    const queryEditors: Record<0 | 1, MonacoEditor> = Object.create(null);

    const HookConsumer: FC<{ id: 0 | 1 }> = ({ id }) => {
      const $queryEditor = useGraphiQL(state => state.queryEditor);
      useEffect(() => {
        queryEditors[id] = $queryEditor!;
      }, [$queryEditor, id]);
      return null;
    };

    const { container, getAllByLabelText } = render(
      <>
        <GraphiQL fetcher={noOpFetcher}>
          <HookConsumer id={0} />
        </GraphiQL>
        <GraphiQL fetcher={noOpFetcher}>
          <HookConsumer id={1} />
        </GraphiQL>
      </>,
    );
    const [firstEl, secondEl] = container.querySelectorAll(
      '.graphiql-container',
    );
    expect(firstEl).toBeInTheDocument();
    expect(secondEl).toBeInTheDocument();
    const [showDocExplorerButton] = getAllByLabelText(
      'Show Documentation Explorer',
    );
    const [addTab] = getAllByLabelText('New tab');
    fireEvent.click(showDocExplorerButton!);
    fireEvent.click(addTab!);

    await waitFor(() => {
      // Plugin store
      expect(
        firstEl!.querySelector('.graphiql-doc-explorer'),
      ).toBeInTheDocument();
      expect(
        secondEl!.querySelector('.graphiql-doc-explorer'),
      ).not.toBeInTheDocument();

      // Editor store
      expect(firstEl!.querySelectorAll('.graphiql-tab').length).toBe(2);
      expect(secondEl!.querySelectorAll('.graphiql-tab').length).toBe(1);

      // Query
      queryEditors[0].setValue('{__typename}');
      queryEditors[1].setValue('bar');
      const editors = container.querySelectorAll<HTMLDivElement>(
        '.graphiql-query-editor .monaco-scrollable-element',
      );
      expect(editors[0]!.textContent).toBe('{__typename}');
      expect(editors[1]!.textContent).toBe('bar');
    });
  });

  it('`useOperationsEditorState` hook', async () => {
    let hookResult: ReturnType<typeof useOperationsEditorState>;
    let queryEditor: MonacoEditor;

    const HookConsumer: FC = () => {
      const $hookResult = useOperationsEditorState();
      const $queryEditor = useGraphiQL(state => state.queryEditor);
      useEffect(() => {
        hookResult = $hookResult;
        queryEditor = $queryEditor!;
      }, [$hookResult, $queryEditor]);
      return null;
    };

    const { container } = render(
      <GraphiQL fetcher={noOpFetcher} initialQuery="query { hello }">
        <HookConsumer />
      </GraphiQL>,
    );
    let editor: HTMLDivElement = null!;

    // Assert initial values
    await waitFor(() => {
      editor = container.querySelector<HTMLDivElement>(
        '.graphiql-editor .monaco-scrollable-element',
      )!;
      expect(editor.textContent).toBe('query { hello }');
      expect(hookResult[0]).toBe('query { hello }');
    });
    // Assert value was changed after UI editing
    await waitFor(() => {
      const newValue = 'bar';
      queryEditor.setValue(newValue);
      expect(editor.textContent).toBe(newValue);
      expect(hookResult[0]).toBe(newValue);
    });

    // Assert using hook handler
    await waitFor(() => {
      const newValue = 'foo';
      hookResult[1](newValue);
      expect(editor.textContent).toBe(newValue);
      expect(hookResult[0]).toBe(newValue);
    });
  });
});
