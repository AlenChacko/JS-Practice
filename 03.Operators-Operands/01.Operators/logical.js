/**************************************************/
// 1. Logical AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && false); // false

// ✅ Example using && in a condition:
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You are allowed to enter.");
} else {
    console.log("Access denied.");
}
// Output: "You are allowed to enter."





// 2. Logical OR (||)
console.log(true || false);  // true
console.log(false || false); // false
console.log(true || true);   // true

// ✅ Example using || in a condition:
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax today!");
} else {
    console.log("It's a workday.");
}
// Output: "You can relax today!"




// 3. Logical NOT (!)
console.log(!true);  // false
console.log(!false); // true

// ✅ Example using ! in a condition:
let isRaining = false;

if (!isRaining) {
    console.log("You can go outside!");
} else {
    console.log("Take an umbrella.");
}
// Output: "You can go outside!"





// 4. Logical Operators with Non-Boolean Values

// 1. Logical AND (&&) with Non-Boolean Values
console.log(0 && "Hello");   // 0 (because 0 is falsy)
console.log(5 && "Hello");   // "Hello" (because 5 is truthy)
console.log("" && "World");  // "" (empty string is falsy)
console.log("Hi" && "World");// "World" (both are truthy, so the last value is returned)

// . Logical OR (||) with Non-Boolean Values
console.log(0 || "Hello");   // "Hello" (because 0 is falsy)
console.log(5 || "Hello");   // 5 (because 5 is truthy)
console.log("" || "World");  // "World" (because "" is falsy)
console.log("Hi" || "World");// "Hi" (because "Hi" is truthy)



/**************************************************/