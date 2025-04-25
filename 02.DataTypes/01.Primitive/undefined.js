// A Variable Without a Value is undefined

console.log(typeof undefined); // "undefined"

console.log("####################################");

// How Do We Get undefined?

// 1. Declaring a variable without assigning a value
let x;
console.log(x); // undefined

// 2. Function with no return
function greet() {
  console.log("Greetings");
}
let res = greet();
console.log(res); // undefined

// 3. Accessing a non-existent property
let user = {};
console.log(user.name); // undefined

// 4. Accessing array element out of bounds
let arr = [1, 2];
console.log(arr[5]); // undefined

// 5. Missing function arguments
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello(); // "Hello undefined"

console.log("###############################################");

let y;
console.log(typeof y); // ?

function test() {}
console.log(test()); // ?

let arr1 = [];
console.log(arr1[0]); // ?
