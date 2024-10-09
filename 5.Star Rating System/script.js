const allStar = document.querySelectorAll(".stars i");
const review = document.querySelector("#experience");
console.log(allStar);
const submitBtn = document.querySelector("#submit-btn");
const ratingPage = document.querySelector(".rating");
const secondPage = document.querySelector(".second-page");
const editBtn = document.querySelector("#edit-btn");

allStar.forEach((star, index1) => {
  star.addEventListener("click", () => {
    console.log("clicked");
    allStar.forEach((star, index2) => {
      // index1 >= index2 ? (star.className = "bi-star-fill"): (star.className = "bi-star");
      if (index1 >= index2) {
        star.className = "bi-star-fill";
        if (index2 == 0) {
          review.innerHTML = "I felt awful 🤢";
          console.log(review);
        } else if (index2 == 1) {
          review.innerHTML = `I did't like it 🤧`;
          console.log(review);
        } else if (index2 == 2) {
          review.innerHTML = "I found it average 🙂";
          console.log(review);
        } else if (index2 == 3) {
          review.innerHTML = "I liked it 😊";
          console.log(review);
        } else {
          review.innerHTML = "I loved it 🥰";
          console.log(review);
        }
      } else {
        star.className = "bi-star";
      }
      console.log(star);
    });
  });
});

function responseIs() {
  ratingPage.style.display = "none";
  secondPage.style.display = "block";
}

submitBtn.addEventListener("click", responseIs);

function showPreviousPage() {
  ratingPage.style.display = "block";
  secondPage.style.display = "none";
}

editBtn.addEventListener("click", showPreviousPage);
