const inputElement = document.querySelector(".add-work input");
const buttonElement = document.querySelector(".add-work button");
const listContainer = document.querySelector(".list-container");

function addList() {
  if (inputElement.value == "") {
    alert("enter the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputElement.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputElement.value = "";
}

buttonElement.addEventListener("click", addList);

listContainer.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
