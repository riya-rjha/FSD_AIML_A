// Asynchronous Await Function

async function authenticate() {
  try {
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
  } catch (error) {
    console.log("Error", error);
  }
}

authenticate();

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 3000);
  });
}

function register() {
  return new Promise((res, _) => {
    setTimeout(() => {
      console.log("Register End");
      res();
    }, 3000);
  });
}

function login() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Login end");
      res();
    }, 3000);
  });
}

function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Got user data");
      res();
    }, 3000);
  });
}

function displayData() {
  return new Promise((res, _) => {
    setTimeout(() => {
      console.log("Display user data");
      res();
    }, 3000);
  });
}

function waitForThreeSecond() {
  const ms = 3000 + new Date().getTime();
  while (ms > new Date()) {}
}
