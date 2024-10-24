const buttonElements = document.querySelectorAll("button");
const inputElement = document.querySelector("#input");

let currentDisplay = "";
// let buttonsArray = Array.from(buttonElements);

buttonElements.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    const buttonsValue = e.target.innerHTML;
    if (buttonsValue == "=") {
      currentDisplay = eval(currentDisplay); // Evaluate the expression
    } else if (buttonsValue == "AC") {
      currentDisplay = ""; // Clear the display
    } else if (buttonsValue == "%") {
      currentDisplay = eval(currentDisplay) / 100;
    } else if (buttonsValue == "DEL") {
      currentDisplay = currentDisplay.slice(0, -1); // Remove the last character
    } else {
      currentDisplay = currentDisplay + buttonsValue; // Append button value to currentDisplay
    }
    inputElement.value = currentDisplay;
  });
});
