const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
        // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);
      },
  },
});
