const convertToCelsius = function(fahrenheitGrades) {
  return Number(((fahrenheitGrades - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function(celsiusGrades) {
  return Number((celsiusGrades * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
