// Asynchronous Javascript

const myPromise = new Promise((res, rej) => {
  const success = true; // Simulating a condition
  if (success) {
    res("Promise resolved successfully!");
  } else {
    rej("Promise rejected!");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

function fetchGitHubUser(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((data1) => {
      return data1.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

// fetchGitHubUser("riya-rjha");

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
  return new Promise((res, rej) => {
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

register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .catch((err) => {
    console.log("Error: ", err);
  });

  