document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let userID = document.getElementById("userID").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = "";
  
    if (!name) {
      error = "Name is required.";
    } else if (!userID) {
      error = "UserID is required.";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters.";
    } else if (!email.includes("@")) {
      error = "Invalid email format.";
    }
  
    document.getElementById("error").textContent = error;
  
    if (!error) {
      console.log("Form Submitted");
    }
  });
  