// The ternary operator is a shorthand for the if-else statement. It takes three operands:
//  condition ? expressionIfTrue : expressionIfFalse;

let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log(canVote); // "Yes, can vote"


// Ternary Operator with Functions
function checkLogin(isLoggedIn) {
    return isLoggedIn ? "Welcome back!" : "Please log in.";
  }
  
  console.log(checkLogin(true));  // "Welcome back!"
  console.log(checkLogin(false)); // "Please log in."

  
//   Multiple Conditions
let x = 10, y = 20;
let result = (x > y) ? "x is greater" : (x < y) ? "y is greater" : "x and y are equal";
console.log(result);  // "y is greater"
