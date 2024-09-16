const palindromes = function (str) {
  const cleanedStr = str.replace(/\W/g, '').toLowerCase();

  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
