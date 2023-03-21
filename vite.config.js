import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
      reportsDirectory: "./tests/unit/coverage",
    },
  },
});