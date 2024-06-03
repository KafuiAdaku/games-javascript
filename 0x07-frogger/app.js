const timeLeftDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result')
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

let frogCurrentIdx = 76;

function moveFrog(event) {
    switch(event.key) {
        case 'ArrowLeft':
            console.log('move left');
            break;
        case 'ArrowRight':
            console.log('move right');
            break;
        case 'ArrowDown':
            console.log('move down');
            break;
        case 'ArrowUp':
            console.log('move up');
            break;
    }
    squares[frogCurrentIdx].classList.add('frog');
}


document.addEventListener('keyup', moveFrog)