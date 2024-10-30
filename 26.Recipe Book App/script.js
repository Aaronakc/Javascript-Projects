import { API_Key } from "./apikey.js";
const foodItemsElements = document.querySelector(".container");
async function getRecipe() {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=21&apiKey=${API_Key}`
    );
    let result = await response.json();
    console.log(result);

    // Clear previous food items
    foodItemsElements.innerHTML = "";

    result = result.recipes.filter((item) => item.image !== undefined);
    result.forEach((food) => {
      let foodListElement = document.createElement("li");
      foodListElement.classList.add("recipe-items");

      const recipeImage = document.createElement("img");
      recipeImage.src = food.image;
      recipeImage.alt = food.title; // Add alt attribute for accessibility

      const recipeTitle = document.createElement("h2");
      recipeTitle.innerText = food.title;

      const recipeIngredients = document.createElement("p");

      // Check if ingredients are available
      if (food.extendedIngredients && food.extendedIngredients.length > 0) {
        const ingredientsList = food.extendedIngredients.map(
          (ingredient) => ingredient.name
        );
        recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${ingredientsList.join(
          ", "
        )}`;
      } else {
        recipeIngredients.innerHTML =
          "<strong>Ingredients:</strong> Not available";
      }

      const viewRecipeLink = document.createElement("a");
      viewRecipeLink.href = food.sourceUrl; // Link to the recipe source
      viewRecipeLink.innerText = "View Recipe";

      // Append elements to the list item
      console.log(recipeImage.src);
      if (recipeImage.src) {
        foodListElement.appendChild(recipeImage);
        foodListElement.appendChild(recipeTitle);
        foodListElement.appendChild(recipeIngredients);
        foodListElement.appendChild(viewRecipeLink); // Append the link
      }

      // Append the list item to the recipe list
      foodItemsElements.appendChild(foodListElement);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

getRecipe();
