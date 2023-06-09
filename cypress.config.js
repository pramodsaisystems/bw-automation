const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  video:false,
  env: {
    allureReuseAfterSpec: true,
    allure:true,
    allureResultsPath:'allure-results',
    allureLogCypress:true
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl:"https://localhost:3000/",
    apiBaseUrl:"https://businesswirdev.wpengine.com/",
    defaultCommandTimeout: 30000
  }
});
