const _ = require("underscore");

function isEqual(input, expectedResult) {
  var result = _.isEqual(input, expectedResult);
  var log = result ? "Test Passed" : "Test Failed";
  console.log(log);
  return result;
}

function isNotEqual(input, expectedResult) {
  var result = !_.isEqual(input, expectedResult);
  var log = result ? "Test Passed" : "Test Failed";
  console.log(log);
  return result;
}

module.exports = {
  isEqual: isEqual,
  isNotEqual: isNotEqual,
};
