const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();

  checkInputs();
}

function checkInputs() {
  //get email value
  const emailValue = email.value.trim();

  if (emailValue == "") {
    //show error message and add border color
    showError(email, "email address cannot be blank");
    console.log("hello");
  } else if (!isEmail(emailValue)) {
    showError(email, "please enter a valid email");
    console.log("hello");
  } else {
    //add green border
    showSuccess(email);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  //add errror message
  small.innerText = message;

  //change border color
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
