let imagesSrc = ["scissor.png", "paper.png", "rock.png"];
let buttonElement1 = document.querySelector("#p1-button");
let buttonElement2 = document.querySelector("#p2-button");

let imgElement1 = document.querySelector(".player1 img");
let imgElement2 = document.querySelector(".player2 img");

let result = document.querySelector("h3");
let play_again = document.querySelector("#play-again");

let randomNumber1;
let randomNumber2;
let player1Move;
let player2Move;

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function player1() {
  randomNumber1 = generateRandomNumber();
  imgElement1.src = `./Images/${imagesSrc[randomNumber1]}`;
  imgElement1.classList.add("show");
  if (randomNumber1 == 0) {
    player1Move = "scissor";
  } else if (randomNumber1 == 1) {
    player1Move = "paper";
  } else {
    player1Move = "rock";
  }
  buttonElement1.disabled = true;
  buttonElement2.disabled = false;
}
buttonElement2.disabled = true;

function player2() {
  randomNumber2 = generateRandomNumber();
  imgElement2.src = `./Images/${imagesSrc[randomNumber2]}`;
  imgElement2.classList.add("show");
  if (randomNumber2 == 0) {
    player2Move = "scissor";
  } else if (randomNumber2 == 1) {
    player2Move = "paper";
  } else {
    player2Move = "rock";
  }
  buttonElement1.disabled = true;
  buttonElement2.disabled = true;
  compareResult();
}

function compareResult() {
  if (player1Move == player2Move) {
    result.innerHTML = "it is a tie";
  } else if (player1Move == "scissor" && player2Move == "paper") {
    result.innerHTML = "player 1 won";
  } else if (player1Move == "scissor" && player2Move == "rock") {
    result.innerHTML = "player 2 won";
  } else if (player1Move == "paper" && player2Move == "scissor") {
    result.innerHTML = "player 2 won";
  } else if (player1Move == "paper" && player2Move == "rock") {
    result.innerHTML = "player 1 won";
  } else if (player1Move == "rock" && player2Move == "scissor") {
    result.innerHTML = "player 1 won";
  } else {
    result.innerHTML = "player 2 won";
  }
}

function reset() {
  location.reload();
}
