// Declaration

let str = "Hello, World!";
let name1 = "Alice";
let name2 = "Bob";
let greeting = `Hello ${name1}`;

console.log(typeof "hello"); // "string"

// Common String Methods

let subject = "Javascript";

// .length  =>   Returns length of string
console.log(subject.length); // 10

// .toUpperCase()   =>  Converts to uppercase
console.log(subject.toUpperCase()); // JAVASCRIPT

// .toLowerCase()  => Converts to lowercase
console.log(subject.toLowerCase()); // javscript

// .charAt(index)    => Returns character at given index
console.log(subject.charAt(2)); // v

// ..indexOf("text")    => Finds first occurrence
console.log(subject.indexOf("s")); // 4

// .includes("text")    => Checks if text is in string
console.log(subject.includes("q")); // false, subject does'nt have a letter q
console.log(subject.includes("v")); // true ,

// .startsWith("...")    => Checks start
console.log(subject.startsWith("Sc")); // false
console.log(subject.startsWith("ja")); // false
console.log(subject.startsWith("Ja")); // true

// .endsWith("...")    => Checks end
console.log(subject.endsWith("Pt")); // false
console.log(subject.endsWith("PT")); // false
console.log(subject.endsWith("pt")); // true

// .slice(start, end)   => Extracts part of the string
console.log(subject.slice(4, 10)); //script

// .substring(start, end)    => Similar to slice
console.log(subject.substring(0, 4)); // Java

// .trim()     => Removes whitespace
let text = "abc   ";
console.log(text.trim());

// .replace("a", "b")	=> Replaces substring
console.log(subject.replace("J", "P")); // Pavascript

//.split("separator")	=> Splits string into array
console.log(subject.split());

console.log(`#############################################################`);

// String Indexing
let message = "Good Morning!!!";
console.log(message[3]); // d

console.log(`#############################################################`);

// Converting to Strings

String(123); // "123"
(123).toString(); // "123"
true.toString(); // "true"

console.log(`#############################################################`);

// Changing a string
let str1 = "hello";
str1[0] = "H"; // ❌ Won't change the string
console.log(str1); // "hello" (unchanged)

// To modify a string, you must create a new one:

str1 = "H" + str1.slice(1); // "Hello"
console.log(str1);

console.log(`#############################################################`);

// Looping Through a String

for (let i = 0; i <= subject.length; i++) {
  console.log(subject[i]);
}

console.log(`#############################################################`);

console.log("hello".length);
console.log("JavaScript".slice(4, 10));
console.log("cat".replace("c", "b"));
console.log("Hi There!".toLowerCase().includes("hi"));
