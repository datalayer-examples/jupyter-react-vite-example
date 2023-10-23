import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { treatAsCommonjs } from "vite-plugin-treat-umd-as-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    treatAsCommonjs(),
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
});
