const allButtons = document.querySelectorAll("li");
console.log(allButtons);
const headerElement = document.getElementById("info");

let count = 1;

allButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    allButtons.forEach((button) => {
      button.classList.remove("active");
    });
    if (i == 0) {
      if (count > 1) {
        count--;
        console.log(count);
      }
      allButtons[count].classList.add("active");

    } else if (i == allButtons.length - 1) {
      if (count < allButtons.length - 2) {
        count++;
        console.log(count);
      }
      allButtons[count].classList.add("active");

    } else {
      button.classList.add("active");
      count = Number(button.innerHTML);
    }

    headerElement.innerHTML = count;
  });
});
