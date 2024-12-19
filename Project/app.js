// app.js

// DOM
let userChoiceDisplay = document.getElementById('userChoice');
let computerChoiceDisplay = document.getElementById('computerChoice');
let resultDisplay = document.getElementById('result');
let winsDisplay = document.getElementById('wins');
let lossesDisplay = document.getElementById('losses');
let tiesDisplay = document.getElementById('ties');
let startButton = document.getElementById('startButton');

// states
let wins = 0;
let losses = 0;
let ties = 0;
let userChoice = '';

// Choices available
const choices = ['rock', 'paper', 'scissors'];

// Event Listeners
document.getElementById('rock').addEventListener('click', () => selectChoice('rock'));
document.getElementById('paper').addEventListener('click', () => selectChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => selectChoice('scissors'));

document.getElementById('startButton').addEventListener('click', playGame);
document.getElementById('resetButton').addEventListener('click', resetGame);

// Functions
function selectChoice(choice) {
    userChoice = choice;
    // Update user's circle with their choice
    userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${choice}.png" alt="${choice}" class='choice--img'/>`
    // Reset the computer's circle
    // computerChoiceDisplay.textContent = '-';
    startButton.disabled = false; // Enable the Start button
}

function playGame() {
    // Computer makes a choice
    const computerChoice = getComputerChoice();

    // Determine the winner
    const result = determineWinner(userChoice, computerChoice);

    // Update the display with the computer's choice
    computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`
    
    // Display the result
    resultDisplay.textContent = result === 'draw' ? 'It\'s a Draw!' :
                               result === 'win' ? 'You Win!' : 'You Lose!';

    // Update the score
    updateScore(result);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') {
        wins++;
        winsDisplay.textContent = wins;
    } else if (result === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
    } else {
        ties++;
        tiesDisplay.textContent = ties;
    }
}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
    userChoiceDisplay.innerHTML = '<img src="./assets/images/icon-user.png" alt="user" class="choice--img">';
    computerChoiceDisplay.innerHTML = '<img src="./assets/images/icon-computer.png" alt="computer" class="choice--img">';
    resultDisplay.textContent = 'Choose your weapon!';
    startButton.disabled = true; // Disable Start button initially
}
