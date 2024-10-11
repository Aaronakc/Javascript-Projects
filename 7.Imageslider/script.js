let image_array = ['1.png', '2.png', '3.png', '4.png', '5.png']
let imageElement = document.querySelector("#image");
let buttonElement1 = document.querySelector(".b1");
let buttonElement2 = document.querySelector(".b2");
let index = 0;

function checkIndex() {
  if (index > image_array.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = image_array.length - 1;
  }
}

function increaseIndex() {
  index++;
}

function decreaseIndex() {
  index--;
}

function imageSlider() {
  imageElement.src = `./images/${image_array[index]}`
}

function button1Slider(){
  decreaseIndex();
  checkIndex();
  imageSlider();
}

function button2Slider(){
  increaseIndex();
  checkIndex();
  imageSlider();
}
buttonElement1.addEventListener('click', button1Slider);
buttonElement2.addEventListener('click', button2Slider);