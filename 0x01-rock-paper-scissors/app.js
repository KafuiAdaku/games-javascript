const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possiblechoice => 
    possiblechoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    computerChoice = genComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;

    result = getResult();
    resultDisplay.innerHTML = result;
}));

function genComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * possibleChoices.length)) + 1;

    if (randomNumber === 1) {
        return 'rock'
    }
    if (randomNumber === 2) {
        return 'paper'
    }
    if (randomNumber === 3) {
        return 'scissors'
    }
};

function getResult() {
    if (computerChoice === userChoice) {
        return "It's a draw!";
    }
    if (computerChoice == 'rock' && userChoice === 'paper') {
        return 'You win!';
    }
    if (computerChoice == 'rock' && userChoice === 'scissors') {
        return 'You lose!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        return 'You lose!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        return 'You win!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        return 'You win';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        return 'You lose!';
    }
}