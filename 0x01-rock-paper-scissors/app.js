const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result')
const possibleChoices = docuemnt.querySelectoryAll('button')
let userChoice

possibleChoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
}))