var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = Number(prompt("Guess the secret number between 1 and 10:"));
if (userGuess === secretNumber) {
    alert("u gussed secret num");
} else {
    alert("Try again! num was" + secretNumber);
}