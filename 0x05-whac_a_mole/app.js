const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition = null;
let timer = 10;
let moveMoleId = null;

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

let countDownId =  setInterval(countDown, 1000);
