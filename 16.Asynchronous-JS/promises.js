// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Pending: Initial state

// Fulfilled: Operation completed successfully (resolve()).

// Rejected: Operation failed (reject()).


const getData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const data = {name:"Alen",age:74}
        reject(data)
    }, 2000);
})

getData.then((data)=>{
    console.log(data)
}).catch((error)=>{
console.log('something went wrong',error)
}).finally(()=>{
    console.log('completed')
})
  

function getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          resolve({ name: "Alice", age: 30 });
        } else {
          reject("User not found");
        }
      }, 1000);
    });
  }
  
  getUser(1)
    .then(user => console.log("User:", user))
    .catch(err => console.error("Error:", err));
  