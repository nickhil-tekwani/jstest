# @tekwani/jstest

![npm (scoped)](https://img.shields.io/npm/v/@tekwani/jstest)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@tekwani/jstest)
![GitHub](https://img.shields.io/github/license/nickhil-tekwani/jstest)

Extremely lightweight testing library. My first npm package!

## Install

```
$ npm install @tekwani/jstest
```

## Usage

```js
const isEqual = require("@tekwani/jstest")["isEqual"];
const isNotEqual = require("@tekwani/jstest")["isNotEqual"];

function add2(num) {
  return num + 2;
}

isEqual(add2(2), 4); // returns true, console logs "Test Passed"
isEqual(add2(2), 6); // returns false, console logs "Test Failed"
isNotEqual(add2(2), 4); // returns false, console logs "Test Failed"
isNotEqual(add2(2), 6); // returns true, console logs "Test Passed"
```
