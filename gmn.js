// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number is ${randomNumber}`);

// Select DOM elements
const guess = document.getElementById("guess");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const playAgain = document.querySelector(".again");

// Function to check the guess
function checkGuess(e) {
  e.preventDefault();

  let myGuess = Number(guess.value);
  if (isNaN(myGuess) || guess.value.trim() === "") {
    feedback.textContent = "Please enter a valid number!";
    guess.value = "";
    return;
  }

  if (myGuess === randomNumber) {
    feedback.textContent = "You got it right!";
    guess.value = "";
    playAgain.style.display = "block";
  } else if (myGuess < 1 || myGuess > 100) {
    feedback.textContent = `Your mumu go dey guess ${myGuess}...... Guess between number 1 and 100`;
    guess.value = "";
  } else if (myGuess > randomNumber) {
    feedback.textContent =
      "Your guess was " + myGuess + ". That's too high. Try Again!";
    guess.value = "";
  } else if (myGuess < randomNumber) {
    feedback.textContent =
      "Your guess was " + myGuess + ". That's too low. Try Again!";
    guess.value = "";
  }
}

//play again
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  feedback.textContent = "I love your courage .......Start playing again ";
  guess.value = "";

  playAgain.style.display = "none";
}
playAgain.addEventListener("click", resetGame);
submitGuess.addEventListener("click", checkGuess);
