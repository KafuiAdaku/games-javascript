const userChoiceDisplay = createElement('h2');
const computerChoiceDisplay = createElement('h2');
const resultDisplay = createElement('h2');

let userChoice, computerChoice;

const gameDiv = getElementById('game');
gameDiv.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

choices = ['rock', 'paper', 'scissors'];

/***** Helper Functions *****/
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * choices.length)
    return choices[randomInt]
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
            resultDisplay.innerHTML = "IT'S A DRAW";
            break;
    }
}
/***** *****/

function handleClick(event) {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
    computerChoice = getComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice

    getResult()
}

for (let i = 0; i < choices.length; i++) {
    const button = createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListerner('click', handleClick)
}