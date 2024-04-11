const randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultText = document.getElementById('result');

function checkGuess() {
    const guess = parseInt(guessInput.value);
    guesses++;

    if (guess === randomNumber) {
        displayResult(`Parabéns! Você acertou em ${guesses} tentativas.`);
    } else if (guess < randomNumber) {
        displayResult('Tente um número maior.');
    } else {
        displayResult('Tente um número menor.');
    }
}


function displayResult(message) {
    resultText.textContent = message;
}


guessButton.addEventListener('click', checkGuess);
