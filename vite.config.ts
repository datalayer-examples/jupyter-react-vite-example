import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { treatAsCommonjs } from "vite-plugin-treat-umd-as-commonjs";
// import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    treatAsCommonjs(),
//     vitePluginRequire.default(),
  ],
  resolve: {
    alias: [
      {
        // this is required for the SCSS modules
        find: /^~(.*)$/,
        replacement: "$1",
      },
    ],
  },
  // https://github.com/datalayer/jupyter-ui/issues/198#issuecomment-1949521268
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".whl": "text",
      },
    },
  },
});
