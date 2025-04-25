// Common arithmetic operators in js

// addition
console.log(7 + 3); // 10

// subtraction
console.log(7 - 3); // 4

// multiplication
console.log(7 * 3); // 21

// division
console.log(7 / 2); // 3.5

// modulus
console.log(7 % 2); // 1

// exponential
console.log(2 ** 3); // 8

// Special cases

// 1. Division by Zero
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity

// 2. NaN (Not a Number)
console.log("hello" * 2); // NaN

// + Operator with Strings
console.log("5" + 1); // "51" → string concatenation

// Increment and Decrement Operators

// pre increment and decrement
let a = 5;
let preInc = ++a; // first increase the value then assign
console.log("preInc : ", preInc);
console.log("a : ", a);

let y = 10;
let preDec = --y; // first decrease the value then assign
console.log("preDec : ", preDec);
console.log("y : ", y);

// post increment and decrement
let x = 20;
let postInc = x++; // first assign the value then increment
console.log("postInc : ", postInc); //20
console.log("x : ", x); // 21

let p = 30;
let postDec = p--; // first assign the value then decrement
console.log("postDec : ", postDec);
console.log("p : ", p);



