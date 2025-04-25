// Used to safely access nested properties without throwing an error if something is null or undefined.
let user = {
    name: "Alice",
    address: null,
  };
  
  console.log(user.address?.city); // undefined (doesn’t throw error)
  