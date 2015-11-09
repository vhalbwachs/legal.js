var _ = require('lodash');
var PERMISSIVE_LICENSES = ['BSD', 'MIT', 'Apache', 'WTFPL', 'ISC'];

module.exports = function isQuestionableDependency(moduleNode) {
  return !_.every(moduleNode.licenses, _.partial(_.includes, PERMISSIVE_LICENSES));
};
