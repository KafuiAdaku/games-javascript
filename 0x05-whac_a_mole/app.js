const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition = null;

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
    let intervId = null;
    intervId = setInterval(randomSquare, 500);
}

moveMole();