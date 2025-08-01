# @graphiql/plugin-explorer

## 5.1.1

### Patch Changes

- Updated dependencies [[`6e5d5fc`](https://github.com/graphql/graphiql/commit/6e5d5fce9a7eb5770f40300fc153e0b9b10edfbf), [`293beed`](https://github.com/graphql/graphiql/commit/293beed772baa2be834cad5f19e1aee0628e15cc)]:
  - @graphiql/react@0.37.0

## 5.1.0

### Minor Changes

- [#4077](https://github.com/graphql/graphiql/pull/4077) [`3d41e11`](https://github.com/graphql/graphiql/commit/3d41e113fbf53930fd1b519b6d1330d0f4b23b7b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - add new example [Usage GraphiQL 5 with Vite, React Router and `ssr: true`](https://github.com/graphql/graphiql/tree/main/examples/example-graphiql-vite-react-router)

### Patch Changes

- Updated dependencies [[`3a0a755`](https://github.com/graphql/graphiql/commit/3a0a75569c6b318f5dc27d62000bcc9b0536c6fd), [`fd3f9e6`](https://github.com/graphql/graphiql/commit/fd3f9e6a91be728a69a136ad8680f6e3c7241198), [`416e3a0`](https://github.com/graphql/graphiql/commit/416e3a05e9473eb2abd444da61ecfb8614020d14), [`3d41e11`](https://github.com/graphql/graphiql/commit/3d41e113fbf53930fd1b519b6d1330d0f4b23b7b)]:
  - @graphiql/react@0.36.0

## 5.0.0

### Major Changes

- [#3990](https://github.com/graphql/graphiql/pull/3990) [`27e7eb6`](https://github.com/graphql/graphiql/commit/27e7eb60247437d992c1fcdcc6870cb7892d4b92) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - allow multiple independent instances of GraphiQL on the same page

  - store `onClickReference` in query editor in React `ref`
  - remove `onClickReference` from variable editor
  - fix shortcut text per OS for run query in execute query button's tooltip and in default query
  - allow override all default GraphiQL plugins
  - adjust operation argument color to be purple from GraphiQL v2 on dark/light theme

- [#4009](https://github.com/graphql/graphiql/pull/4009) [`4936492`](https://github.com/graphql/graphiql/commit/49364924d0da05a86f7c6c3139d44aed0e474531) Thanks [@dimaMachina](https://github.com/dimaMachina)! - separate store actions from state, add `useGraphiQLActions` state

- [#4002](https://github.com/graphql/graphiql/pull/4002) [`2d9faec`](https://github.com/graphql/graphiql/commit/2d9faec57830b38aa175929c47a55c959c327535) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove UMD builds

### Patch Changes

- [#3949](https://github.com/graphql/graphiql/pull/3949) [`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - replace `onCopyQuery` hook with `copyQuery` function

  - replace `onMergeQuery` hook with `mergeQuery` function
  - replace `onPrettifyEditors` hook with `prettifyEditors` function
  - remove `fetcher` prop from `SchemaContextProvider` and `schemaStore` and add `fetcher` to `executionStore`
  - add `onCopyQuery` and `onPrettifyQuery` props to `EditorContextProvider`
  - remove exports (use `GraphiQLProvider`)
    - `EditorContextProvider`
    - `ExecutionContextProvider`
    - `PluginContextProvider`
    - `SchemaContextProvider`
    - `StorageContextProvider`
    - `ExecutionContextType`
    - `PluginContextType`
  - feat(@graphiql/react): migrate React context to zustand:
    - replace `useExecutionContext` with `useExecutionStore` hook
    - replace `useEditorContext` with `useEditorStore` hook
  - prefer `getComputedStyle` over `window.getComputedStyle`

- [#3234](https://github.com/graphql/graphiql/pull/3234) [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Migration from Codemirror to [Monaco Editor](https://github.com/microsoft/monaco-editor)

  Replacing `codemirror-graphql` with [`monaco-graphql`](https://github.com/graphql/graphiql/tree/main/packages/monaco-graphql)

  Support for comments in **Variables** and **Headers** editors

## 5.0.0-rc.3

### Major Changes

- [#4009](https://github.com/graphql/graphiql/pull/4009) [`4936492`](https://github.com/graphql/graphiql/commit/49364924d0da05a86f7c6c3139d44aed0e474531) Thanks [@dimaMachina](https://github.com/dimaMachina)! - separate store actions from state, add `useGraphiQLActions` state

## 5.0.0-rc.2

### Major Changes

- [#4002](https://github.com/graphql/graphiql/pull/4002) [`2d9faec`](https://github.com/graphql/graphiql/commit/2d9faec57830b38aa175929c47a55c959c327535) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove UMD builds

## 5.0.0-rc.1

### Major Changes

- [#3990](https://github.com/graphql/graphiql/pull/3990) [`27e7eb6`](https://github.com/graphql/graphiql/commit/27e7eb60247437d992c1fcdcc6870cb7892d4b92) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - allow multiple independent instances of GraphiQL on the same page
  - store `onClickReference` in query editor in React `ref`
  - remove `onClickReference` from variable editor
  - fix shortcut text per OS for run query in execute query button's tooltip and in default query
  - allow override all default GraphiQL plugins
  - adjust operation argument color to be purple from GraphiQL v2 on dark/light theme

## 4.0.7-rc.0

### Patch Changes

- [#3949](https://github.com/graphql/graphiql/pull/3949) [`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - replace `onCopyQuery` hook with `copyQuery` function

  - replace `onMergeQuery` hook with `mergeQuery` function
  - replace `onPrettifyEditors` hook with `prettifyEditors` function
  - remove `fetcher` prop from `SchemaContextProvider` and `schemaStore` and add `fetcher` to `executionStore`
  - add `onCopyQuery` and `onPrettifyQuery` props to `EditorContextProvider`
  - remove exports (use `GraphiQLProvider`)
    - `EditorContextProvider`
    - `ExecutionContextProvider`
    - `PluginContextProvider`
    - `SchemaContextProvider`
    - `StorageContextProvider`
    - `ExecutionContextType`
    - `PluginContextType`
  - feat(@graphiql/react): migrate React context to zustand:
    - replace `useExecutionContext` with `useExecutionStore` hook
    - replace `useEditorContext` with `useEditorStore` hook
  - prefer `getComputedStyle` over `window.getComputedStyle`

- [#3234](https://github.com/graphql/graphiql/pull/3234) [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Migration from Codemirror to [Monaco Editor](https://github.com/microsoft/monaco-editor)

  Replacing `codemirror-graphql` with [`monaco-graphql`](https://github.com/graphql/graphiql/tree/main/packages/monaco-graphql)

  Support for comments in **Variables** and **Headers** editors

- Updated dependencies [[`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e), [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91), [`2455907`](https://github.com/graphql/graphiql/commit/245590708cea52ff6f1bcce8664781f7e56029cb)]:
  - @graphiql/react@0.35.0-rc.0

## 4.0.6

### Patch Changes

- [#3970](https://github.com/graphql/graphiql/pull/3970) [`7054591`](https://github.com/graphql/graphiql/commit/70545912d1b3bb9e0c45e766a5c89896a9c4dfb7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - revert https://github.com/graphql/graphiql/pull/3946 to have support multiple embedded graphiql instances on the same page

## 4.0.5

### Patch Changes

- [#3946](https://github.com/graphql/graphiql/pull/3946) [`71755b7`](https://github.com/graphql/graphiql/commit/71755b7f412f8f3dd9f5194d3f1e0168b9ad07af) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand:
  - replace `useExecutionContext` with `useExecutionStore` hook
  - replace `useEditorContext` with `useEditorStore` hook
  - replace `useAutoCompleteLeafs` hook with `getAutoCompleteLeafs` function
- Updated dependencies [[`71755b7`](https://github.com/graphql/graphiql/commit/71755b7f412f8f3dd9f5194d3f1e0168b9ad07af), [`6d631e2`](https://github.com/graphql/graphiql/commit/6d631e2e558d038476fe235b1506bc52ecf68781)]:
  - @graphiql/react@0.34.0

## 4.0.4

### Patch Changes

- [#3945](https://github.com/graphql/graphiql/pull/3945) [`117627b`](https://github.com/graphql/graphiql/commit/117627b451607198dd7b9dc19e76da8a71d14b71) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand, replace `usePluginContext` with `usePluginStore` hook

- [#3947](https://github.com/graphql/graphiql/pull/3947) [`fa78481`](https://github.com/graphql/graphiql/commit/fa784819ce020346052901019079fb5b44af6ef0) Thanks [@dimaMachina](https://github.com/dimaMachina)! - refactor `useStorage`, `useDocExplorer` and `useHistory` hooks

- [#3943](https://github.com/graphql/graphiql/pull/3943) [`7275472`](https://github.com/graphql/graphiql/commit/727547236bbd4fc721069ceae63eb8a6acffa57e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand, replace `useSchemaContext` with `useSchemaStore` hook

- Updated dependencies [[`117627b`](https://github.com/graphql/graphiql/commit/117627b451607198dd7b9dc19e76da8a71d14b71), [`fa78481`](https://github.com/graphql/graphiql/commit/fa784819ce020346052901019079fb5b44af6ef0), [`7275472`](https://github.com/graphql/graphiql/commit/727547236bbd4fc721069ceae63eb8a6acffa57e), [`00c8605`](https://github.com/graphql/graphiql/commit/00c8605e1f3068e6547a5a9e969571a86a57f921)]:
  - @graphiql/react@0.33.0

## 4.0.3

### Patch Changes

- [#3939](https://github.com/graphql/graphiql/pull/3939) [`69ad489`](https://github.com/graphql/graphiql/commit/69ad489678d0096432d5c4b1749d87343f4ed1f7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - prefer `React.FC` type when declaring React components

## 4.0.2

### Patch Changes

- Updated dependencies [[`98d13a3`](https://github.com/graphql/graphiql/commit/98d13a3e515eb70aaf5a5ba669c680d5959fef67)]:
  - @graphiql/react@0.32.0

## 4.0.1

### Patch Changes

- [#3915](https://github.com/graphql/graphiql/pull/3915) [`bc31cd9`](https://github.com/graphql/graphiql/commit/bc31cd99a92693238e7359456e3cc22ed0387df0) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix unpkg.com results to `Not found` when `main` field isn't specified in `package.json`

- Updated dependencies [[`e7c436b`](https://github.com/graphql/graphiql/commit/e7c436b329a68981bdbd2b662be94875a546a1d6)]:
  - @graphiql/react@0.31.0

## 4.0.0

### Major Changes

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - drop commonjs build files

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - support react 19, drop support react 16 and react 17

  - replace deprecated `ReactDOM.unmountComponentAtNode()` and `ReactDOM.render()` with `root.unmount()` and `createRoot(container).render()`
  - update `@radix-ui` and `@headlessui/react` dependencies

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - `style.css` import was changed

  ## Migration

  ```diff
  -import '@graphiql/plugin-explorer/dist/style.css';
  +import '@graphiql/plugin-explorer/style.css';
  ```

### Minor Changes

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Update GraphiQL CDN example using ESM-based CDN esm.sh

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - generate types with `vite-plugin-dts`

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update `vite` and related dependencies

### Patch Changes

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - improve explorer styles

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix types incorrect types entry

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - use `vite build --watch` instead of `vite` for `dev` script because we don't need development server for them

  do not use `vite-plugin-dts` when generating umd build

- Updated dependencies [[`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602)]:
  - @graphiql/react@0.30.0

## 4.0.0-alpha.2

### Patch Changes

- [#3740](https://github.com/graphql/graphiql/pull/3740) [`3c12ce0`](https://github.com/graphql/graphiql/commit/3c12ce01eb3b2ec9a317a2fea2bb92602b748a8b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix types incorrect types entry

## 4.0.0-alpha.1

### Patch Changes

- [#3738](https://github.com/graphql/graphiql/pull/3738) [`eaa415c`](https://github.com/graphql/graphiql/commit/eaa415cce5c3baecea76068c02953884eec5ba2e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - improve explorer styles

## 4.0.0-alpha.0

### Major Changes

- [#3709](https://github.com/graphql/graphiql/pull/3709) [`9baf1f0`](https://github.com/graphql/graphiql/commit/9baf1f0fc9f32404fbb8bf57b3d1c2c2c8778ddb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - `style.css` import was changed

  ## Migration

  ```diff
  -import '@graphiql/plugin-explorer/dist/style.css';
  +import '@graphiql/plugin-explorer/style.css';
  ```

### Minor Changes

- [#3702](https://github.com/graphql/graphiql/pull/3702) [`00415d2`](https://github.com/graphql/graphiql/commit/00415d2940c4d76a4a9e683e9fa0504ba97dd627) Thanks [@dimaMachina](https://github.com/dimaMachina)! - generate types with `vite-plugin-dts`

### Patch Changes

- [#3705](https://github.com/graphql/graphiql/pull/3705) [`8ff87d7`](https://github.com/graphql/graphiql/commit/8ff87d7b6b3d5d12b539612a39ca3abf7e631106) Thanks [@dimaMachina](https://github.com/dimaMachina)! - use `vite build --watch` instead of `vite` for `dev` script because we don't need development server for them

  do not use `vite-plugin-dts` when generating umd build

- Updated dependencies [[`00415d2`](https://github.com/graphql/graphiql/commit/00415d2940c4d76a4a9e683e9fa0504ba97dd627), [`9baf1f0`](https://github.com/graphql/graphiql/commit/9baf1f0fc9f32404fbb8bf57b3d1c2c2c8778ddb), [`8ff87d7`](https://github.com/graphql/graphiql/commit/8ff87d7b6b3d5d12b539612a39ca3abf7e631106), [`82bc961`](https://github.com/graphql/graphiql/commit/82bc961a33c4e9da29dffb4a603035a4909f49ad), [`3c1a345`](https://github.com/graphql/graphiql/commit/3c1a345acd9bf07b45bc230009cb57c51c425673)]:
  - @graphiql/react@1.0.0-alpha.0

## 3.2.6

### Patch Changes

- Updated dependencies [[`cb29e9f`](https://github.com/graphql/graphiql/commit/cb29e9fbe1362778bc327513fc884c4ec419775e), [`1adc40c`](https://github.com/graphql/graphiql/commit/1adc40cc56dbf79296bb857156e6adce1c44dcbe)]:
  - @graphiql/react@0.29.0

## 3.2.5

### Patch Changes

- [#3837](https://github.com/graphql/graphiql/pull/3837) [`5e76a4f`](https://github.com/graphql/graphiql/commit/5e76a4f3c8b089a1de0c92c9b9c1edc2ae3f49d4) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix query builder updated only first selected field in query editor due recent enabled react-compiler

## 3.2.4

### Patch Changes

- Updated dependencies [[`3633d61`](https://github.com/graphql/graphiql/commit/3633d61c3c597adf60c0ec1bbf98cf6a1f49beed)]:
  - @graphiql/react@0.28.0

## 3.2.3

### Patch Changes

- Updated dependencies [[`f86e2bc`](https://github.com/graphql/graphiql/commit/f86e2bce40826b3d07755f91b37a72051de00f9c)]:
  - @graphiql/react@0.27.0

## 3.2.2

### Patch Changes

- Updated dependencies [[`959ed21`](https://github.com/graphql/graphiql/commit/959ed21815682fc439f64d78e23e603a8f313a6f), [`9aef83a`](https://github.com/graphql/graphiql/commit/9aef83a32aeb5f193a3ff0f191c95d09eb0d70b6)]:
  - @graphiql/react@0.26.0

## 3.2.1

### Patch Changes

- Updated dependencies [[`7404e8e`](https://github.com/graphql/graphiql/commit/7404e8e6c62b06107f452142493297ec70f1649c)]:
  - @graphiql/react@0.25.0

## 3.2.0

### Minor Changes

- [#3682](https://github.com/graphql/graphiql/pull/3682) [`6c9f0df`](https://github.com/graphql/graphiql/commit/6c9f0df83ea4afe7fa59f84d83d59fba73dc3931) Thanks [@yaacovCR](https://github.com/yaacovCR)! - Support v17 of `graphql-js` from `17.0.0-alpha.2` forward.

  Includes support for the latest incremental delivery response format. For further details, see https://github.com/graphql/defer-stream-wg/discussions/69.

### Patch Changes

- Updated dependencies [[`6c9f0df`](https://github.com/graphql/graphiql/commit/6c9f0df83ea4afe7fa59f84d83d59fba73dc3931)]:
  - @graphiql/react@0.24.0

## 3.1.1

### Patch Changes

- [#3657](https://github.com/graphql/graphiql/pull/3657) [`5bc7b84`](https://github.com/graphql/graphiql/commit/5bc7b84531b6404553787615d61a5cbcc96c1d6f) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update vite to v5

- [#3656](https://github.com/graphql/graphiql/pull/3656) [`93c7e9f`](https://github.com/graphql/graphiql/commit/93c7e9fd224cb4f1e9a86b3391efc1e0ef6e1e3f) Thanks [@dimaMachina](https://github.com/dimaMachina)! - set `build.minify: false` for cjs/esm builds since minified variable names change every build time

- Updated dependencies [[`5bc7b84`](https://github.com/graphql/graphiql/commit/5bc7b84531b6404553787615d61a5cbcc96c1d6f), [`fdec377`](https://github.com/graphql/graphiql/commit/fdec377f28ac0d918a219b78dfa2d8f0996ff84d), [`93c7e9f`](https://github.com/graphql/graphiql/commit/93c7e9fd224cb4f1e9a86b3391efc1e0ef6e1e3f)]:
  - @graphiql/react@0.23.0

## 3.1.0

### Minor Changes

- [#3633](https://github.com/graphql/graphiql/pull/3633) [`8849a15b`](https://github.com/graphql/graphiql/commit/8849a15b6e80fe1b34e8250e74a56b85ccdb6ac6) Thanks [@dimaMachina](https://github.com/dimaMachina)! - adjust `@graphiql/plugin-explorer` styles

### Patch Changes

- Updated dependencies [[`adf0ba01`](https://github.com/graphql/graphiql/commit/adf0ba019902dcac2e49ccee69b79a6665c4766d)]:
  - @graphiql/react@0.22.4

## 3.0.3

### Patch Changes

- Updated dependencies [[`335d830c`](https://github.com/graphql/graphiql/commit/335d830c2a4e551ef97fbeff8ed7c538ff5cd4af)]:
  - @graphiql/react@0.22.3

## 3.0.2

### Patch Changes

- Updated dependencies [[`03ab3a6b`](https://github.com/graphql/graphiql/commit/03ab3a6b76378591ef79a828d80cc69b0b8f2842)]:
  - @graphiql/react@0.22.2

## 3.0.1

### Patch Changes

- Updated dependencies [[`224b43f5`](https://github.com/graphql/graphiql/commit/224b43f5473456f264a82998d48a34a441537f54)]:
  - @graphiql/react@0.22.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`d48f4ef5`](https://github.com/graphql/graphiql/commit/d48f4ef56578dad7ec90f33458353791e463ef7b)]:
  - @graphiql/react@0.22.0

## 2.0.0

### Patch Changes

- Updated dependencies [[`5d051054`](https://github.com/graphql/graphiql/commit/5d05105469c3f0cbeb5e294da1cf6ff2355e4eb5)]:
  - @graphiql/react@0.21.0

## 1.0.4

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.20.4

## 1.0.3

### Patch Changes

- [#3526](https://github.com/graphql/graphiql/pull/3526) [`2b6ea316`](https://github.com/graphql/graphiql/commit/2b6ea3166c8d8e152f16d87c878aa8a66f1b3775) Thanks [@benjie](https://github.com/benjie)! - Fix bug whereby typing quickly into explorer sidebar would result in characters being dropped.

- Updated dependencies [[`2b6ea316`](https://github.com/graphql/graphiql/commit/2b6ea3166c8d8e152f16d87c878aa8a66f1b3775)]:
  - @graphiql/react@0.20.3

## 1.0.2

### Patch Changes

- Updated dependencies [[`e89c432d`](https://github.com/graphql/graphiql/commit/e89c432d8d2b91f087b683360f23e0686462bc02)]:
  - @graphiql/react@0.20.2

## 1.0.1

### Patch Changes

- Updated dependencies [[`39bf31d1`](https://github.com/graphql/graphiql/commit/39bf31d15b1e7fb5f235ec9adc1ce8081536de4a)]:
  - @graphiql/react@0.20.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f6afd22d`](https://github.com/graphql/graphiql/commit/f6afd22d3f5a20089759042f16fd865646a32038)]:
  - @graphiql/react@0.20.0

## 0.3.5

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.19.4

## 0.3.4

### Patch Changes

- Updated dependencies [[`2348641c`](https://github.com/graphql/graphiql/commit/2348641c07748691c478ac5f67032b7e9081f9cb)]:
  - @graphiql/react@0.19.3

## 0.3.3

### Patch Changes

- Updated dependencies [[`d67c13f6`](https://github.com/graphql/graphiql/commit/d67c13f6e1f478b171801afd0767b98312db04c9)]:
  - @graphiql/react@0.19.2

## 0.3.2

### Patch Changes

- [#3341](https://github.com/graphql/graphiql/pull/3341) [`e4a36207`](https://github.com/graphql/graphiql/commit/e4a362071edf1db53f87f271c523ab2f3a5c4717) Thanks [@acao](https://github.com/acao)! - Fix code exporter plugin on early init, add hooks

- Updated dependencies [[`17069e7a`](https://github.com/graphql/graphiql/commit/17069e7a0224dbce3f5523630a898e093f5c47c9), [`e4a36207`](https://github.com/graphql/graphiql/commit/e4a362071edf1db53f87f271c523ab2f3a5c4717)]:
  - @graphiql/react@0.19.1

## 0.3.1

### Patch Changes

- [#3350](https://github.com/graphql/graphiql/pull/3350) [`119775ed`](https://github.com/graphql/graphiql/commit/119775ed191ce075532a6e85cbfeac2364c0ba40) Thanks [@acao](https://github.com/acao)! - handle null editor in explorer plugin [(PR)](https://github.com/graphql/graphiql/pull/3340)

## 0.3.0

### Minor Changes

- [#3330](https://github.com/graphql/graphiql/pull/3330) [`bed5fc86`](https://github.com/graphql/graphiql/commit/bed5fc86173eb0e770f966fa529ee035b97a1349) Thanks [@acao](https://github.com/acao)! - **BREAKING CHANGE**: fix lifecycle issue in plugin-explorer, change implementation pattern

  `value` and `setValue` is no longer an implementation detail, and are handled internally by plugins. the plugin signature has changed slightly as well.

  now, instead of something like this:

  ```jsx
  import { useExplorerPlugin } from '@graphiql/plugin-explorer';
  import { snippets } from './snippets';
  import { useExporterPlugin } from '@graphiql/plugin-code-exporter';

  const App = () => {
    const [query, setQuery] = React.useState('');
    const explorerPlugin = useExplorerPlugin({
      query,
      onEdit: setQuery,
    });
    const codeExporterPlugin = useExporterPlugin({
      query,
      snippets,
    });

    const plugins = React.useMemo(
      () => [explorerPlugin, codeExporterPlugin],
      [explorerPlugin, codeExporterPlugin],
    );

    return (
      <GraphiQL
        query={query}
        onEditQuery={setQuery}
        plugins={plugins}
        fetcher={fetcher}
      />
    );
  };
  ```

  you can just do this:

  ```jsx
  import { explorerPlugin } from '@graphiql/plugin-explorer';
  import { snippets } from './snippets';
  import { codeExporterPlugin } from '@graphiql/plugin-code-exporter';
  import { createGraphiQLFetcher } from '@graphiql/toolkit';

  // only invoke these inside the component lifecycle
  // if there are dynamic values, and then use useMemo() (see below)
  const explorer = explorerPlugin();
  const exporter = codeExporterPlugin({ snippets });

  const fetcher = createGraphiQLFetcher({ url: '/graphql' });

  const App = () => {
    return <GraphiQL plugins={[explorer, exporter]} fetcher={fetcher} />;
  };
  ```

  or this, for more complex state-driven needs:

  ```jsx
  import { useMemo } from 'react';
  import { explorerPlugin } from '@graphiql/plugin-explorer';
  import { snippets } from './snippets';
  import { codeExporterPlugin } from '@graphiql/plugin-code-exporter';

  const explorer = explorerPlugin();
  const fetcher = createGraphiQLFetcher({ url: '/graphql' });

  const App = () => {
    const { snippets } = useMyUserSuppliedState();
    const exporter = useMemo(
      () => codeExporterPlugin({ snippets }),
      [snippets],
    );

    return <GraphiQL plugins={[explorer, exporter]} fetcher={fetcher} />;
  };
  ```

## 0.2.0

### Minor Changes

- [#3293](https://github.com/graphql/graphiql/pull/3293) [`1b8f3fe9`](https://github.com/graphql/graphiql/commit/1b8f3fe9c41697855378ec13a76f1a908fda778a) Thanks [@B2o5T](https://github.com/B2o5T)! - BREAKING CHANGE: umd build was renamed to `index.umd.js`

### Patch Changes

- [#3319](https://github.com/graphql/graphiql/pull/3319) [`2f51b1a5`](https://github.com/graphql/graphiql/commit/2f51b1a5f25ac515af89b708c009796c57a611fb) Thanks [@LekoArts](https://github.com/LekoArts)! - Use named `Explorer` import from `graphiql-explorer` to fix an issue where the bundler didn't correctly choose either the `default` or `Explorer` import. This change should ensure that `@graphiql/plugin-explorer` works correctly without `graphiql-explorer` being bundled.

## 0.1.22

### Patch Changes

- [#3292](https://github.com/graphql/graphiql/pull/3292) [`f86e4172`](https://github.com/graphql/graphiql/commit/f86e41721d4d990535253b579c810bc5e291b40b) Thanks [@B2o5T](https://github.com/B2o5T)! - fix umd build names `graphiql-plugin-code-exporter.umd.js` and `graphiql-plugin-explorer.umd.js`

## 0.1.21

### Patch Changes

- [#3229](https://github.com/graphql/graphiql/pull/3229) [`0a65e720`](https://github.com/graphql/graphiql/commit/0a65e7207b6bc4174896f6acca8a40f45d2fb1b8) Thanks [@B2o5T](https://github.com/B2o5T)! - exclude peer dependencies and dependencies from bundle

- [#3251](https://github.com/graphql/graphiql/pull/3251) [`f8d8509b`](https://github.com/graphql/graphiql/commit/f8d8509b432803eaeb2e53b6b6d4321535e11c1d) Thanks [@B2o5T](https://github.com/B2o5T)! - always bundle `package.json#dependencies` for UMD build for `@graphiql/plugin-code-exporter` and `@graphiql/plugin-explorer`

- [#3236](https://github.com/graphql/graphiql/pull/3236) [`64da8c30`](https://github.com/graphql/graphiql/commit/64da8c3074628bb411eb1c28aa4738843f60910c) Thanks [@B2o5T](https://github.com/B2o5T)! - update vite

- [#3252](https://github.com/graphql/graphiql/pull/3252) [`c915a4ee`](https://github.com/graphql/graphiql/commit/c915a4eead4ae39cb5c9fa615b5b55945da06c01) Thanks [@B2o5T](https://github.com/B2o5T)! - `@graphiql/react` should be in `peerDependencies` not in `dependencies`

- Updated dependencies [[`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`bc9d243d`](https://github.com/graphql/graphiql/commit/bc9d243d40b95f95fc9d00d25aa0dd1733952626), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`67bf93a3`](https://github.com/graphql/graphiql/commit/67bf93a33e98c60ae3a686063a1c47037f88ef49)]:
  - @graphiql/react@0.18.0

## 0.1.21-alpha.1

### Patch Changes

- [#3229](https://github.com/graphql/graphiql/pull/3229) [`0a65e720`](https://github.com/graphql/graphiql/commit/0a65e7207b6bc4174896f6acca8a40f45d2fb1b8) Thanks [@B2o5T](https://github.com/B2o5T)! - exclude peer dependencies and dependencies from bundle

- Updated dependencies [[`bc9d243d`](https://github.com/graphql/graphiql/commit/bc9d243d40b95f95fc9d00d25aa0dd1733952626), [`67bf93a3`](https://github.com/graphql/graphiql/commit/67bf93a33e98c60ae3a686063a1c47037f88ef49)]:
  - @graphiql/react@0.18.0-alpha.1

## 0.1.21-alpha.0

### Patch Changes

- Updated dependencies [[`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696)]:
  - @graphiql/react@0.18.0-alpha.0

## 0.1.20

### Patch Changes

- [#3124](https://github.com/graphql/graphiql/pull/3124) [`c645932c`](https://github.com/graphql/graphiql/commit/c645932c7973e11ad917e1d1d897fd409f8c042f) Thanks [@B2o5T](https://github.com/B2o5T)! - avoid unnecessary renders by using useMemo or useCallback

- Updated dependencies [[`911cf3e0`](https://github.com/graphql/graphiql/commit/911cf3e0b0fa13268245463c8db8299279e5c461), [`c645932c`](https://github.com/graphql/graphiql/commit/c645932c7973e11ad917e1d1d897fd409f8c042f), [`2ca4841b`](https://github.com/graphql/graphiql/commit/2ca4841baf74e87a3f067b3415f8da3347ee3898), [`7bf90929`](https://github.com/graphql/graphiql/commit/7bf90929f62ba812c0946e0424f9f843f7b6b0ff), [`431b7fe1`](https://github.com/graphql/graphiql/commit/431b7fe1efefa4867f0ea617adc436b1117052e8)]:
  - @graphiql/react@0.17.6

## 0.1.19

### Patch Changes

- Updated dependencies [[`2b212941`](https://github.com/graphql/graphiql/commit/2b212941628498957d95ee89a7a5a0623f391b7a), [`9b333a04`](https://github.com/graphql/graphiql/commit/9b333a047d6b75db7681f484156d8772e9f91810)]:
  - @graphiql/react@0.17.5

## 0.1.18

### Patch Changes

- Updated dependencies [[`707f3cbc`](https://github.com/graphql/graphiql/commit/707f3cbca3ac2ce186058e7d2b145cdf69bf7d9c)]:
  - @graphiql/react@0.17.4

## 0.1.17

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.17.3

## 0.1.16

### Patch Changes

- Updated dependencies [[`2e477eb2`](https://github.com/graphql/graphiql/commit/2e477eb24672a242ae4a4f2dfaeaf41152ed7ee9), [`4879984e`](https://github.com/graphql/graphiql/commit/4879984ea1803a6e9f97d81c97e8ba27aacddae9), [`51007002`](https://github.com/graphql/graphiql/commit/510070028b7d8e98f2ba25f396519976aea5fa4b)]:
  - @graphiql/react@0.17.2

## 0.1.15

### Patch Changes

- [#3017](https://github.com/graphql/graphiql/pull/3017) [`4a2284f5`](https://github.com/graphql/graphiql/commit/4a2284f54809f91d03ba51b9eb4e3ba7b8b7e773) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Avoid bundling code from `react/jsx-runtime` so that the package can be used with Preact

- [#3063](https://github.com/graphql/graphiql/pull/3063) [`5792aaa5`](https://github.com/graphql/graphiql/commit/5792aaa5b26b68dc396f7bfb5dc3defd9331b831) Thanks [@B2o5T](https://github.com/B2o5T)! - avoid `useMemo` with empty array `[]` since React can't guarantee stable reference, + lint restrict syntax for future mistakes

- Updated dependencies [[`2d5c60ec`](https://github.com/graphql/graphiql/commit/2d5c60ecf717abafde2bddd32b2772261d3eec8b), [`b9c13328`](https://github.com/graphql/graphiql/commit/b9c13328f3d28c0026ee0f0ecc7213065c9b016d), [`4a2284f5`](https://github.com/graphql/graphiql/commit/4a2284f54809f91d03ba51b9eb4e3ba7b8b7e773), [`881a2024`](https://github.com/graphql/graphiql/commit/881a202497d5a58eb5260a5aa54c0c88930d69a0), [`7cf4908a`](https://github.com/graphql/graphiql/commit/7cf4908a5d4bd58af315047f4dec5236e8c701fc)]:
  - @graphiql/react@0.17.1

## 0.1.14

### Patch Changes

- Updated dependencies [[`bdc966cb`](https://github.com/graphql/graphiql/commit/bdc966cba6134a72ff7fe40f76543c77ba15d4a4), [`65f5176a`](https://github.com/graphql/graphiql/commit/65f5176a408cfbbc514ca60e2e4bd2ea133a8b0b)]:
  - @graphiql/react@0.17.0

## 0.1.13

### Patch Changes

- Updated dependencies [[`f7addb20`](https://github.com/graphql/graphiql/commit/f7addb20c4a558fbfb4112c8ff095bbc8f9d9147), [`cec3fb2a`](https://github.com/graphql/graphiql/commit/cec3fb2a493c4a0c40df7dfad04e1a95ed35e786), [`11e6ad11`](https://github.com/graphql/graphiql/commit/11e6ad11e745c671eb320731697887bb8d7177b7), [`c70d9165`](https://github.com/graphql/graphiql/commit/c70d9165cc1ef8eb1cd0d6b506ced98c626597f9), [`d502a33b`](https://github.com/graphql/graphiql/commit/d502a33b4332f1025e947c02d7cfdc5799365c8d), [`0669767e`](https://github.com/graphql/graphiql/commit/0669767e1e2196a78cbefe3679a52bcbb341e913), [`f263f778`](https://github.com/graphql/graphiql/commit/f263f778cb95b9f413bd09ca56a43f5b9c2f6215), [`ccba2f33`](https://github.com/graphql/graphiql/commit/ccba2f33b67a03f492222f7afde1354cfd033b42), [`4ff2794c`](https://github.com/graphql/graphiql/commit/4ff2794c8b6032168e27252096cb276ce712878e)]:
  - @graphiql/react@0.16.0

## 0.1.12

### Patch Changes

- Updated dependencies [[`16174a05`](https://github.com/graphql/graphiql/commit/16174a053ed89fb9554d096395ab7bf69c8f6911), [`f6cae4ea`](https://github.com/graphql/graphiql/commit/f6cae4eaa0258ea7fcde97ba6368830955f0abf4), [`3340fd74`](https://github.com/graphql/graphiql/commit/3340fd745e181ba8f1f5a6ed002a04d253a78d4a), [`0851d5f9`](https://github.com/graphql/graphiql/commit/0851d5f9ecf709597d0a698609d88f99c4395665), [`83364b28`](https://github.com/graphql/graphiql/commit/83364b28020b5946ed58908d6d977f1de766e75d), [`3a7d0007`](https://github.com/graphql/graphiql/commit/3a7d00071922e2005777c92daf6ad0c1ce3e2816)]:
  - @graphiql/react@0.15.0

## 0.1.11

### Patch Changes

- Updated dependencies [[`29630c22`](https://github.com/graphql/graphiql/commit/29630c2219bca8b825ab0897840864364a9de2e8), [`8f926489`](https://github.com/graphql/graphiql/commit/8f9264896e9971951853463a283a90ba3d1310ef), [`2ba2f620`](https://github.com/graphql/graphiql/commit/2ba2f620b6e7de3ae6b5ea641f33e600f7f44e08)]:
  - @graphiql/react@0.14.0

## 0.1.10

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.13.7

## 0.1.9

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.13.6

## 0.1.8

### Patch Changes

- Updated dependencies [[`682ad06e`](https://github.com/graphql/graphiql/commit/682ad06e58ded2f82fa973e8e6613dd654417fe2)]:
  - @graphiql/react@0.13.5

## 0.1.7

### Patch Changes

- Updated dependencies [[`4e2f7ff9`](https://github.com/graphql/graphiql/commit/4e2f7ff99c578ceae54a1ae17c02088bd91b89c3)]:
  - @graphiql/react@0.13.4

## 0.1.6

### Patch Changes

- Updated dependencies [[`42700076`](https://github.com/graphql/graphiql/commit/4270007671ce52f6c2250739916083611748b657), [`36839800`](https://github.com/graphql/graphiql/commit/36839800de128b05d11c262036c8240390c72a14), [`905f2e5e`](https://github.com/graphql/graphiql/commit/905f2e5ea3f0b304d27ea583e250ed4baff5016e)]:
  - @graphiql/react@0.13.3

## 0.1.5

### Patch Changes

- Updated dependencies [[`39b4668d`](https://github.com/graphql/graphiql/commit/39b4668d43176526d37ecf07d8c86901d53e0d80)]:
  - @graphiql/react@0.13.2

## 0.1.4

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.13.1

## 0.1.3

### Patch Changes

- [#2735](https://github.com/graphql/graphiql/pull/2735) [`ca067d88`](https://github.com/graphql/graphiql/commit/ca067d88148c5d221d196790a997ad599038fad1) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Use the new CSS variables for color alpha values defined in `@graphiql/react` in style definitions

* [#2757](https://github.com/graphql/graphiql/pull/2757) [`32a70065`](https://github.com/graphql/graphiql/commit/32a70065434eaa7733e28cda0ea0e7d51952e62a) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Use different colors for field names and argument names

* Updated dependencies [[`ca067d88`](https://github.com/graphql/graphiql/commit/ca067d88148c5d221d196790a997ad599038fad1), [`32a70065`](https://github.com/graphql/graphiql/commit/32a70065434eaa7733e28cda0ea0e7d51952e62a)]:
  - @graphiql/react@0.13.0

## 0.1.2

### Patch Changes

- [#2750](https://github.com/graphql/graphiql/pull/2750) [`cdc44aab`](https://github.com/graphql/graphiql/commit/cdc44aabdc549f5a0359b8f69506cc0c31661d16) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Remove `type` field from `package.json` to support both ES Modules and CommonJS

- Updated dependencies []:
  - @graphiql/react@0.12.1

## 0.1.1

### Patch Changes

- [#2745](https://github.com/graphql/graphiql/pull/2745) [`92a17490`](https://github.com/graphql/graphiql/commit/92a17490c3842b4f83ed1065b73a803f73d02a17) Thanks [@acao](https://github.com/acao)! - Specify MIT license for `@graphiql/plugin-explorer` `package.json`

* [#2731](https://github.com/graphql/graphiql/pull/2731) [`3e8f0d1f`](https://github.com/graphql/graphiql/commit/3e8f0d1fe4da5cdea94240119bbad587720ca324) Thanks [@hasparus](https://github.com/hasparus)! - Expose typings for graphiql-explorer

- [#2738](https://github.com/graphql/graphiql/pull/2738) [`33bef178`](https://github.com/graphql/graphiql/commit/33bef17832edb29f5b26f4ed1cf33fd0d7fbbed1) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix peer dependency versions

* [#2747](https://github.com/graphql/graphiql/pull/2747) [`52d0003f`](https://github.com/graphql/graphiql/commit/52d0003fd0c405da65b7b23dcfed9f3aacbad067) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Make `@graphiql/react` a real dependency instead of a peer dependency

* Updated dependencies [[`98e14155`](https://github.com/graphql/graphiql/commit/98e14155c650ee7c5ac639e594eb47f0052b7fa9), [`7dfea94a`](https://github.com/graphql/graphiql/commit/7dfea94afc0cfe79b5080f10d840bfdce53f02d7), [`3aa1f39f`](https://github.com/graphql/graphiql/commit/3aa1f39f6df559b54f703937ed510c8ba1f21058), [`0219eef3`](https://github.com/graphql/graphiql/commit/0219eef39146495749aca2487112db52fa3bb8fd)]:
  - @graphiql/react@0.12.0

## 0.1.0

### Minor Changes

- [#2724](https://github.com/graphql/graphiql/pull/2724) [`dd5db3b2`](https://github.com/graphql/graphiql/commit/dd5db3b2ee08b240ba7b77a9b7ff621115bd25f3) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add a package that exports a plugin to use the GraphiQL Explorer from OneGraph
