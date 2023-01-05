let x; // Sets the variable to be set up for the random number generation.
let y;
const win = 'You Win!';
const lose = 'You Lose...';

document.getElementById("rollButton").onclick = function () {
  // Calls the button onclick function
  x = Math.floor(Math.random() * 100) + 1; // Gets the random number
  document.getElementById("xlabel").innerHTML = x; // Displays the random number after button click
  if(x > 50){
    console.log(win)
  }else {
    console.log(lose)
  }
};
