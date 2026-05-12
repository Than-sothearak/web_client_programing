const form = document.getElementById("register-form");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const nameError = document.getElementById("name-error");
  const passwordError = document.getElementById("password-error");
  const confirmError = document.getElementById("confirm-error");

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm-password");
  

  nameError.innerText = "";
  passwordError.innerText = "";
  confirmError.innerText = "";


  // Username Validation
  if (username === "") {
    nameError.innerText = "Username cannot be empty!";
    usernameInput.style.border = "2px solid red";
  } else if (username.length < 5) {
    nameError.innerText = "Username must be at least 5 characters.";
    usernameInput.style.border = "2px solid red";
  } else {
    usernameInput.style.border =  "2px solid #ccc";
  }

  // Password Validation
  if (password === "") {
    passwordError.innerText = "Password cannot be empty!";
    passwordInput.style.border = "2px solid red";
  } else if (password.length < 8) {
    passwordError.innerText = "Password is too weak!";
    passwordInput.style.border = "2px solid red";
  } else {
    passwordInput.style.border =  "2px solid #ccc";
  }

  // Confirm Password Validation
  if (confirmPassword === "") {
    confirmError.innerText = "Please confirm your password!";
    confirmInput.style.border = "2px solid red";
  } else if (password === confirmPassword && password.length >= 8 && username.length >= 5) {
   
    alert("User " + username + " has" + " registration successfully");

    usernameInput.style.border = "2px solid green";
    passwordInput.style.border = "2px solid green";
    confirmInput.style.border = "2px solid green";
  } else {
    confirmError.innerText = "Passwords do not match!";
    confirmInput.style.border = "2px solid red";
  }

});