const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const sum = function(arr) {
	return arr.reduce((currSum, currEl) => {
    return currSum + currEl;
  }, 0);
};

const multiply = function(arr) {
return arr.reduce((currProd, currEl) => {
    return currProd * currEl;
  }, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(x) {
	let res = 1;
  for(let i = 2; i <= x; ++i){
    res *= i;
  }
  return res;
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
