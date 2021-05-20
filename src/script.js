const form = document.getElementById("form");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const firstName = document.getElementById("First-name");
const secondName = document.getElementById("Second-name");

// error Message
const errorMessage = (input, message) => {
  const childParentElement = input.parentElement;
  childParentElement.className = "input-container error";
  const parentElement = childParentElement.parentElement;
  const small = parentElement.querySelector("small");
  small.innerText = message;
  parentElement.className = "formHandler error";
};
// success Message
const successMessage = (input) => {
  const childParentElement = input.parentElement;
  childParentElement.className = "input-container success";
  const parentElement = childParentElement.parentElement;
  parentElement.classList.remove("error");
};

// required function
const checkRequired = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      errorMessage(input, `${input.id} is required*`);
    } else {
      successMessage(input);
    }
  });
};

// checking first name and last name
const checkNames = (nameArray) => {
  const regExOfName = /^[a-z ,.'-]+$/i;
  nameArray.forEach((name) => {
    if (!regExOfName.test(name.value)) {
      errorMessage(name, `invalid name format*`);
    } else {
      successMessage(name);
    }
  });
};

// Check mail

const checkMail = (input) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegEx.test(input.value)) {
    successMessage(input);
  } else {
    errorMessage(input, "Email is not valid*");
  }
};

const checkPassword = (input) => {
  if (input.value.length < 5) {
    errorMessage(input, "Password must be contain 5 character*");
  } else {
    successMessage(input);
  }
};

// form event handling
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([email, password, firstName, secondName]);
  checkNames([firstName, secondName]);
  checkMail(email);
  checkPassword(password);
});
