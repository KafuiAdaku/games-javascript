const choicesDisplay = document.querySelector('#choices');
const resultDisplay = document.querySelector('#result');

let userChoice, computerChoice;

const choices = ['rock', 'paper', 'scissors'];

function getResult(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + 
            ' and the computer chose ' + computerChoice + ', YOU WIN!';
            break;
        
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice +
            ' and the computer chose ' + computerChoice + ', YOU LOSE!';
            break;
        
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            resultDisplay.innerHTML = 'You chose ' + userChoice +
            ' and the computer chose ' + computerChoice + ", IT'S A DRAW!";
            break;
    }
}

function handleClick(event) {
    userChoice = event.target.innerHTML;
    randInt = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randInt]
    getResult(userChoice, computerChoice)
};

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})