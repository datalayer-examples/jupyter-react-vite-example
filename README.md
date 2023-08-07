[![Datalayer](https://assets.datalayer.design/datalayer-25.svg)](https://datalayer.io)

# 🪐 ⚛️ Jupyter React Vite Example

Example to showcase [Jupyter React](https://github.com/datalayer/jupyter-ui/tree/main/packages/react) usage in a [Vite.js](https://vitejs.dev) Web application.

```bash
# You need yarn 3.5.0.
yarn
yarn dev
```

Ensure to add the following script in your HTML if you want to support .

```js
    <!-- Needed for ipywidgets -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.4/require.min.js"></script>
    <script type="module">
      globalThis.__webpack_public_path__ = "";
    </script>
```

> 🚧 Only `dev-mode` is working for now - `yarn build` will succeed but an exception will be thrown runtime.

```bash
yarn build
cd dist
python -m http.server 8675 # Or any other local server.
open http://localhost:8675 # Throws error, see you devtool console - require.min.js:1 Uncaught (in promise) Error: Module name "../package.json" has not been loaded yet for context: _. Use require([]) http://requirejs.org/docs/errors.html#notloaded
```

<div align="center" style="text-align: center">
  <img alt="Jupyter React Gallery" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyter-react-gallery.gif" />
</div>

## ⚖️ License

Copyright (c) 2022 Datalayer, Inc.

Released under the terms of the MIT license (see [LICENSE](./LICENSE)).
