const inputElement = document.querySelector("#input");
const addQR = document.querySelector("#add-QR");
const qrDiv = document.querySelector(".qr-div");
const generateButton = document.querySelector("#btn");
const generateAgainBtn = document.querySelector("#again-btn");

async function generateQR() {
  if (inputElement.value !== "") {
    const response = await fetch(
      ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputElement.value}`
    ); //fetch API
    console.log(response);
    qrDiv.innerHTML = ""; // Clear the current content in qrDiv (if any) before adding a new QR co

    let image = document.createElement("img"); // Create an image element
    image.classList = "add-QR"; // Adding a class to th
    image.src = response.url; // Setting the image source to the generated QR
    qrDiv.appendChild(image); // Append image to the qrDiv to display the QR code
  } else {
    generateButton.innerHTML = "Invalid";
    generateButton.style.backgroundColor = "red";

    setTimeout(() => {
      location.reload(); // Reload the page after 1 second to reset the state
    }, [1000]);
  }
}

generateButton.addEventListener("click", () => {
  try {
    generateQR();
  } catch (error) {
    console.log("error".error);
  }
});
