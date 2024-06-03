const timeLeftDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result')
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

let frogCurrentIdx = 76;

function moveFrog(event) {
    switch(event.key) {
        case 'ArrowLeft':
            break;
        case 'ArrowRight':
            break;
        case 'ArrowDown':
            break;
        case 'ArrowUp':
    }
    squares[frogCurrentIdx].classList.add('frog');
}


document.addEventListener('keyup', moveFrog)