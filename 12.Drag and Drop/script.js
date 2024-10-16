const boxElements = document.querySelectorAll(".box");
const imageElement = document.querySelector(".image");
console.log(boxElements, imageElement);

boxElements.forEach((box) => {
  //when the img is draggedover the other boxes
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  //when the img is dragged leaves it current box
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  //when the image is dropped in other box
  box.addEventListener("drop", () => {
    box.appendChild(imageElement);
    box.classList.remove("hovered");
  });
});
