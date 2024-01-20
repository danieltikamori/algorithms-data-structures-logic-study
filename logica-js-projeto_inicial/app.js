alert("Welcome to the Guessing Number Game!");

let secretNumber = Math.floor(Math.random() * 11) // parseInt(Math.random() * 10 +1) also works
let guessNumber;
let numAttempts = 1;

while (guessNumber != secretNumber) {
  guessNumber = prompt("Choose a number between 1 to 10");
  if (guessNumber == secretNumber) {
    break;
  } else {
    if (guessNumber > secretNumber) {
      alert(`The secret number is lower than ${guessNumber}`);
    } else {
      alert(`The secret number is higher than ${guessNumber}`);
    }
    numAttempts++;
  }
}

let wordAttempt = numAttempts > 1 ? "attempts" : "attempt";
  alert(`You discovered the secret number ${secretNumber} in ${numAttempts} ${wordAttempt}!`);