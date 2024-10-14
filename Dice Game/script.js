const img=['1.png','2.png','3.png','4.png','5.png','6.png'];
const buttonElement1=document.querySelector('#p1-button');
const buttonElement2 = document.querySelector('.player2 button')
const imgElement1 = document.querySelector('.player1 img')
const imgElement2 = document.querySelector('.player2 img');
const result = document.querySelector('h3');
console.log(buttonElement1, buttonElement2)

function generateRandomNumber() {
  return Math.floor((Math.random()*6));
}
let randomNumber1;
let randomNumber2;

function function1() {
  randomNumber1 = generateRandomNumber();
  imgElement1.src = `./${img[randomNumber1]}`;
  imgElement1.classList.add('show')
  buttonElement1.disabled = true;
  buttonElement2.disabled = false;
}
buttonElement2.disabled=true;

function function2() {
  randomNumber2 = generateRandomNumber();
  imgElement2.src = `./${img[randomNumber2]}`;
  imgElement2.classList.add('show')
  buttonElement2.disabled = true;
  compareResult(randomNumber1, randomNumber2)
}

function compareResult(a,b){
  if(a > b) {
    result.innerHTML = 'Player 1 wins';
  }
  else if(b > a) {
    result.innerHTML = 'Player 2 wins';
  }
  else {
    result.innerHTML = 'Tie game';
  }
}
function reset() {
  location.reload();
}


