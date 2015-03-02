var nlf = require("./nlf/lib/nlf");
var cwd = process.cwd();
var format = require('./nlf/lib/formatters/standard');
var showQuestionableDependencies = require('./showQuestionableDependencies');
var createSummary = require('./createSummary')
var displaySummary = require('./displaySummary');
var _ = require('lodash');

nlf.find({
  directory: cwd
}, function (err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  if (data && data.length > 0) {
    var summary = createSummary(data);
    // Only show dependencies where I'm not sure about the licenses
    showQuestionableDependencies(data);

    format.render(data, function (err, output) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(output);
    });

    displaySummary(summary);
  }

});
