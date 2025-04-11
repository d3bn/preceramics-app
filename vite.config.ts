import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    port: 3001,
  },
  base: "/",
  build: {
    outDir: "build",
  },
});
