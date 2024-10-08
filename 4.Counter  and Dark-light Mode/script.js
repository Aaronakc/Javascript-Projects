const countElement = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const lightDarkBtn = document.querySelector("#light-dark-mode");
const outerDiv = document.querySelector(".outer-div");
const containerElement = document.querySelector(".container");
const headingElement = document.querySelector(".counter h1");

let count = 0;
let isDarkMode = false;

function increseCounter() {
  count++;
  countElement.innerHTML = count;
}

increaseBtn.addEventListener("click", increseCounter);

function decreaseCounter() {
  count--;
  countElement.innerHTML = count;
}

decreaseBtn.addEventListener("click", decreaseCounter);

function resetCounter() {
  count = 0;
  countElement.innerHTML = count;
}

resetBtn.addEventListener("click", resetCounter);

function darkLightMode() {
  isDarkMode = !isDarkMode;
  {
    if (isDarkMode) {
      lightDarkBtn.innerText = "Light Mode";
      lightDarkBtn.style.backgroundColor = "white";
      lightDarkBtn.style.color = "black";
      outerDiv.style.backgroundColor = "black";
      containerElement.style.border = "2px solid white";
      headingElement.style.color = "white";
      countElement.style.color = "white";
    } else {
      lightDarkBtn.innerText = "Dark Mode";
      lightDarkBtn.style.backgroundColor = "black";
      lightDarkBtn.style.color = "white";
      outerDiv.style.backgroundColor = "white";
      containerElement.style.border = "2px solid black";
      headingElement.style.color = "black";
      countElement.style.color = "black";
    }
  }
}

lightDarkBtn.addEventListener("click", darkLightMode);
