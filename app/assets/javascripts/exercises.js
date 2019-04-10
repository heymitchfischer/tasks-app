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

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  } 
}

// fizzbuzz();

function palindrome(string) {
  var string = string.toLowerCase().split("").filter(char => char !== " ");



  // var reversedString = string.split("").filter(char => char !== " ").reverse().join("").toLowerCase();
  // string = string.split("").filter(char => char !== " ").join("").toLowerCase();

  if (string.join("") === string.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("racecar"));
console.log(palindrome("Never odd or even"));
console.log(palindrome("Hello"));