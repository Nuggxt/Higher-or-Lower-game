// Gets random number

// let random = Math.floor(Math.random() * 100) + 1;
// if (random < 50) {
//  console.log(random + " You lose...");
// } else if (random > 50) {
//  console.log(random + " You WIN!!!");
// }

let x;

document.getElementById("rollButton").onclick = function() {
  x = Math.floor(Math.random() * 100) + 1;

  document.getElementById("xlabel").innerHTML = x;
};
