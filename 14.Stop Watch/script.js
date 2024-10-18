const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");
let sec = 0;
let min = 0;
let hrs = 0;
let timerId = null;

startBtn.addEventListener("click", () => {
  if (timerId === null) {
    timerId = setInterval(startTimer, 1000);
    startBtn.disabled = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  sec = 0;
  min = 0;
  hrs = 0;
  timerDisplay.innerHTML = "00 : 00 : 00";
  startBtn.disabled = false;
});

function startTimer() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hrs++;
  }

  const formattedHrs = String(hrs).padStart(2, "0");
  const formattedMin = String(min).padStart(2, "0");
  const formattedSec = String(sec).padStart(2, "0");

  timerDisplay.innerHTML = `${formattedHrs} : ${formattedMin} : ${formattedSec}`;
}
