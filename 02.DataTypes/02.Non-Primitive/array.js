// An array is a list-like object used to store ordered collections of values.

// How to create arrays

// 1. Array literal (most common)
const fruits = ["apple", "banana", "cherry"];

// 2. Using new Array() constructor
let nums = new Array(3); // [empty × 3]
let nums2 = new Array(1, 2, 3); // [1, 2, 3]

// Accessing Elements
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"

// Change a value
fruits[1] = "mango";
// console.log(fruits)

// Add elements:
fruits.push("orange"); // Add to end
fruits.unshift("kiwi"); // Add to start

// Remove elements:
fruits.pop(); // Remove from end
fruits.shift(); // Remove from start

// Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

// Common Array Methods

let cars = ["Virtus", "Creta", "Seltos", "City", "Verna", "Polo", "Jetta"];

// adding or removing items
cars.unshift("Tiguan"); //add to start
cars.push("Elevate"); //add to end
console.log(cars);
cars.shift(); // remove from end
cars.pop(); // remove from start
console.log(cars);

// checking existance of an item
console.log(cars.includes("City")); // true
console.log(cars.includes("Swift")); // false

// checking index of item
console.log(cars.indexOf("Creta")); // return index
console.log(cars.indexOf("I20")); // return -1

//  returns a piece of array (doesn’t change original)
console.log(cars.slice(1, 3)); // elements at index 1 and 2

// removes/adds elements (changes original)
cars.splice(1, 1); // remove 1 item at index 1
console.log(cars);
cars.splice(2, 0, "Pear"); // insert "pear" at index 2
console.log(cars);

// reverse
console.log(cars.reverse());

// sort
console.log(cars.sort());

// Advanced Methods (Functional Style)

let arr = [1, 2, 3, 4, 5];

// map() => Transforms each item and returns a new array:
let res = arr.map((n) => {
  return n * 2;
});
// console.log('res : ',res)

// filter()  => Keeps items that match a condition:
let even = arr.filter((n) => {
  return n % 2 === 0;
});
// console.log(even)

// reduce()  => Reduce array to a single value (sum, product, etc):
let sum = arr.reduce((acc, val) => {
  return acc + val;
}, 0);

// console.log(sum)

// Spread Operator (...)

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4]
console.log(combined);

// Destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
// console.log(second)
