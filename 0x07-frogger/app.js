const timeLeftDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result')
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

let frogCurrentInd = 76;

function moveFrog(event) {
    switch(event.key) {
        case 'ArrowLeft':
            squares[frogCurrentInd].classList.add('frog');
            break;
        case 'ArrowRight':
            squares[frogCurrentInd].classList.add('frog');
            break;
        case 'ArrowDown':
            squares[frogCurrentInd].classList.add('frog');
            break;
        case 'ArrowUp':
            squares[frogCurrentInd].classList.add('frog');
    }
}


document.addEventListener('keyup', moveFrog)