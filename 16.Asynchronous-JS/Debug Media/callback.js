// callback

console.log("Started");
function printName(callback) {
  setTimeout(() => {
    callback(5);
  }, 2000);
}

// callback hell
printName((value) => {
  printName((value2) => {
    printName((value3) => {
      console.log(value + value2 + value3);
    });
  });
});
console.log("Ended");
