// create an array that holds the words
var words = ["angie", "barbara", "chelsea", "cindy", "diane", "elizabeth", "fran", "grace", "helen", "isabel", "jackie", "karen", "linda", "nancy", "annie", "eve", "kelly", "lynne", "nicole", "amanda"];

// create variables to hold wins, losses, guesses left, what letters were guessed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongLetters = [];
var answerArray = [];



// create variables that reference the html
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var wrongLettersText = document.getElementById("wrongLetters-text");
var letterGuessedText = document.getElementById("letter-guessed-text");
var answerText = document.getElementById("answer-text");


// picks a random word from girlsList
var word = words[Math.floor(Math.random() * words.length)];

// function to run whenever a user presses a key
document.onkeyup = function (event) {
  // determines which key was pressed
  var userGuess = event.key.toLowerCase();
  // adds guess to array
  // wrongLetters.push(" " + userGuess);

  // add to answer array


  // shows blank spaces for the random word
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
  }
  var remainingLetters = word.length;

  console.log(answerArray.join(" "));
  console.log("user guess: " + userGuess);
  console.log("word: " + word);
  console.log("Wrong Letters: " + wrongLetters);

  // put the correct letter guesses in the blank spaces of answerArray

  // put the wrong letters in the wrongLetters array

  // show user choice, random word, wins/losses/guesses left/wrong letters
  answerText.textContent = answerArray.join(" ");
  letterGuessedText.textContent = userGuess;
  wrongLettersText.textContent = wrongLetters;
  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guessesLeft;




}


// graphic of WOD description when either correctly/incorrectly answered. 

// button to start game onClick

// buttons start and quit onClick

// alert when game is over and out of guesses 
