// WordGame class using get and set
var WordGame = function () {
    var secretWord = "javascript";
    
    this.getWord = function() {
        return secretWord;
    };

    this.setWord = function(word) {
        secretWord = word;
    };
};

// Create a new game object
var game = new WordGame();

// Check the player's guess
function checkGuess() {
    var guess = document.getElementById("guessInput").value.toLowerCase();
    var message = document.getElementById("message");

    if (guess === game.getWord()) {
        message.textContent = "Congratulations! You guessed the word correctly!";
        message.style.color = "green";
    } else {
        message.textContent = "Sorry, that's not the correct word. Try again!";
        message.style.color = "red";
    }
}