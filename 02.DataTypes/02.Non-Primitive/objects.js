// An object is a collection of key-value pairs. Each key (called a property) has a value.

// How to Create Objects

// 1. Object Literal (most common)

let person1 = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
// console.log(person1)

// 2. Using new Object()

let person2 = new Object();
person2.name = "Alen";
person2.age = 26;
person2.isStudent = true;
// console.log(person2)

// 3. Using a function or class (advanced)

function User(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}
let person3 = new User("Daisy", 56, false);
// console.log(person3)

console.log("#######################################");

const employee = {
  name: "Vimal",
  age: 35,
  position: "Developer",
  package: 300000,
  monthlySalary: function (package) {
    return this.package / 12;
  },
  insurance: true,
};

// Accessing Object Properties
// console.log(employee.name);
// console.log(employee["name"]);
// console.log(employee.monthlySalary());

// Adding / Updating Properties
employee.status = "married"; //added a new property with a value
// console.log(employee)
employee.position = "UI Developer";
// console.log(employee) // updated employees position

// Deleting Properties
delete employee.status;
// console.log(employee) // the key status and its value deleted

// Looping Over Objects
// for (let key in employee) {
//   console.log(`${key} : ,${employee[key]}`);
// }

console.log("###################################");

// Checking Property Existence
// console.log("name" in employee); //true
// console.log(employee.hasOwnProperty("age"));

console.log("###################################");

//  Nested Objects

let user = {
  name: "Sara",
  address: {
    city: "New York",
    zip: "10001",
  },
};

//   user.address.city = 'Pakisthan'

// console.log(user.address.city); // "New York"

console.log("###############################################");

// Object Freezing & Sealing

Object.freeze(employee); // Cannot change or add/delete properties
Object.seal(employee); // Can change existing values but not add/remove

console.log("###############################################");

// Cloning / Copying Objects

// Shallow copy

const original = {
  name: "John",
  address: {
    city: "New York",
  },
};

// Shallow copy using spread operator
const shallowCopy = { ...original };

shallowCopy.name = "Doe";
shallowCopy.address.city = "Los Angeles";

console.log(original.name); // "John"
console.log(original.address.city); // "Los Angeles"  (affected (referance type))

//   Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

// Proper Deep Copy (modern way with structuredClone):
const modernCopy = structuredClone(original);
