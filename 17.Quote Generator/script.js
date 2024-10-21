const quoteDiv = document.querySelector("#quote-div");
const newQuoteBtn = document.querySelector("#new-quote-btn");
const tweet = document.querySelector("#tweet");
const addQuote = document.querySelector(".quote");
const addauthors = document.querySelector(".author");

// Array holding quote objects, each containing a quote and its author
const array = [
  {
    quotes:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
  {
    quotes: "“You only live once, but if you do it right, once is enough.”",
    author: " ― Mae West",
  },
  {
    quotes: "“If you tell the truth, you don not have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    quotes: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "― Oscar Wilde",
  },

  {
    quotes:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },
  {
    quotes:
      "“In three words I can sum up everything I have learned about life: it goes on.”",
    author: "― Robert Frost",
  },
];

// Function to generate and display a new random quote
function getQuote() {
  // Extract the selected quote and author
  const generateArrayItem = array[Math.floor(Math.random() * array.length)];
  const generateQuote = generateArrayItem.quotes;
  const Authors = generateArrayItem.author;
  // Updating the DOM with the new quote and author
  addQuote.innerHTML = generateQuote;
  console.log(addQuote);
  addauthors.innerHTML = Authors;
}

// Adding an event listener to the button so that when it's clicked, it calls the getQuote function
newQuoteBtn.addEventListener("click", getQuote);
