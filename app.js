const form = document.getElementsByTagName("form")[0];
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPw = document.getElementById("confirmpw");
const confirmPWError = document.getElementById("confirmpwError");
const phoneError = document.getElementById("phoneError");
const phone = document.getElementById("phone-number");

password.addEventListener("input", function (event) {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError();
  }
});

confirmPw.addEventListener("input", function (event) {
  if (confirmPw.value === password.value) {
    confirmPWError.textContent = "";
    confirmPWError.className = "error";
    //adding box shadow due to not being able to utilize the built in validation from HTML to show the input as valid
    confirmPw.style.boxShadow = "0 0 5px 1px green";
  } else {
    showError();
  }
});

phone.addEventListener("input", function (event) {
  if (phone.validity.valid && phone.value !== "") {
    phoneError.textContent = "";
    phoneError.className = "error";
  } else {
    showError();
  }
});

//Show error function checks for valid password, phone number, password confirmation.

function showError() {
  if (
    password.value.length < 8 ||
    !hasLowerCase(password.value) ||
    !hasUpperCase(password.value) ||
    !hasNumber(password.value)
  ) {
    passwordError.textContent =
      "* You must enter a password with atleast 8 characters, one number, lowercase, and uppercase letters.";
    passwordError.className = "error";
  }

  if (confirmPw.value !== password.value) {
    confirmPWError.textContent = "* Your passwords do not match.";
    confirmPWError.className = "error";
    confirmPw.style.boxShadow = "0 0 5px 1px red";
  }

  if (!hasNumber(phone.value) || phone.value === "") {
    phoneError.textContent = "* Please enter a valid phone number.";
    phoneError.className = "error";
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
