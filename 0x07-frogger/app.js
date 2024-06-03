const timeLeftDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result')
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

const logLeft = document.querySelectorAll('.log-left');

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

function autoMoveLogs() {
    logLeft.forEach(log => moveLogLeft(log));
}

function moveLogLeft(log) {
    switch(true) {
        case log.classList.contains('l1'):
            log.classList.remove('l1');
            log.classList.add('l2');
            break;
        case log.classList.contains('l2'):
            log.classList.remove('l3');
            log.classList.add('l3');
            break;
        case log.classList.contains('l3'):
            log.classList.remove('l4');
            log.classList.add('l4');
            break;
        case log.classList.contains('l4'):
            log.classList.remove('l5');
            log.classList.add('l5');
            break;
    }
}

const moveLogId = setInterval(autoMoveLogs, 1000);