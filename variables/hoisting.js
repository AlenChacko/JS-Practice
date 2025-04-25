// Hoisting of Variables

// JavaScript moves variable declarations to the top of their scope before code execution.

// VAR

console.log(x) // undefined
var x = 10; // a is hoisted, but not assigned yet
console.log(x) // 10


// LET and CONST
// Hoisted

// console.log(test)  //reference error because of temporal dead zone
let test = 'TEST';
console.log(test) // TEST

//console.log(test2)   //reference error because of temporal dead zone
const test2 = 'TEST 2'
console.log(test2)




// Hoisting of functions

greet()  // function declaration is moved to the top of scope , so it will work

function greet () {
    console.log("Hello")
}




// testFun()   //Type error testFun is not a function, here testFun will be only hoisted, not the function body

let testFun = function myFunction () {
    console.log('this is my function assigned to a variable')
}

testFun() // Work smoothly