// What is a Boolean?
// A Boolean represents just two values:

true; // yes, correct, on
false; // no, wrong, off

let isOnline = true;
let hasMoney = false;

console.log(5 > 2); // true
console.log(10 === 3); // false

console.log("###############################################################");

typeof true; // "boolean"
typeof false; // "boolean"

console.log(typeof Boolean); // function

console.log("###############################################################");

// Boolean in if statements
let isSunny = true;

if (isSunny) {
  console.log("Wear sunglasses 😎");
} else {
  console.log("Bring an umbrella ☔");
}

console.log("###############################################################");

Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false
Boolean([]); // true

console.log(!true); // false
console.log(!false); // true

console.log("###############################################################");

let age = 20;

if (age >= 18 && age <= 30) {
  console.log("You're a young adult!");
}

console.log("###############################################################");

Boolean("0"); // true ✅ (non-empty string)
Boolean([]); // true ✅ (empty array is truthy)
Boolean({}); // true ✅ (empty object is truthy)
Boolean(null); // false ❌
Boolean(undefined); // false ❌
