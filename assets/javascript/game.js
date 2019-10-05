var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 9;
var wins = 0;
var guessed = []

score = document.getElementById("score");
score.innerHTML = 'Wins: ' + wins;

guesses = document.getElementById("guesses");
guesses.innerHTML = 'Guesses Remaining: ' + lives;

var letter = alphabet[Math.floor(Math.random() * alphabet.length)];