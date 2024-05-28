let userChoice
let computerChoice

const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h2')
const gameDiv = document.getElementById('game')

gameDiv.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

choices = ['rock', 'paper', 'scissors']

function genComputerChoice() {
    const rand = Math.floor(Math.random() * choices.length)
    return choices[rand]
}

function getResult() {
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            resultDisplay.innerHTML = 'YOU WIN!';
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            resultDisplay.innerHTML = 'YOU LOSE!';
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            resultDisplay.innerHTML = "IT'S A DRAW!";
            break;
    }

}

const handleClick = (event) =>  {
    userChoice = event.target.id  // event.target.innerHTML also works just fine
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    computerChoice = genComputerChoice()
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
    getResult()
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameDiv.appendChild(button)
}