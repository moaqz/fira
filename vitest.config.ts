/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    globals: true,
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@lib": path.resolve(__dirname, "./src/lib/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
    },
  },
});
