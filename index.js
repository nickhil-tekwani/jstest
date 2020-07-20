const _ = require("underscore");

module.exports = function isEqual(input, expectedResult) {
  return _isEqual(input, expectedResult);
};

module.exports = function isNotEqual(input, expectedResult) {
  return !_isEqual(input, expectedResult);
};
