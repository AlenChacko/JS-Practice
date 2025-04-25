/*******************************************************/
// 1. Equality (==) and Strict Equality (===)
console.log(5 == "5");   // true  (type coercion: "5" becomes 5)
console.log(5 === "5");  // false (strict comparison, different types)

console.log(null == undefined);  // true (both are treated as empty values)
console.log(null === undefined); // false (different types)



// 2. Inequality (!=) and Strict Inequality (!==)
console.log(5 != "5");   // false (because "5" converts to 5)
console.log(5 !== "5");  // true  (different types)


// 3. Greater Than (>) and Less Than (<)
console.log(10 > 5);   // true
console.log(5 < 10);   // true
console.log(10 < 5);   // false


// 4. Greater Than or Equal (>=) and Less Than or Equal (<=)
console.log(10 >= 10);  // true
console.log(10 <= 10);  // true
console.log(5 >= 10);   // false
console.log(5 <= 10);   // true














// 1. Comparison Between Different Types
console.log("10" == 10);    // true ("10" is converted to 10)
console.log("10" === 10);   // false (different types)
console.log(false == 0);    // true (false is converted to 0)
console.log(true == 1);     // true (true is converted to 1)
console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (different types)


// 2. Comparison with null and undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null == 0);          // false
console.log(undefined == 0);     // false
console.log(false == null);      // false
console.log(false == undefined); // false


// 3. Comparison of Strings
console.log("apple" < "banana"); // true ("a" comes before "b")
console.log("apple" > "Apple");  // true ("a" has a higher Unicode value than "A")
console.log("abc" > "abd");      // false ("c" is smaller than "d")
console.log("2" > "10");         // true (compares first characters: "2" > "1")


// 4. Comparison with NaN
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
console.log(NaN > 5);      // false
console.log(NaN < 5);      // false
console.log(NaN != NaN);   // true
console.log(isNaN(NaN));   // true

/*******************************************************/