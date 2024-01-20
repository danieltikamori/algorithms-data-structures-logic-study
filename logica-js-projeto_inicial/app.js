alert("Welcome to the Guessing Number Game!");

let minNum = 0;
let maxNum = 100;
let secretNumber = Math.floor(Math.random() * (maxNum + 1));
let numAttempts = 1;

do {
  let guessNumber = prompt(`Choose a number between ${minNum} to ${maxNum}`);

  // Check if the user's input is a valid number
  if (isNaN(guessNumber)) {
    alert("Invalid input. Please enter a number.");
    continue;
  }

  // Convert the user's input to a number
  guessNumber = Number(guessNumber);

  // Check if the user's guess is within the valid range
  if (guessNumber < minNum || guessNumber > maxNum) {
    alert(
      "Your guess is out of range. Please choose a number between " +
        minNum +
        " and " +
        maxNum +
        "."
    );
    continue;
  }

  if (guessNumber > secretNumber) {
    alert(`The secret number is lower than ${guessNumber}`);
  } else if (guessNumber < secretNumber) {
    alert(`The secret number is higher than ${guessNumber}`);
  } else {
    break;
  }

  numAttempts++;
} while (true);

let wordAttempt = numAttempts > 1 ? "attempts" : "attempt";
alert(
  `You discovered the secret number ${secretNumber} in ${numAttempts} ${wordAttempt}!`
);

// Uses a do-while loop instead of a while loop to ensure that the user is prompted for their guess at least once. I also added some error handling to ensure that the user's input is a valid number and is within the range of possible values. Finally, I added some comments to make the code more readable.
// - I used let instead of var to declare the variables guessNumber and wordAttempt to limit their scope to the do-while loop.
// - I used Number() to convert the user's input to a number instead of parseInt() because it handles decimal numbers better.
// - I added some error handling to ensure that the user's input is a valid number and is within the range of possible values.
// - I used template literals to make the code more readable.
// - I added some comments to make the code more understandable.b{11}

// Here's a breakdown of the changes I made:

// 1. I used a do-while loop instead of a while loop to ensure that the user is prompted for their guess at least once.
// 2. I added error handling to ensure that the user's input is a valid number and is within the range of possible values.
// 3. I used let instead of var to declare the variables guessNumber and wordAttempt to limit their scope to the do-while loop.
// 4. I used Number() to convert the user's input to a number instead of parseInt() because it handles decimal numbers better.
// 5. I added some comments to make the code more understandable.
// 6. I used template literals to make the code more readable.
