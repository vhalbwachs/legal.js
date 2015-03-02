var _ = require('lodash');

var isQuestionableDependency = function(moduleNode) {

  var permissiveLicenses = ['BSD', 'MIT', 'Apache', 'WTFPL', 'ISC']
  // return boolean
  var flag = false;
  moduleNode.licenses.forEach(function(value){
    if (_.includes(permissiveLicenses, value) === false) {
      flag = true;
    }
  });
  return flag;
};

module.exports = isQuestionableDependency;