const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current)

};

const power = function(base, expo) {
	return base**expo
};

const factorial = function(n) {
  if (n <= 1){
    return 1
  }
  return(factorial(n-1) * n)
	
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
