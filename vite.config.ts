/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@layout": path.resolve("src/components/common/Layout"),
      "@lib": path.resolve("./src/lib"),
      "@pages": path.resolve("./src/pages"),
      "@config": path.resolve("./src/config"),
      "@tests": path.resolve("./src/tests"),
    },
  },
});
