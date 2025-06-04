const promise = new Promise((resolve, reject) => {
  reject("Alen Chaco");
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("*******");

function getDataApiOne(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}
function getDataApiTwo(num) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 10);
    }, 2000);
  });
}


getDataApiOne(10).then((response)=>{
    console.log('Result is ',response)
}).catch((error)=>{
    console.log(error)
})

getDataApiTwo(100).then((response)=>{
    console.log('Result is ',response)
}).catch((error)=>{
    console.log(error)
})