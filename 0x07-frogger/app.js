const timeLeftDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result')
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

const squaresPerRow = 9;

let frogCurrentIdx = 76;

function moveFrog(event) {
    // First remove the frog from current position
    squares[frogCurrentIdx].classList.remove('frog');

    switch(event.key) {
        case 'ArrowLeft':
            if(frogCurrentIdx % squaresPerRow !== 0)
                frogCurrentIdx -= 1
            break;
        case 'ArrowRight':
            if (frogCurrentIdx % squaresPerRow < squaresPerRow - 1)
                    frogCurrentIdx += 1;
            break;
        case 'ArrowDown':
            if (frogCurrentIdx + squaresPerRow < squaresPerRow * squaresPerRow)
                frogCurrentIdx += squaresPerRow;
            break;
        case 'ArrowUp':
            if (frogCurrentIdx >= squaresPerRow)
                frogCurrentIdx -= squaresPerRow;
            break;
    }
    squares[frogCurrentIdx].classList.add('frog');
}


document.addEventListener('keyup', moveFrog)