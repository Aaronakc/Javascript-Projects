const presentDate = document.querySelector("#current-date");
const leftIcon = document.querySelector("#left-icon");
const rightIcon = document.querySelector("#right-icon");
const dateList = document.querySelector(".calender .dates");
// console.log(currentDate,leftIcon,rightIcon)

const date = new Date();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentYear = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(date);
console.log(currentMonth);
console.log(currentDate);
console.log(currentYear);

function showcalender() {
  presentDate.innerHTML = `${months[currentMonth]} ${currentYear}`;
  const lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDateofMonth = new Date(currentYear, currentMonth, 1);
  const firstDayOfMonth = firstDateofMonth.getDay();
  console.log(firstDayOfMonth);
  const previousMonthsDate = new Date(currentYear, currentMonth, 0).getDate();
  console.log(previousMonthsDate);
  const nextMonthstartDay = new Date(currentYear, currentMonth + 1, 1).getDay();
  console.log(nextMonthstartDay)

  let dateofCalender = "";

  for (i = firstDayOfMonth; i > 0; i--) {
    dateofCalender += `<li class='inactive'>${previousMonthsDate - i + 1}</li>`;
  }
  
  for (i = 1; i <= lastDateofMonth; i++) {
    const isToday =
    i === currentDate &&
    currentMonth === date.getMonth() &&
    currentYear === date.getFullYear();
    dateofCalender += `<li class='${isToday ? "active" : ""}'>${i}</li>`;
  }
  
  if (nextMonthstartDay !== 0) {
    for (i = nextMonthstartDay; i <= 6; i++) {
      dateofCalender += `<li class='inactive'>${
        i - nextMonthstartDay + 1
      }</li>`;
    }
  }
  
  dateList.innerHTML = dateofCalender;

  console.log(lastDateofMonth);
  console.log(firstDateofMonth);
}
showcalender();

leftIcon.addEventListener("click", previousMonths);
function previousMonths() {
  currentMonth--;
  showcalender();
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
    showcalender();
  }

  console.log(currentMonth);
}
showcalender();

rightIcon.addEventListener("click", nextMonths);
function nextMonths() {
  currentMonth++;
  showcalender();
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
    showcalender();
  }
}
