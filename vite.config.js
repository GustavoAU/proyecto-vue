import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevtools from "vite-plugin-vue-devtools";
import html from "vite-plugin-html";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vueDevtools(), vue(), html()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
