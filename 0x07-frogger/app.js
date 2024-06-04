const timeLeftDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result')
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');

const logLeft = document.querySelectorAll('.log-left');
const logRight = document.querySelectorAll('.log-right');

const carLeft = document.querySelectorAll('.car-left');
const carRight = document.querySelectorAll('.car-right');

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


// Move logs functionality
function autoMoveLogs() {
    logLeft.forEach(log => moveLogLeft(log));
    logRight.forEach(log => moveLogRight(log));
}

function moveLogLeft(log) {
    switch(true) {
        case log.classList.contains('l1'):
            log.classList.remove('l1');
            log.classList.add('l2');
            break;
        case log.classList.contains('l2'):
            log.classList.remove('l2');
            log.classList.add('l3');
            break;
        case log.classList.contains('l3'):
            log.classList.remove('l3');
            log.classList.add('l4');
            break;
        case log.classList.contains('l4'):
            log.classList.remove('l4');
            log.classList.add('l5');
            break;
        case log.classList.contains('l5'):
            log.classList.remove('l5');
            log.classList.add('l1');
            break;
    }
};

const moveLogId = setInterval(autoMoveLogs, 1000);

function moveLogRight(log) {
    switch(true) {
        case log.classList.contains('l1'):
            log.classList.remove('l1');
            log.classList.add('l5');
            break;
        case log.classList.contains('l2'):
            log.classList.remove('l1');
            log.classList.add('l1');
            break;
        case log.classList.contains('l3'):
            log.classList.remove('l3');
            log.classList.add('l2');
            break;
        case log.classList.contains('l4'):
            log.classList.remove('l4');
            log.classList.add('l3');
            break;
        case log.classList.contains('l5'):
            log.classList.remove('l5');
            log.classList.add('l4');
            break;
    }
};


// Move cars functionality
function autoMoveCars() {
    carLeft.forEach(car => moveCarLeft(car));
    carRight.forEach(car => moveCarRight(car));
};
const moveCarId = setInterval(autoMoveCars, 1000);
function moveCarLeft(car) {
    switch(true) {
        case car.classList.contains('c1'):
            car.classList.remove('c1');
            car.classList.add('c2');
            break;
        case car.classList.contains('c2'):
            car.classList.remove('c2');
            car.classList.add('c3');
            break;
        case car.classList.contains('c3'):
            car.classList.remove('c3');
            car.classList.add('c1');
            break;
    }
};


function moveCarRight(car) {
    switch(true) {
        case car.classList.contains('c1'):
            car.classList.remove('c1');
            car.classList.add('c3');
            break;
        case car.classList.contains('c2'):
            car.classList.remove('c2');
            car.classList.add('c1');
            break;
        case car.classList.contains('c3'):
            car.classList.remove('c3');
            car.classList.add('c2');
            break;
    }
};