const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time-left')
const score = document.querySelector('#score');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');

let result = null;
let hitPosition = null;
let timer = null;
let moveMoleId = null;
let countDownId = null;
let gameRunning = false;
let gamePaused = false;

// Keep the pause button invisible until game starts
pauseButton.style.display = 'none';

// Start game button functionality
startButton.addEventListener('click', () => {
    // Reset game
    if (!gameRunning) {
        gameRunning = true;
        startButton.disabled = true;  // Disable start button
        pauseButton.style.display = 'inline-block';  // show pause button

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


// Pause game button functionality
pauseButton.addEventListener('click', () => {
    if (gameRunning && !gamePaused) {
        // Pause the game
        gamePaused = True;
        clearInterval(countDownId);
        clearInterval(moveMoleId);
        squares.forEach(square => {
            square.removeEventListener('mousedown', handleMouseDown);
        });
        pauseButton.innerHTML = 'Resume';
    } else if (gameRunning && gamePaused) {
        // Resume the game
        gamePaused = false;
        squares.forEach(square => {
            square.addEventListener('mousedown', handleMouseDown);
        });
        moveMole();
        countDownId = setInterval(countDown, 1000);
        pauseButton.innerHTML = 'Resume';
    }
});


// Randomly select squares
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let randSquare = squares[Math.floor(Math.random() * squares.length)];
    randSquare.classList.add('mole');
    hitPosition = randSquare.id;
}


// Set interval to repeat random selection of squares
function moveMole() {
    moveMoleId = setInterval(randomSquare, 1000);
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
        startButton.disabled = false;  // Enable start button
        pauseButton.style.display = 'none'; // Hide pause button
        squares.forEach(square => {
            square.classList.remove('mole')
        });

        alert('GAME OVER! Your final score is ' + result);

    }
}
