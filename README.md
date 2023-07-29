[![Datalayer](https://assets.datalayer.design/datalayer-25.svg)](https://datalayer.io)

# 🪐 ⚛️ Jupyter React Vite Example

Example to showcase [Jupyter React](https://github.com/datalayer/jupyter-react) usage in a [Vite.js](https://vitejs.dev/).

> 🚧 Only devmode is working for now. The build version of this repository will fail to start due to ipywidgets loading issues.

Ensure to add the following script in your HTML.

```js
    <!-- Needed for ipywidgets -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.4/require.min.js"></script>
    <script type="module">
      globalThis.__webpack_public_path__ = "";
    </script>
```

<div align="center" style="text-align: center">
  <img alt="Jupyter React Gallery" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyter-react-gallery.gif" />
</div>

## ⚖️ License

Copyright (c) 2022 Datalayer, Inc.

Released under the terms of the MIT license (see [LICENSE](./LICENSE)).
