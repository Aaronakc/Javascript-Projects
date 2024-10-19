const questions = [
  {
    question: "What is the Capital City of Japan?",
    answer: [
      { text: "Kathmandu", correct: false },
      { text: "Delhi", correct: false },
      { text: "Tokyo", correct: true },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the National Animal of Thailand?",
    answer: [
      { text: "Monkey", correct: false },
      { text: "Donkey", correct: false },
      { text: "Buffalo", correct: false },
      { text: "Elephant", correct: true },
    ],
  },

  {
    question: "Which is the smallest country in the World?",
    answer: [
      { text: "Vatican City", correct: true },
      { text: "Nepal", correct: false },
      { text: "Bhutan", correct: false },
      { text: "America", correct: false },
    ],
  },

  {
    question: "What is the National Animal of Nepal?",
    answer: [
      { text: "Monkey", correct: false },
      { text: "Cow", correct: true },
      { text: "Buffalo", correct: false },
      { text: "Elephant", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".questions h2");

const nextBtn = document.querySelector("#next-btn");
const answersBtn = document.querySelector(".answers-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answer.forEach((item) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = item.text;
    buttonElement.classList.add("btn");
    answersBtn.appendChild(buttonElement);
    if (item.correct) {
      buttonElement.dataset.correct = item.correct;
      console.log(buttonElement);
    }

    buttonElement.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct == "true";
  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    document.querySelectorAll(".btn").forEach((button) => {
      if (button.dataset.correct) {
        button.classList.add("correct");
      }
    });
  }
  nextBtn.style.display = "block";
  // nextQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
  answersBtn.innerHTML = "";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.innerHTML = `Quiz completed ! Your score is ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.addEventListener("click", playAgain);
  }
}

function playAgain() {
  location.reload();
}

startQuiz();
