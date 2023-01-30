const add = function(...num) {
  let sum = num.reduce((acc, current) => acc + current)
  return sum;
};

const subtract = function(...sub) {
	let result = sub.reduce((previous, current) => previous - current);
  return result;
};

const sum = function(ar) {
  let initialValue = 0;
	let totalSum = ar.reduce((previous, current) => previous + current, initialValue)
  return totalSum;
};

const multiply = function(ar) {
  let total = ar.reduce((previous, current) => previous * current)
  return total;
};

const power = function(base, exp ) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
  let result = num;
   
  if(num === 0){
    return 1;
  } else
  for(let i = num;i > 1; i--){
     result *= (i -1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
