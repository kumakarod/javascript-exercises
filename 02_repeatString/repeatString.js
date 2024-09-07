const repeatString = function (str, multiplier) {
  if (multiplier < 0) return 'ERROR';
  let word = '';
  for (let i = 1; i <= multiplier; i++) {
    word = word + str;
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;
