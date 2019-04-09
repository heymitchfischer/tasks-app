// alert("Hello world!");

// Console.logging is useful for debugging, NOT for communicating to the user
// This is the equivalent of "puts" or "p" in Ruby
// console.log("Hello world!");

// Whatever we put inside the console.log function is evaluated in JavaScript before it's logged to the console.
// console.log(2 + 2);

// Implicit conversion of types is different
// console.log("2" + 2);
// console.log(2 + "2");
// console.log("2" * 2);
// console.log(2 * "2");

// Booleans are pretty much the same
// console.log(true);
// console.log(false);

// In JavaScript, 0 and "" (empty string) are considered false values, whereas in Ruby, they are true
// console.log(!0);
// console.log(!"");

// Strict equality operator-- it uses three equals signs to make sure the values are completely equal
// console.log(2 === 2);
// console.log(2 === "2");

// The less strict equality operator (==) converts the values to the same type.
// console.log(2 == "2");
// console.log(false == "");

// When we first create a variable, we must use the "var" or "let" keyword, followed by the name of the variable. Variables use lower-camel-case naming conventions.
var myNumber = 5;

// When we want to reassign a variable, we don't need the keyword "var" or "let"
myNumber = 4;

// if (myNumber === 5) {
//   console.log("It's 5!");
// } else if (myNumber === 4) {
//   console.log("It's a 4!")
// } else {
//   console.log("I don't know what it is!");
// }

// Functions get hoisted typically, which means they can be called from anywhere in the file, even before the function is created.
// sayHi();

// Use a "function" keyword to create a new function. Even if you're not using parameters, you still need to include the parentheses.
function sayHi() {
  console.log("Hi!");
}

// When calling a function, JavaScript demands that you include the parentheses, as this tells the browser it is a function.
// sayHi();

// Multiple parameters, same as Ruby. We have to be explicit if we want to return something in JavaScript; it doesn't just return the last line like in Ruby.
function numberMultiplier(firstNum, secondNum) {
  return firstNum * secondNum;
}

// console.log(numberMultiplier(3, 5));

// Arrays work pretty much the same way
var myArray = [56, 12, 27, 4, 3, 10]

console.log(myArray);

// Length is a property in JavaScript, not a method like it is in Ruby
console.log(myArray.length);

// JavaScript arrays use bracket notation (same as Ruby) to grab specific values.
console.log(myArray[2]);

// Push adds a value to the end of the array
myArray.push(15);
console.log(myArray);

// Pop deletes a value from the end of the array
myArray.pop();
console.log(myArray);

// Shift is the opposite of pop in that it deletes a value at the beginning of the array
myArray.shift();
console.log(myArray);

// Unshift is the opposite of push in that it adds a value at the beginning of the array
myArray.unshift(56);
console.log(myArray);

// While loops look pretty much like Ruby's while loops-- they're just more syntax heavy
var counter = 1;
while (counter <= 10) {
  // console.log(counter);
  // counter++ is the same as counter += 1
  counter++;
}

// For Loops:
// Starts with the "for" keyword
// First clause runs before the loop ever runs-- typically, this is where we establish our "counter" variable, often called "i"
// Second clause is a conditional that runs each time the loop is about to run-- this is the equivalent of the while loop condition
// Third clause runs after each loop through-- typically, this is where we increment "i"
for (var i = 0; i <= 10; i++) {
  // console.log(i);
}

// Syntax for eaching through an array-- "i" is each index of the array, essentially
myArray = [56, 12, 27, 4, 3, 10]
for (var i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}

// Default auto-complete starts at the end of the array and moves towards the beginning
for (var i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

// Objects (hashes in Ruby) look pretty much the same, but the "keys" (in this case, firsName and lastName) are not symbols.
var person = {firstName: "Mitch", lastName: "Fischer"}
console.log(person);

// Object values can be accessed using bracket notation...
console.log(person["firstName"]);

// AND dot notation!
console.log(person.lastName);

// We can add/reassign new key-value pairs by using dot notation OR bracket notation
person.age = 24;
person["age"] = 25;
console.log(person);