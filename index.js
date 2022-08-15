let random = Math.floor(Math.random() * 100) + 1;
if (random < 50) {
  console.log("You number is lower than 50. You lose...");
  console.log(random);
}
if (random > 50) {
  console.log("Your number is higher than 50. You win!");
  console.log(random);
}