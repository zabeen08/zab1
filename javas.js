const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function askQuestion() {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    const guess = Number(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number.");
      askQuestion();
    } else if (guess > randomNumber) {
      console.log("📈 Too high! Try again.");
      askQuestion();
    } else if (guess < randomNumber) {
      console.log("📉 Too low! Try again.");
      askQuestion();
    } else {
      console.log(`🎉 Correct! You guessed it in ${attempts} attempts.`);
      rl.close();
    }
  });
}

console.log("🎮 Welcome to the Random Number Guessing Game!");
askQuestion();
