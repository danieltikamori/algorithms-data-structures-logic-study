alert("Welcome to the Guessing Number Game!");

let secretNumber = 29;
let guessNumber;
let numAttempts = 1;

while (guessNumber != secretNumber) {
  guessNumber = prompt("Choose a number between 1 to 10");
  if (guessNumber == secretNumber) {
    alert(`You discovered the secret number ${secretNumber} in ${numAttempts} attempts!`);
  } else {
    if (guessNumber > secretNumber) {
      alert(`The secret number is lower than ${guessNumber}`);
    } else {
      alert(`The secret number is higher than ${guessNumber}`);
    }
    numAttempts++;
  }
}
