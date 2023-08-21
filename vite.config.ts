import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// import express from "./express-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: [
        "fs", // Excludes the polyfill for `fs` and `node:fs`.
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },

      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  // server: {
  //   proxy: {
  //     "/": "http://localhost:5100", // Replace with your server's URL
  //   },
  // },
});
