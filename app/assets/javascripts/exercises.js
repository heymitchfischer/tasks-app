function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// console.log(fullName("Mitch", "Fischer"));

function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

// console.log(isEven(4));

function convertToFahrenheit(degreesCelsius) {
  return degreesCelsius * 1.8 + 32;
}

// convertToFahrenheit(5);