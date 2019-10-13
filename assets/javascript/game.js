// create an array that holds the words
var girlsList = ["angie", "barbara", "chelsea", "cindy", "diane", "elizabeth", "fran", "grace", "helen", "isabel", "jackie", "karen", "linda", "nancy", "annie", "eve", "kelly", "lynne", "nicole", "amanda"];

// create variables to hold wins, losses, guesses left, what letters were guessed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongLetters = [];
var letters = [];
// create variables that reference the html
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var wrongLettersText = document.getElementById("wrongLetters-text");
var wordGuessedText = document.getElementById("word-guessed-text");
var choosenWordText = document.getElementById("choosen-word-text");


// word randomly choosen from girlsList array -- computer picks
var word = girlsList[Math.floor(Math.random() * girlsList.length)];


// chosen word is replaced with _ _ word is hidden


// function to run whenever a user presses a key
document.onkeyup = function (event) {
  // determines which key was pressed
  var userGuess = event.key.toLowerCase();
  // adds guess to array
  wrongLetters.push(" " + userGuess);


  console.log("user guess: " + userGuess);
  console.log("word: " + word);
  console.log("Wrong Letters: " + wrongLetters);



  // show user choice, random word, wins/losses/guesses left/wrong letters
  choosenWordText.textContent = word;
  wordGuessedText.textContent = userGuess;
  wrongLettersText.textContent = wrongLetters;
  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guessesLeft;




}

// graphic of WOD description when either correctly/incorrectly answered. 

// button to start game onClick