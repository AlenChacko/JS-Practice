// syntax
for (let value of iterable) {
  // code to be executed
}

//   Example: for...of with an Array
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Example: for...of with a String
let str = "Hello";

for (let char of str) {
  console.log(char);
}

// Example: for...of with a Set
let numbers = new Set([1, 2, 3, 4]);

for (let num of numbers) {
  console.log(num);
}

// Example: for...of with a Map
let map = new Map([
  ["name", "John"],
  ["age", 30],
  ["country", "USA"],
]);

for (let [key, value] of map) {
  console.log(key + ": " + value);
}
