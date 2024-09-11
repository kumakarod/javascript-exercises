const add = function (...num) {
  return num.reduce((prev, curr) => prev + curr);
};

const subtract = function (...num) {
  return num.reduce((prev, curr) => prev - curr);
};

const sum = function (num) {
  return num.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (num) {
  return num.reduce((prev, curr) => prev * curr);
};

const power = function (...num) {
  return num.reduce((prev, curr) => prev ** curr);
};

const factorial = function (num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
