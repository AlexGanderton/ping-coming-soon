const input = document.querySelector("input");
const btn = document.querySelector("button");
const errorMsg = document.querySelector(".error-message");
const form = document.querySelector("form");
const redBorder = "hsl(354, 100%, 66%)";
const paleBorder = "hsl(223, 100%, 88%)";

let emailRegex = /^[A-Za-z0-9]+@[A-Za-z]+[.]([A-Za-z]+$|[A-Za-z]+[.][A-Za-z]+$)/;

function validateForm() {
  if (input.value == "") {
    input.style.borderColor = redBorder;
    errorMsg.classList.remove("hide");
    errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (emailRegex.test(input.value) != true) {
    input.style.borderColor = redBorder;
    errorMsg.classList.remove("hide");
    errorMsg.innerHTML = "Please provide a valid email address";
  } else {
    input.style.borderColor = paleBorder;
    errorMsg.classList.add("hide");
    form.submit();
  }
}

function retryEmail() {
  input.style.borderColor = paleBorder;
  errorMsg.classList.add("hide");
}

btn.addEventListener("click", validateForm);
input.addEventListener("keydown", retryEmail);

form.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    validateForm();
    e.preventDefault();
  }
});
