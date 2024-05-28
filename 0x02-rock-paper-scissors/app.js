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
    if (computerChoice === userChoice) {
        return "It's a draw"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        return 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        return 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        return 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        return 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        return 'You win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        return 'You lose!'
    }

}

const handleClick = (event) =>  {
    const userChoice = event.target.id  // event.target.innerHTML also works just fine
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    const computerChoice = genComputerChoice()
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