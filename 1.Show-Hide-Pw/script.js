const inputElement = document.querySelector("input");
const eyeIcon = document.querySelector(".bi-eye-slash");
const msg = document.querySelector("#msg");
const strength = document.querySelector("#strength");


function showHidePw() {
  if (inputElement.type == "password") {
    inputElement.type = "text";
    eyeIcon.classList.remove("bi-eye-slash");
    eyeIcon.classList.add("bi-eye");
  } else if (inputElement.type == "text") {
    inputElement.type = "password";
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-slash");
  }
}

eyeIcon.addEventListener("click", showHidePw);

//check pw strength
function checkPwStrength() {
  if (inputElement.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (inputElement.value.length < 5) {
    strength.innerHTML = "weak";
    msg.style.color = "red";

  } else if (inputElement.value.length >=5 && inputElement.value.length < 8) {
    strength.innerHTML = "medium";
    msg.style.color = "yellow";

  } else if(inputElement.value.length>=8){
    strength.innerHTML = "strong";
    msg.style.color = "green";
  }
}

inputElement.addEventListener("input", checkPwStrength);