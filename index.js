const _ = require("underscore");

module.exports = function isEqual(input, expectedResult) {
  // if (!_isFunction(givenFunction)) throw new TypeError("first input is not a function!");
  return _isEqual(input, expectedResult);
};

module.exports = function isNotEqual(input, expectedResult) {
  // if (!_isFunction(givenFunction)) throw new TypeError("first input is not a function!");
  return !_isEqual(input, expectedResult);
};
