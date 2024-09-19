// Guess a Number
// Write a program that generates a random number between 1 and 100, inclusive.
// It then prompts the user to guess the number (assume valid entry).
// The program will provide the following feedback after each guess:
//  Too low, guess again
//  Too high, guess again
//  Correct
// If correct, also display how many attempts it took. For example:
// Correct! It took you 7 attempts to guess the correct number.

// while (!Number.isInteger(int1)) {
//   int1 = Number.parseInt(prompt("Type a number 1"));
//   }
function GameWithHelp() {
  let Target = (Math.random()*100).toFixed();
  let number;
  let minGuess = 0;
  let maxGuess = 100;
  let attempsNb=0;
  while((number=prompt(`Type a number\nMin guessed = ${minGuess}\nMax guessed = ${maxGuess}`))!==Target){
    if (number<Target) {
      console.log("Too low");
      if (number>minGuess) {
        minGuess=number;
      }
    }
    if (number>Target) {
      console.log("Too high");
      if (number<maxGuess) {
        maxGuess=number;
      }
    }
    attempsNb++;
  }
  console.log(`Coorect, it took you ${attempsNb} attempts`);
}

function GameWithoutHelp() {
  let Target = (Math.random()*100).toFixed();
  let number;
  let attempsNb=0;
  while((number=prompt(`Type a number`))!==Target){
    if (number<Target) {
      console.log("Too low");
    }
    if (number>Target) {
      console.log("Too high");
    }
    attempsNb++;
  }
  console.log(`Coorect, it took you ${attempsNb} attempts`);
}

let help = prompt("Do you want help ? ").toLowerCase()==="yes" ? true : false;
if (help) {
  GameWithHelp();
} else {
  GameWithoutHelp();
} 