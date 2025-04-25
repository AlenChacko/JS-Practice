/*************************************************/
// Implicit Type Coercion (Automatic)


//(a) String Coercion (Number → String)
console.log("Hello" + 5);   // "Hello5"
console.log("10" + 5);      // "105" (number 5 becomes string "5")
console.log(10 + "20");     // "1020"




// (b) Numeric Coercion (String → Number)
console.log("10" - 5);      // 5   ("10" → 10)
console.log("10" * 2);      // 20  ("10" → 10)
console.log("100" / "10");  // 10  (both converted to numbers)
console.log("10" - "abc");  // NaN (cannot convert "abc" to number)




// (c) Boolean Coercion (Truthy & Falsy Values)
console.log(Boolean(1));      // true
console.log(Boolean("Hi"));   // true
console.log(Boolean([]));     // true (empty array)
console.log(Boolean({}));     // true (empty object)
console.log(Boolean("0"));    // true (non-empty string)

// Falsy Values (Convert to false)
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false (empty string)
console.log(Boolean(null));   // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));    // false





/*************************************************/







/*************************************************/
/*************************************************/
/*************************************************/



