// Example: Basic Usage of forEach

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});


// Example: Using forEach with Index
let colors = ["red", "green", "blue"];

colors.forEach(function(color, index) {
  console.log(index + ": " + color);
});


// Example: forEach with Arrow Functions
let fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
