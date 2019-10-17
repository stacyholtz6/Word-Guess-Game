// create an array that holds the words
var words = ["angie", "barbara", "chelsea", "cindy", "diane", "elizabeth", "fran", "grace", "helen", "isabel", "jackie", "karen", "linda", "nancy", "annie", "eve", "kelly", "lynne", "nicole", "amanda"];

// counter variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// arrays to random word and wrong letter
var wrongLetters = [];
var answerArray = [];
var correctOne = [];


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
var newWord = word;
var letterLefttoFind = word.length;

// calls game function to start the game
gameStart()

// function to run whenever a user presses a key
document.onkeyup = function (event) {
  // determines which key was pressed
  var userGuess = event.key.toLowerCase();
  // letterGuessedText.textContent = userGuess;

  // decrements the guessesLeft
  guessesLeft--;
  console.log("guesses left:", guessesLeft);
  console.log("correct One:", correctOne);
  // updates the html with the guessesLeft
  guessesLeftText.textContent = guessesLeft;

  // correct letter blank spaces gets populated accorndingly
  if (correct(userGuess) == true) {
    correctUserGuess(word, userGuess);
    answerText.textContent = answerArray.join(" ");
  }
  else {
    // if its the wrong letter, adds it to the wrong letters array
    wrongLetters.push(" " + userGuess);
    wrongLettersText.textContent = wrongLetters;
    console.log("Wrong Letters: " + userGuess);
  }
  if (letterLefttoFind === 0) {
    youWonText.textContent = "You got it right the word is " + correctOne.join("");
    word = words[Math.floor(Math.random() * words.length)];
    wins++;
    winsText.textContent = wins;
    reset();

  }
  else if (guessesLeft === 0) {
    youLostText.textContent = "Oh sad you got it wrong. The word is " + word + ".";
    word = words[Math.floor(Math.random() * words.length)];
    losses++;
    lossesText.textContent = losses;
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
  correctOne = answerArray;

  // show user choice, random word, wins/losses/guesses left/wrong letters in the HTML
  answerText.textContent = answerArray.join(" ");
  wrongLettersText.textContent = wrongLetters;
  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guessesLeft;

  console.log(answerArray.join(" "));
  console.log("word: " + word);
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
      answerArray[i] = word[i];
      letterLefttoFind--;
      console.log(answerArray);

    }
  }
}

// resets the game
function reset() {
  guessesLeft = 10;
  wrongLetters = [];
  answerArray = [];
  // youLostText.textContent = "";
  gameStart();
  // youLostText.textContent = "";
}

function hint() {
  document.getElementById("hint").style.display = "block";
}
// MOST IMPORTANT LESSON LEARNED --- ORDER MATTERS!!!!!

// Maybe a timeout function

// ****************************Things I would like to add******************
// graphic of WOD description when either correctly/incorrectly answered. 
// button to start game onClick
// buttons start and quit onClick
// Maybe a word bank
