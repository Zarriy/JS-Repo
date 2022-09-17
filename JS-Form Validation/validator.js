// select the email input and error.
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const emailError = emailInput.nextElementSibling;

console.log(form);

// emailRegExpression
const emailValidator =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("input", function () {
  const emailValidityCheck = emailValidator.test(emailInput.value);
  if (emailValidityCheck) {
    emailInput.className = "valid";
    emailError.textContent = "";
    emailError.className = "error valid";
  } else {
    emailInput.className = "invalid";
    emailError.textContent = "Please enter correct Email, Thanks";
    emailError.className = "error invalid";
  }
});

// running buildin Constraint Validity Check on Zip Code Box
const zip = document.getElementById("zipCode");
const zipError = zip.nextElementSibling;
const regexZip = /^[0-9]+$/;

zip.addEventListener("input", () => {
  zip.setCustomValidity("");
  zip.reportValidity();

  if (zip.checkValidity() && zip.value > 4) {
    zip.className = "valid";
  } else {
    zip.className = "invalid";
  }
});
zip.addEventListener("invalid", () => {
  if (zip.value.length < 5) {
    zip.setCustomValidity("Please enter upto 5 digit zip code.");
  }
  if (!regexZip.test(zip.value)) {
    zip.setCustomValidity("Alphapbets aren't allowed");
  }
});

// working on password part here.
const passwordInput = document.getElementById("password");
const passwordError = password.nextElementSibling;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// confirm PasswordBox
const confirmPassword = document.getElementById("cPassword");
const cPasswordError = confirmPassword.nextElementSibling;

passwordInput.addEventListener("input", () => {
  const passValue = passwordInput.value;
  const checkPassword = passwordRegex.test(passValue);
  if (passValue.length >= 8) {
    // check if the passowrd is correct
    if (checkPassword) {
      passwordInput.className = "valid";
      passwordError.textContent = "";

      confirmPassword.addEventListener("input", () => {
        const cPvalue = confirmPassword.value;
        if (cPvalue.length === passValue.length) {
          if (confirmPassword.value === passValue) {
            confirmPassword.className = "valid";
            cPasswordError.textContent = "";
          } else {
            confirmPassword.className = "invalid";
            cPasswordError.textContent =
              "Entered Password doesn't match. Please type correct password.";
            cPasswordError.className = "error invalid";
          }
        }
      });
    }
    if (!checkPassword) {
      passwordInput.className = "invalid";
      passwordError.className = "error invalid";
      passwordError.textContent =
        "Please use number, upper & lower case Alphabets and also special character in your code.";
    }
  } else {
    passwordInput.className = "invalid";
  }
});

// password hide and showing
function showPassword(id) {
  const idSelector = document.getElementById(id);
  const btnSelector = document.querySelector(".show");
  if (idSelector.type === "password") {
    idSelector.type = "text";
    btnSelector.textContent = "Hide";
  } else {
    idSelector.type = "password";
    btnSelector.textContent = "Show";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
