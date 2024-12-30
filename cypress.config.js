const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "co6yap",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/examples/*.cy.js',
    fixturesFolder: 'cypress/fixtures',
    downloadsFolder: 'cypress/downloads',
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    retries: {
      runMode: 1,
      openMode: 0,
      },
  },
});
