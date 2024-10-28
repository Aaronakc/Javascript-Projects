const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const targetDate = new Date("Janaury 01 2025 00:00");
console.log(targetDate);

function setcountDown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    let calculatedSeconds = Math.floor(timeDifference / 1000) % 60;
    let calculatedMinutes = Math.floor(timeDifference / 1000 / 60) % 60;
    let calculatedHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let calculatedDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    calculatedSeconds = calculatedSeconds.toString().padStart(2, "0");
    calculatedMinutes = calculatedMinutes.toString().padStart(2, "0");
    calculatedHours = calculatedHours.toString().padStart(2, "0");
    calculatedDays = calculatedDays.toString().padStart(2, 0);

    days.innerHTML = calculatedDays;
    minutes.innerHTML = calculatedMinutes;
    hours.innerHTML = calculatedHours;
    seconds.innerHTML = calculatedSeconds;
  } else {
    document.querySelector(".countdown").style.display = "none";
    document.querySelector("#heading").innerHTML = "HAPPY NEW YEAR";
  }
}

function updateCountDown() {
  setInterval(() => {
    setcountDown();
  }, 1000);
}
updateCountDown();
