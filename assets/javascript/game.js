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

// picks a random word from words array
var word = words[Math.floor(Math.random() * words.length)];
var letterLefttoFind = word.length;
reset()
// function to run whenever a user presses a key
document.onkeyup = function (event) {
  // determines which key was pressed
  var userGuess = event.key.toLowerCase();
  letterGuessedText.textContent = userGuess;
  guessesLeft--
  console.log(guessesLeft)
  guessesLeftText.textContent = guessesLeft;
  if (correct(userGuess) == true) {
    correctUserGuess(word, userGuess)
    answerText.textContent = answerArray.join(" ");
  }
  else {
    // adds guess to array
    wrongLetters.push(" " + userGuess);
    wrongLettersText.textContent = wrongLetters;
  }
  if (letterLefttoFind === 0) {
    alert("you win");
    word = words[Math.floor(Math.random() * words.length)];
    reset()
    wins++
    winsText.textContent = wins
  }
  else if (guessesLeft === 0) {
    alert("you loose the word was: ", word)
    lossesText++
    lossesText.textContent = losses
  }

}

// game reset
function reset() {
  // shows blank spaces for the random word
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
  }
  var remainingLetters = word.length;
  console.log(answerArray.join(" "));
  // console.log("user guess: " + userGuess);
  console.log("word: " + word);
  console.log("Wrong Letters: " + wrongLetters);

  // show user choice, random word, wins/losses/guesses left/wrong letters
  answerText.textContent = answerArray.join(" ");
  wrongLettersText.textContent = wrongLetters;
  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guessesLeft;
}

// put the correct letter guesses in the blank spaces of answerArray

// put the wrong letters in the wrongLetters array

// add to answer array

// graphic of WOD description when either correctly/incorrectly answered. 

// button to start game onClick

// buttons start and quit onClick

// alert when game is over and out of guesses 

// check if answer is correct
function correct(guess) {
  for (var i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      return true;
    }
  }
  return false;
}

function correctUserGuess(word, guess) {
  console.log("ggg", guess);
  for (var i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      answerArray[i] = word[i]
      letterLefttoFind--;
      console.log(answerArray);

    }
  }
}
