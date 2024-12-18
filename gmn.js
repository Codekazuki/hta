// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number is ${randomNumber}`);

// Select DOM elements
const guess = document.getElementById("guess");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");

// Function to check the guess
function checkGuess(e) {
  e.preventDefault();

  let myGuess = Number(guess.value);

  if (myGuess === randomNumber) {
    feedback.textContent = "You got it right!";
  } else if (myGuess > randomNumber) {
    feedback.textContent =
      "Your guess was " + myGuess + ". That's too high. Try Again!";
  } else if (myGuess < randomNumber) {
    feedback.textContent =
      "Your guess was " + myGuess + ". That's too low. Try Again!";
  }
}
submitGuess.addEventListener("click", checkGuess);
