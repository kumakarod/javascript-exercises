const fibonacci = function (count) {
  let a = 0;
  let b = 1;
  let fib = 0;

  if (typeof count === 'number') {
    fib = count;
  } else {
    fib = parseInt(count);
  }

  if (count < 0) return 'OOPS';

  for (let i = 2; i <= count; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
