const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const gameMessage = document.getElementById('gameMessage');

var randomNumber = 0
var attempts = 0

if (guessButton) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        gameMessage.textContent = ""

        // Game logic
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            gameMessage.textContent = 'Please enter a valid number between 1 and 100.';
            gameMessage.style.color = 'orange';
        } else if (userGuess < randomNumber) {
            gameMessage.textContent = 'Too low! Try again.';
            gameMessage.style.color = 'blue';
        } else if (userGuess > randomNumber) {
            gameMessage.textContent = 'Too high! Try again.';
            gameMessage.style.color = 'blue';
        } else {
            gameMessage.textContent = `Congratulations! You guessed it in ${attempts} attempts. The number was ${randomNumber}.`;
            gameMessage.style.color = 'green';
            guessInput.disabled = true;
            guessButton.disabled = true;
        }
        
        guessInput.value = '';
        guessInput.focus();
    });
}

if (resetButton)
{
    resetButton.addEventListener('click', function(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0
        guessInput.disabled = false;
        guessButton.disabled = false;
        gameMessage.textContent = ""
    });
}