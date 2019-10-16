var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;

restart();

function restart() {
    var lives = 9;
    var alreadyGuessed = [];
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(letter);



    document.onkeyup = function (event) {
        var userGuess = event.key;
        var noDoubles = alreadyGuessed.includes(userGuess);
        var validKeys = alphabet.includes(userGuess);
        //How would I write this if I don't want to use alerts? I just want the game to wait for 
        //a valid button to be pressed.
        if (noDoubles) {
            alert('Letter already guessed');
        } else if (!validKeys) {
            alert('Not a letter');
        } else {
            game();
        }

        function game() {
            if (userGuess === letter) {
                wins++;
                document.querySelector('#winning').innerHTML = wins;
                restart();
            } else {
                lives--;
                document.querySelector('#guesses').innerHTML = lives;
                alreadyGuessed.push(userGuess);
                document.querySelector('#guessed').innerHTML = alreadyGuessed.join(', ');
            }
            if (lives === 0) {
                losses++;
                document.querySelector('#losing').innerHTML = losses;
                restart();
            }
        }
    }
}


// when lives at 0 -- game restarts.
