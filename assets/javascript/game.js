// create an array that holds the words
var words = ["angie", "barbara", "chelsea", "cindy", "diane", "elizabeth", "fran", "grace", "helen", "isabel", "jackie", "karen", "linda", "nancy", "annie", "eve", "kelly", "lynne", "nicole", "amanda"];

// counter variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// arrays to random word and wrong letter
var wrongLetters = [];
var answerArray = [];

// create variables that reference the html
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var wrongLettersText = document.getElementById("wrongLetters-text");
var answerText = document.getElementById("answer-text");
var youLostText = document.getElementById("you-lost-text");
var youWonText = document.getElementById("you-won-text");

// picks a random word from words array
var word = words[Math.floor(Math.random() * words.length)];
var letterLefttoFind = word.length;

// calls game function to start the game
gameStart()

// function to run whenever a user presses a key
document.onkeyup = function (event) {
  // determines which key was pressed
  var userGuess = event.key.toLowerCase();
  // letterGuessedText.textContent = userGuess;

  // decrements the guessesLeft
  guessesLeft--
  console.log("guesses left:", guessesLeft)
  // updates the html with the guessesLeft
  guessesLeftText.textContent = guessesLeft;

  // correct letter blank spaces gets populated accorndingly
  if (correct(userGuess) == true) {
    correctUserGuess(word, userGuess)
    answerText.textContent = answerArray.join(" ");
  }
  else {
    // if its the wrong letter, adds it to the wrong letters array
    wrongLetters.push(" " + userGuess);
    wrongLettersText.textContent = wrongLetters;
    console.log("Wrong Letters: " + userGuess);
  }
  if (letterLefttoFind === 0) {
    // alert("you win");
    word = words[Math.floor(Math.random() * words.length)];
    wins++;
    winsText.textContent = wins;
    // youWonText.textContent = "Correct!! The word was: " + answerArray;
    reset();

  }
  else if (guessesLeft === 0) {
    alert("you lost the word was: " + word)
    word = words[Math.floor(Math.random() * words.length)];
    losses++;
    lossesText.textContent = losses;
    // youLostText.textContent = "You lost the word was " + word;
    // images();
    reset();
  }

}

// game start function
function gameStart() {
  // shows blank spaces for the random word
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
  }
  letterLefttoFind = word.length;

  console.log(answerArray.join(" "));
  console.log("word: " + word);

  // show user choice, random word, wins/losses/guesses left/wrong letters in the HTML
  answerText.textContent = answerArray.join(" ");
  wrongLettersText.textContent = wrongLetters;
  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guessesLeft;
}

// check if answer is correct
function correct(guess) {
  for (var i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      return true;
    }
  }
  return false;
}
// adds the correct letter to the blanks in the answer
function correctUserGuess(word, guess) {
  console.log(guess);
  for (var i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      answerArray[i] = word[i]
      letterLefttoFind--;
      console.log(answerArray);

    }
  }
}

function reset() {
  guessesLeft = 10;
  wrongLetters = [];
  answerArray = [];
  gameStart();
}

// *********things that aren't working***********************
// having issues with showing correct word when lost cant use word variable because it gives you the answer not the word that was randomly choosen.
// sometimes when you guess the right word you don't win..... WHY?????
// not sure how to show YOU WON!!! -- Might be a CSS Thing
// doesn't show the last letter of the word -- when you complete the word correctly -- never works with amanda -- tends to no let you win even though you got the word right?????????


// ****************************Things I would like to add******************
// graphic of WOD description when either correctly/incorrectly answered. 
// button to start game onClick
// buttons start and quit onClick
// Maybe a word bank
