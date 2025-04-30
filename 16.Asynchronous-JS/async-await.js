// async is a keyword that makes a function return a Promise.

// await pauses the execution of an async function until the awaited Promise settles (either resolves or rejects).
async function getUser() {
  try {
    const user = await fetchUser(); // assume it might reject
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}
