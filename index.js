// Gets random number

let random = Math.floor(Math.random() * 100) + 1;
if (random < 50) {
  console.log(random + " You lose...");
} else if (random > 50) {
  console.log(random + " You WIN!!!");
}

// Testing some stuff here. Might Delete..
let button = document.querySelector(".button");
let div = document.querySelector('.display');
let count = 0;

