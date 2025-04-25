// A Map is a collection of key-value pairs where:

// Creating a Map
const myMap = new Map();

// From array
const myMap1 = new Map([
    ['name', 'Alice'],
    ['age', 25],
  ]);
  


  const myMap2 = new Map();

myMap2.set('name', 'Alice');
myMap2.set('age', 30);

console.log(myMap2.get('name'));   // 'Alice'
console.log(myMap2.has('age'));    // true
console.log(myMap2.size);          // 2

myMap2.delete('age');
console.log(myMap2.has('age'));    // false

myMap2.clear();                    // Removes all entries
