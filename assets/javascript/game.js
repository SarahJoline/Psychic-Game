var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 9;
var wins = 0;
var losses = 0;
var lettersGuessed = []
var userGuess;

winning = document.getElementById("winning");
winning.innerHTML = 'Wins: ' + wins;

losing = document.getElementById("losing");
losing.innerHTML = 'Losses: ' + losses;

guesses = document.getElementById("guesses");
guesses.innerHTML = 'Guesses Remaining: ' + lives;


var letter = alphabet[Math.floor(Math.random() * alphabet.length)];

function lettersGuessed() {

    document.querySelector('#guessed').innerHTML = "Your Guesses so far: " + guessed.join(', ');
};

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === letter) {
        wins++;
    } else {
        lettersGuessed.push(userGuess);
        document.getElementById('#guessed').innerHTML = lettersGuessed;
    }
};
