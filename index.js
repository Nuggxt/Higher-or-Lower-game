let random = Math.floor(Math.random() * 100) + 1;
if (random < 50) {
  console.log("You number is lower than 50");
  console.log(random);
}
if (random > 50) {
  console.log("Your number is higher than 50");
  console.log(random);
}

const button = document.querySelector('button');

function greet (); {
  const name = prompt('Hello there! What is your name?')
  alert(`Hello ${name}, Ready to play?`);
}
 button.addEventListener ('click', greet);