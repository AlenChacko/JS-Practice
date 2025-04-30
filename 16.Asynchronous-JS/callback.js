// A callback is a function passed as an argument to another function. It is called ("executed") later, usually after some task is completed.

function greet(name) {
  console.log("hello, ", name);
}
function processInput() {
  const name = "Alen";
  greet(name);
}
processInput();

// ✅ Synchronous Callback
function calculate(a, b, operation) {
  return operation(a, b); // synchronous call
}

function add(x, y) {
  return x + y;
}

console.log(calculate(3, 4, add)); // 7

//   🔁 Asynchronous Callback
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

//   🧠 Real-World Example: Simulate API with Callbacks

function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "John", age: 30 };
    callback(data); // Pass the data to the callback
  }, 1000);
}

function handleData(data) {
  console.log("Received:", data);
}

fetchData(handleData);

//   ⚠️ Callback Hell

loginUser("user", "pass", function (user) {
  getUserData(user, function (data) {
    getMoreInfo(data, function (info) {
      // Nested callbacks (callback hell)
    });
  });
});
