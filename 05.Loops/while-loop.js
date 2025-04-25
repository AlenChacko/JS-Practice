while (condition) {
  // code to be executed
}

//   A while loop executes a block of code repeatedly as long as the specified condition is true.
// If the condition is initially false, the loop will never run.

//   Example: Simple while Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Infinite Loop (Be Careful!)
let ii = 0;
while (true) {
  console.log(ii);
  ii++;
  if (ii >= 5) break; // To prevent infinite loop
}

// Example: Using while with Arrays
let fruits = ["apple", "banana", "cherry"];
let x = 0;

while (x < fruits.length) {
  console.log(fruits[x]);
  x++;
}
