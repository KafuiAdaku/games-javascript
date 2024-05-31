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
let gameRunning = false;

startButton.addEventListener('click', () => {
    // Reset game
    if (!gameRunning) {
        gameRunning = true;
        result = 0;
        timer = 10;
        score.innerHTML = result;
        time.innerHTML = timer;

        // clear any existing intervals
        clearInterval(countDownId);
        clearInterval(moveMoleId);

        moveMole();
        countDownId = setInterval(countDown, 1000);
    }
})

// Randomly select squares
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let randSquare = squares[Math.floor(Math.random() * squares.length)];
    randSquare.classList.add('mole');
    hitPosition = randSquare.id;
}


// Event handler for when a mole is clicked
function handleMouseDown() {
    if (this.id === hitPosition && gameRunning) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
}


// Add event listener to each square
squares.forEach(square => {
    square.addEventListener('mousedown', handleMouseDown);
})


// Set interval to repeat random selection of squares
function moveMole() {
    moveMoleId = setInterval(randomSquare, 1000);
}


// Countdown functionality
function countDown() {
    timer--;
    time.innerHTML = timer;

    if (timer === 0) {
        clearInterval(countDownId);
        clearInterval(moveMoleId)
        squares.forEach(square => {
            square.removeEventListener('mousedown', handleMouseDown )
        })
        gameRunning = false;
        alert('GAME OVER! Your final score is ' + result);

    }
}
