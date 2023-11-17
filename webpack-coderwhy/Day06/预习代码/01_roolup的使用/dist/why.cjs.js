'use strict';

var _ = require('lodash');

function sum(num1, num2) {
  return num1 + num2
}

function formatDate() {
  return "2022-12-12"
}

var format = {
  formatDate
};

// const { formatDate } = require('./utils/format')

function foo() {
  console.log("foo function exec~");
  console.log(_.join(["abc", "cba"]));
}

exports.foo = foo;
exports.formatDate = format.formatDate;
exports.sum = sum;
