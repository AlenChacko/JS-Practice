// Returns the right-hand value only if the left-hand value is null or undefined (not 0 or empty string).
let input = "";
let result = input ?? "Default";
console.log(result); // "" (because it's not null/undefined)
