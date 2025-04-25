// In JavaScript, there is only one number type:
//It handles integers, floating-point numbers, and even scientific notation.

let a = 42; //interger
let b = 42.9; // floating
let c = 2e3; //scientific notation

// all are type of number
console.log(typeof a, typeof b, typeof c);

console.log(`#############################################################`);

// Basic number types

let x = 100; //Integer
let pi = 3.14159; // floating
let big = 5e6; // scientific
let small = 5e-3; // ""

// 1. Infinity and -Infinity

console.log(1 / 0); //  Infinity
console.log(-1 / 0); // -Infinity
console.log(typeof Infinity); // number

// 2. NaN

console.log("abc" - 10); // NaN
console.log(NaN + 5); //NaN

// cheching NaN
let str = "hello";
console.log(isNaN(str)); // true, str is not a number
let sum = 55;
console.log(isNaN(sum)); // false, sum is a number

console.log(`#############################################################`);

// Number methods

// toFixed() – Rounds and returns string
let number = 34.43543544;
let stringedNumber = number.toFixed(2);
console.log(stringedNumber); //34.44
console.log(typeof stringedNumber); // string

// toString() – Converts number to string
let n = 42;
let string_n = n.toString();
console.log(string_n); // 42
console.log(typeof string_n); //string

// toExponential()
let p = 123456;
console.log(p.toExponential(2)); // "1.23e+5"
