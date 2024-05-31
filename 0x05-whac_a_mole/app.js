const squares = document.querySelectorAll('.squares');
const mole = document.querySelector('.mole');
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randSquare = squares[Math.floor(Math.random() * 9)];
    randSquare.classList.add('mole');
}