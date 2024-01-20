alert("Welcome to the Guessing Number Game!");

let numeroSecreto = 29;
let chute = prompt("Choose a number between 1 to 10");

if (chute == numeroSecreto) {
  alert(`You discovered the secret number ${numeroSecreto}!`);
} else {
  alert("You mistaken the number!");
}
