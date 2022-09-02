// Gets random number

// let random = Math.floor(Math.random() * 100) + 1;
// if (random < 50) {
//  console.log(random + " You lose...");
// } else if (random > 50) {
//  console.log(random + " You WIN!!!");
// }

let x; // Sets the variable to be set up for the random number generation.

document.getElementById("rollButton").onclick = function() { // Calls the button onclick function
  x = Math.floor(Math.random() * 100) + 1; // Gets the random number
  document.getElementById("xlabel").innerHTML = x; // Displays the random number after button click
};
