// A Set is a built-in JavaScript object that stores unique values of any type, whether primitive or object references.

// Creating a Set
const mySet1 = new Set();

// From an Array:
const setArr = new Set([1, 2, 3, 3, 4]);
// Set {1, 2, 3, 4} — duplicates removed


const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Ignored (no duplicates)

console.log(mySet.has(2));    // true
console.log(mySet.size);      // 2

mySet.delete(1);
console.log(mySet.has(1));    // false

mySet.clear();                // Removes all items
console.log(mySet.size);      // 0


// Iterating Over a Set
const mySet2 = new Set([1, 2, 3]);
for (const value of mySet2) {
  console.log(value);
}


// With objects
const obj1 = { a: 1 };
const obj2 = { a: 1 };

const mySet3 = new Set();
mySet3.add(obj1);
mySet3.add(obj2);

console.log(mySet3.size); // 2 — because obj1 !== obj2


// Convert Between Set and Array
const mySet4 = new Set([1, 2, 3]);
const arr = Array.from(mySet4);  // [1, 2, 3]
const arr2 = [...mySet4];        // Same
