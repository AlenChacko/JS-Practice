//  the code block will always execute at least once, even if the condition is initially false.

// Syntax
do {
  // code to be executed
} while (condition);

//   Example: Simple do...while Loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

let ii = 10;
do {
  console.log(ii); // This will run once
  ii++;
} while (ii < 5);
