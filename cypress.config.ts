import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportHeight: 900,
    viewportWidth: 1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
