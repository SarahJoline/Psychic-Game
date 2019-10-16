var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = 0;
var losses = 0;

restart();

function restart() {
  var lives = 9;
  var alreadyGuessed = [];
  var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(letter);

  document.onkeyup = function(event) {
    var userGuess = event.key;
    var doubles = alreadyGuessed.includes(userGuess);
    var validKeys = alphabet.includes(userGuess);
    if (doubles) {
      return;
    } else if (!validKeys) {
      return;
    } else {
      game();
    }

    function game() {
      if (userGuess === letter) {
        wins++;
        document.querySelector("#winning").innerHTML = wins;
        restart();
      } else {
        lives--;
        document.querySelector("#guesses").innerHTML = lives;
        alreadyGuessed.push(userGuess);
        document.querySelector("#guessed").innerHTML = alreadyGuessed.join(
          ", "
        );
      }
      if (lives === 0) {
        losses++;
        document.querySelector("#losing").innerHTML = losses;
        restart();
      }
    }
  };
}


