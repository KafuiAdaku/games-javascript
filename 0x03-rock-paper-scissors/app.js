const choicesDisplay = document.querySelector('#choices');
const resultDisplay = document.querySelector('#result');

let userChoice, computerChoice;

const choices = ['rock', 'paper', 'scissors'];

function handleClick(event) {
    console.log('clicked')
};

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})