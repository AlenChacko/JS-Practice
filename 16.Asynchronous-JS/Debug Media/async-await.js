const promise1 = new Promise((resolve, reject) => {
  reject(["Javscriptfff", "Java"]);
});

/*
  promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  */

//   normal function
async function fetchData() {
  const response = await promise1;
  console.log(response);
}
// arrow function
const fetchApi = async () => {
  const response = await promise1;
  console.log(response);
};
// try/catch
const fetchApi2 = async () => {
  try {
    const response = await promise1;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// fetchData();
fetchApi2();
