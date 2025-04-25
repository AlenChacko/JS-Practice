// A function is a reusable block of code designed to perform a task or return a value.

// 1. Function Declaration
function sayHello() {
  console.log("Hello!");
}

sayHello();

// 2. Function Expression
const sayHi = function () {
  console.log("Hi!");
};

sayHi();

// 3. Arrow Function (ES6)
const greet = () => {
  console.log("Hey!");
};
greet();

// 4. Function Constructor (rarely used)
const add = new Function("a", "b", "return a + b");
console.log(add(2, 3)); // 5

// Parameters vs Arguments
function say(name) {
  // name = parameter
  console.log("Hello, " + name);
}

say("Alice"); // "Alice" = argument

//   Return Values
function multiply(x, y) {
  return x * y;
}

//   Functions as Values
const log = function (msg) {
  console.log(msg);
};

log("Hi there!");

//   Functions Inside Objects (Methods)
const person = {
  name: "Sara",
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

person.greet();

//   Arrow Functions and this
const user = {
  name: "Tom",
  greet: () => {
    console.log("Hi " + this.name); // ❌ 'this' not what you expect
  },
};

user.greet()

// higer order functions

// 1: Passing a Function as an Argument

function greet1(name) {
    return `Hello, ${name}!`;
  }
  
  function processUserInput(callback) {
    const name = "Alice";
    console.log(callback(name));
  }
  
  processUserInput(greet1); // Hello, Alice!
  

//   2: Returning a Function

function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  console.log(double(5)); // 10

  
//   Closures
function outer() {
    let secret = "I’m hidden";
    return function() {
      console.log(secret);
    };
  }
  
  let reveal = outer();
  reveal(); // "I’m hidden"
  


//   call(), apply(), bind()

// call()
function greet() {
    console.log("Hi " + this.name);
  }
  
  const user1 = { name: "Alice" };
  greet.call(user1); // "Hi Alice"
  

//   apply()
function introduce(age, city) {
    console.log(`${this.name}, ${age}, from ${city}`);
  }
  
  introduce.apply(user, [25, "Paris"]);

  
//   bind()
const boundGreet = greet.bind(user);
boundGreet(); // "Hi Alice"
