const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://boxoffice.autoforce.com",
    setupNodeEvents(on, config) {
    },
  },
});
