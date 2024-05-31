const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time-left')
const score = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

let result = null;
let hitPosition = null;
let timer = null;
let moveMoleId = null;
let countDownId = null;

startButton.addEventListener('click', () => {
    // Reset game
    result = 0;
    timer = 10;
    score.innerHTML = result;
    time.innerHTML = timer;

    // clear any existing intervals
    clearInterval(countDownId);
    clearInterval(moveMoleId);

    moveMole();
    countDownId = setInterval(countDown, 1000);
})

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let randSquare = squares[Math.floor(Math.random() * squares.length)];
    randSquare.classList.add('mole');
    hitPosition = randSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    moveMoleId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    timer--;
    time.innerHTML = timer;

    if (timer === 0) {
        clearInterval(countDownId);
        clearInterval(moveMoleId)
        alert('GAME OVER! Your final score is ' + result);

    }
}

countDownId =  setInterval(countDown, 1000);

