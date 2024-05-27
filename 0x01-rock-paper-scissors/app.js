const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possiblechoice => 
    possiblechoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice

    computerChoice = genComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice
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
}