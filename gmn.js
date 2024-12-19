// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(Math.floor(Math.random() * 10) + 1);
console.log(`Random Number is ${randomNumber}`);

// Select DOM elements
const guess = document.getElementById("guess");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const playAgain = document.querySelector(".again");
const attemptLeft = document.querySelector(".attempt");

// Function to check the guess
let attempt = 10;
function checkGuess(e) {
  e.preventDefault();
  let myGuess = Number(guess.value);
  console.log(myGuess);

  if (isNaN(myGuess) || guess.value.trim() === "") {
    feedback.textContent = "Please enter a valid number!";
    guess.value = "";
    return;
  }
  attempt--;
  if (myGuess === randomNumber) {
    feedback.textContent = "You got it right!";
    guess.value = "";
    playAgain.style.display = "block";
    document.querySelector(".ball").style.display = "block";

    // document.querySelector("body").style.backgroundColor = "green";
  } else if (attempt === 0) {
    feedback.textContent = `Game Over! The number was ${randomNumber}.`;
    playAgain.style.display = "block";
    document.querySelector("body").style.backgroundColor = "red";
  } else if (myGuess < 1 || myGuess > 100) {
    feedback.textContent = `Your mumu go dey guess ${myGuess}...... Guess between number 1 and 100`;
    guess.value = "";
  } else if (myGuess > randomNumber) {
    feedback.textContent =
      "Your guess was " + myGuess + ". That's too high. Try Again!";
    guess.value = "";

    attemptLeft.textContent = attempt;
  } else if (myGuess < randomNumber) {
    feedback.textContent =
      "Your guess was " + myGuess + ". That's too low. Try Again!";
    guess.value = "";
    attemptLeft.textContent = attempt;
  }
}

//play again
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  feedback.textContent = "I love your courage .......Start playing again ";
  guess.value = "";

  playAgain.style.display = "none";
  attempt = 10;
  attemptLeft.textContent = attempt;
  document.querySelector("body").style.backgroundColor = "white";
}
playAgain.addEventListener("click", resetGame);
submitGuess.addEventListener("click", checkGuess);
