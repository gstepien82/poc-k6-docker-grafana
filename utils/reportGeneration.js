//node reportGeneration.js
const reporter = require('k6-html-reporter');

const reporterOptions = {
  jsonFile: '../reports/data.json',
  output: '../reports',
};

reporter.generateSummaryReport(reporterOptions);
