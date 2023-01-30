const palindromes = function (str) {
  var str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  var str2 = str.split('').reverse().join('');
  if (str === str2) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
