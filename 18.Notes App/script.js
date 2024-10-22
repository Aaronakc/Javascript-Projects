const buttonElement = document.querySelector(".container button");
const notesContainer = document.querySelector(".note-container");
const inputNote = document.querySelectorAll(".input-note");

function createNote() {
  let inputNoteElement = document.createElement("p");
  let spanElement = document.createElement("span");
  iconElement = document.createElement("i");
  inputNoteElement.className = "input-note";
  inputNoteElement.setAttribute("contenteditable", "false");
  spanElement.setAttribute("contenteditable", "true");
  iconElement.className = "bi bi-trash-fill delete";
  iconElement.setAttribute("contenteditable", "false");
  notesContainer.appendChild(inputNoteElement).appendChild(spanElement);
  inputNoteElement.appendChild(iconElement);
  document.querySelectorAll("i").forEach((icon) => {
    icon.addEventListener("click", removeNoteClicked);
  });
}

buttonElement.addEventListener("click", createNote);
function removeNoteClicked(e) {
  console.log(e);
  console.log(e.target.tagName);
  if (e.target.tagName == "I") {
    e.target.parentElement.remove();
  }
}
