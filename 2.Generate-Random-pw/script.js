const passwordBox = document.querySelector("#pw");
const pwGenerateBtn = document.querySelector("#pw-btn");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number = "0123456789";
const specialCharacter = '!@#%^&*()_+:"><?~';
const moreCharacters = upperCase + lowerCase + specialCharacter + number;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password +=
    specialCharacter[Math.floor(Math.random() * specialCharacter.length)];

  while (length > password.length) {
    password +=
      moreCharacters[Math.floor(Math.random() * moreCharacters.length)];
  }
  passwordBox.value = password;
}

pwGenerateBtn.addEventListener("click", generatePassword);
