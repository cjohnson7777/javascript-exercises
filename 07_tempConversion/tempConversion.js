const convertToCelsius = function(tempInFahrenheit) {
  let celsius = (tempInFahrenheit - 32)*(5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(tempinCelsius) {
  let fahrenheit = (tempinCelsius * (9/5)) + 32
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//(32°F − 32) × 5/9 = 0°C
//(0°C × 9/5) + 32 = 32°F
