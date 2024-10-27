const buttons = document.querySelectorAll(".buttons button");
const contents = document.querySelectorAll(".content");
const imageContainer = document.querySelector(".image-container img");

const imageSources = ["./img/img4.jpg", "./img/img2.jpg", "./img/img3.jpg"];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    contents.forEach((content) => content.classList.remove("show")); // Hide all contents
    buttons.forEach((btn) => btn.classList.remove("show")); // Remove 'show' class from all buttons

    contents[index].classList.add("show"); // Show the corresponding content and highlight the clicked button
    button.classList.add("show");

    imageContainer.src = imageSources[index];
  });
});
