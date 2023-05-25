const Quote = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb"
  },
  {
    quote:
      "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    author: "Unknown"
  },
  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie"
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine"
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci"
  },
  {
    quote:
      "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti"
  },
  {
    quote:
      "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong"
  },
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan"
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin"
  },
  {
    quote:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby"
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: " Albert Einstein"
  },
  {
    quote:
      "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb"
  },
  {
    quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach"
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    quote: "You become what you believe.",
    author: "Oprah Winfrey"
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh"
  }
];

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

//Colors
const randomColor = "#eb3b5a";

const boxColor = document.getElementById("quote-box");
boxColor.style.color = randomColor;

const bodyColor = document.body;
bodyColor.style.backgroundColor = randomColor;

const tweetColor = document.getElementById("tweet-quote");
tweetColor.style.backgroundColor = randomColor;

const newQuoteColor = document.getElementById("new-quote");
newQuoteColor.style.backgroundColor = randomColor;

//Quotes

const randomQuote = Quote[Math.floor(Math.random() * Quote.length)];

let quotes = document.getElementById("text");
quotes.innerHTML = randomQuote.quote;

let authors = document.getElementById("author");
authors.innerHTML = randomQuote.author;

//onclick

function newQuote() {
  colorfn();
  quotefn();
}

function colorfn() {
  const randomColor2 = colors[Math.floor(Math.random() * Quote.length)];

  boxColor.style.color = randomColor2;

  bodyColor.style.backgroundColor = randomColor2;

  tweetColor.style.backgroundColor = randomColor2;

  newQuoteColor.style.backgroundColor = randomColor2;
}

function quotefn() {
  const randomQuote2 = Quote[Math.floor(Math.random() * Quote.length)];

  quotes.innerHTML = randomQuote2.quote;

  authors.innerHTML = randomQuote2.author;
}