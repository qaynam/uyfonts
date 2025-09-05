// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
