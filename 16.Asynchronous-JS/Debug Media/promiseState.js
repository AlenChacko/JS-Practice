const promise1 = new Promise((resolve, reject) => {
  reject(["Javscript", "Java"]);
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 api call failed");
  //   resolve(["React", "Angular"]);
});

const promise3 = new Promise((resolve, reject) => {
  resolve(["Node", "Python"]);
});

// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise2
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   promise3
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all()  ====>>>> works when all promises are resolved

const allPromises = Promise.all([promise1, promise2, promise3]);

// allPromises
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled()  ====>>>> get the results with status, whether all promises are resolved or reject

const allSettledPromises = Promise.allSettled([promise1, promise2, promise3]);

// allSettledPromises
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.any()  ====>>>> get the results with status, whether all promises are resolved or reject

const anyPromises = Promise.any([promise1, promise2, promise3]);

anyPromises.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})