const form = document.getElementsByTagName("form")[0];
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPw = document.getElementById("confirmpw");
const confirmPWError = document.getElementById("confirmpwError");

password.addEventListener("input", function () {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError();
  }
});

confirmPw.addEventListener("input", function () {
  if (confirmPw.value === password.value) {
    confirmPWError.textContent = "";
    confirmPWError.className = "error";
    //adding box shadow due to not being able to utilize the built in validation from HTML to show the input as valid
    confirmPw.style.boxShadow = "0 0 5px 1px green";
  } else {
    showError();
  }
});

//Show error if password doesn't have a minimum length of 8, one uppercase and one lower letter and one number

function showError() {
  if (
    password.value.length < 8 &&
    !hasLowerCase(password.value) &&
    !hasUpperCase(password.value) &&
    !hasNumber(password.value)
  ) {
    passwordError.textContent =
      "* You must enter a password with atleast 8 characters, one number, lowercase, and uppercase letters.";
    passwordError.className = "error";
  }

  //Show error for confirm password if it doesn't match the original input password

  if (confirmPw.value !== password.value) {
    confirmPWError.textContent = "* Your passwords do not match.";
    confirmPWError.className = "error";
    //Add box shadow due to missing built in functionality for confirming password
    confirmPw.style.boxShadow = "0 0 5px 1px red";
  }
}

function hasLowerCase(string) {
  return string.toUpperCase() != string;
}

function hasUpperCase(string) {
  return string.toLowerCase() != string;
}

function hasNumber(string) {
  const regex = /\d/g;
  return regex.test(string);
}
