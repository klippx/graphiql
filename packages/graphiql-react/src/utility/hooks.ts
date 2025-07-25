import { useEffect, useRef, useState } from 'react';
import { debounce } from './debounce';
import type * as monaco from 'monaco-editor';
import { useGraphiQL, useGraphiQLActions } from '../components';

export function useChangeHandler(
  callback: ((value: string) => void) | undefined,
  storageKey: string | null,
  tabProperty: 'variables' | 'headers',
) {
  const { updateActiveTabValues } = useGraphiQLActions();
  const { editor, storage } = useGraphiQL(state => ({
    editor:
      state[tabProperty === 'variables' ? 'variableEditor' : 'headerEditor'],
    storage: state.storage,
  }));
  useEffect(() => {
    if (!editor) {
      return;
    }
    const store = debounce(500, (value: string) => {
      if (storageKey === null) {
        return;
      }
      storage.set(storageKey, value);
    });
    const updateTab = debounce(100, (value: string) => {
      updateActiveTabValues({ [tabProperty]: value });
    });

    const handleChange = (_event: monaco.editor.IModelContentChangedEvent) => {
      const newValue = editor.getValue();
      store(newValue);
      updateTab(newValue);
      callback?.(newValue);
    };
    const disposable = editor.getModel()!.onDidChangeContent(handleChange);
    return () => {
      disposable.dispose();
    };
  }, [
    callback,
    editor,
    storageKey,
    tabProperty,
    updateActiveTabValues,
    storage,
  ]);
}

// https://react.dev/learn/you-might-not-need-an-effect
export const useEditorState = (
  editor: 'query' | 'variable' | 'header',
): [string, (val: string) => void] => {
  const editorInstance = useGraphiQL(state => state[`${editor}Editor`]);
  const [value, setValue] = useState('');
  const model = editorInstance?.getModel();

  useEffect(() => {
    if (!model) {
      return;
    }

    function onChange() {
      setValue(model!.getValue());
    }

    const disposable = model.onDidChangeContent(onChange);
    // Initialize the value
    onChange();
    return () => {
      disposable.dispose();
    };
  }, [model]);

  function handleChange(newValue: string) {
    model!.setValue(newValue);
  }

  return [value, handleChange];
};

/**
 * useState-like hook for the current tab operations editor state
 */
export const useOperationsEditorState = (): [
  operations: string,
  setOperations: (content: string) => void,
] => {
  return useEditorState('query');
};

/**
 * useState-like hook for current tab variables editor state
 */
export const useVariablesEditorState = (): [
  variables: string,
  setVariables: (content: string) => void,
] => {
  return useEditorState('variable');
};

/**
 * useState-like hook for current tab variables editor state
 */
export const useHeadersEditorState = (): [
  headers: string,
  setHeaders: (content: string) => void,
] => {
  return useEditorState('header');
};

/**
 * Implements an optimistic caching strategy around a useState-like hook in
 * order to prevent loss of updates when the hook has an internal delay and the
 * update function is called again before the updated state is sent out.
 *
 * Use this as a wrapper around `useOperationsEditorState`,
 * `useVariablesEditorState`, or `useHeadersEditorState` if you anticipate
 * calling them with great frequency (due to, for instance, mouse, keyboard, or
 * network events).
 *
 * @example
 * ```ts
 * const [operationsString, handleEditOperations] =
 *   useOptimisticState(useOperationsEditorState());
 * ```
 */
export function useOptimisticState([
  upstreamState,
  upstreamSetState,
]: ReturnType<typeof useEditorState>): ReturnType<typeof useEditorState> {
  const lastStateRef = useRef({
    /** The last thing that we sent upstream; we're expecting this back */
    pending: null as string | null,
    /** The last thing we received from upstream */
    last: upstreamState,
  });

  const [state, setOperationsText] = useState(upstreamState);

  useEffect(() => {
    if (lastStateRef.current.last === upstreamState) {
      // No change; ignore
      return;
    }
    lastStateRef.current.last = upstreamState;
    if (lastStateRef.current.pending === null) {
      // Gracefully accept update from upstream
      setOperationsText(upstreamState);
      return;
    }
    if (lastStateRef.current.pending === upstreamState) {
      // They received our update and sent it back to us - clear pending, and
      // send next if appropriate
      lastStateRef.current.pending = null;
      if (upstreamState !== state) {
        // Change has occurred; upstream it
        lastStateRef.current.pending = state;
        upstreamSetState(state);
      }
      return;
    }
    // They got a different update; overwrite our local state (!!)
    lastStateRef.current.pending = null;
    setOperationsText(upstreamState);
  }, [upstreamState, state, upstreamSetState]);

  const setState = (newState: string) => {
    setOperationsText(newState);
    if (
      lastStateRef.current.pending === null &&
      lastStateRef.current.last !== newState
    ) {
      // No pending updates and change has occurred... send it upstream
      lastStateRef.current.pending = newState;
      upstreamSetState(newState);
    }
  };

  return [state, setState];
}

// https://github.com/mantinedev/mantine/blob/master/packages/@mantine/hooks/src/use-did-update/use-did-update.ts
export const useDidUpdate: typeof useEffect = (fn, dependencies) => {
  const didMountRef = useRef(false);

  // React Strict Mode intentionally mounts → unmounts → mounts the component during development.
  useEffect(() => {
    return () => {
      didMountRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
};
