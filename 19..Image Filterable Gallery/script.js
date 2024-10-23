const buttonElements = document.querySelectorAll(".filter-buttons button");
const cardsElements = document.querySelectorAll(".filterable-cards");
console.log(buttonElements);
console.log(cardsElements);

function filtercards(e) {
  document.querySelector(".active").classList.remove("active"); // Remove the 'active' class from the currently active button
  e.target.classList.add("active"); // Add the 'active' class to the clicked button

  // Loop through each card element
  cardsElements.forEach((cards) => {
    // Initially hide all cards by adding the 'hide' class
    cards.classList.add("hide");
    // Check if the card's data-name matches the clicked button's data-name
    // or if the clicked button is the "Show all" button
    if (
      cards.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "Show all"
    )
      cards.classList.remove("hide");
  });
  console.log(e);
}

buttonElements.forEach((button) =>
  button.addEventListener("click", filtercards)
);
