function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var isValid = true;

  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  if (username.trim() === "") {
    document.getElementById("usernameError").textContent =
      "Username is required";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (email === "" || !email.includes("@")) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (password.trim() === "") {
    document.getElementById("passwordError").textContent =
      "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (confirmPassword.trim() === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Please confirm your password";
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
