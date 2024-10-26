const captchaElement = document.querySelector(".captcha-generator input");
const enterElement = document.querySelector(".captcha-input input");
const message = document.querySelector(".message");
const submitBtn = document.querySelector("button");
const regenerateElement = document.querySelector(".regenerate");
console.log(captchaElement, enterElement, submitBtn, regenerateElement);

let buttonDisabled = true;

function generateCaptcha() {
  const randomString = Math.random().toString(36).substring(2, 7); // Generate a random string
  const splittedValue = randomString.split(""); // Split the string into an array of characters
  const changeString = splittedValue.map((value) => {
    return Math.random() > 0.5 ? value.toUpperCase() : value;
  }); // Map through each character and randomly change to uppercase
  const finalValue = changeString.join(" "); // Join back
  captchaElement.value = finalValue;
  console.log(splittedValue, changeString, finalValue);
}
generateCaptcha();

enterElement.addEventListener("keyup", validateCaptcha);
function validateCaptcha() {
  if (captchaElement.value == enterElement.value) {
    buttonDisabled = false;
  }
  submitBtn.disabled = buttonDisabled;
}

function submitCaptcha() {
  if (enterElement.value == "") {
    alert("Please enter the captcha");
  }
  if (enterElement.value == captchaElement.value) {
    alert("Your Captcha is Submitted");
    enterElement.disabled = true;
    buttonDisabled = true;
    submitBtn.disabled = buttonDisabled;
    submitBtn.innerHTML = "Submitted";
  }
}

submitBtn.addEventListener("click", submitCaptcha);

regenerateElement.addEventListener("click", () => {
  location.reload();
});
