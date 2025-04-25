// Objects
let person = { name: "Alice", age: 30, city: "London" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Arrays
let fruits = ["apple", "banana", "cherry"];

for (let index in fruits) {
  console.log(fruits[index]);
}
