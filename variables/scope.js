// Scope of variables and functions


// Global Scope

let myName = 'Alen';

function printName () {
    console.log(`My name is ${myName}`) // myName has a global scope, so it can be accessed inside function body
}
printName()


// Function Scope

function test () {
    let x = 10;
    console.log(x)
}

// console.log(x)  // x is not defined, because x's scope is only inside function
test()


// Block Scope

{
    var y = 10
}

console.log('y : ',y) // work,  var has global scope

{
    let p = 20;
    const q = 50;
}

// console.log(`p : ${p}\nq : ${q}`)  Error.. let and const are block scoped cannot access outside