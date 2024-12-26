const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/examples/*.cy.js',
    fixturesFolder: 'cypress/fixtures',
    downloadsFolder: 'cypress/downloads',
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos'
  },
});
