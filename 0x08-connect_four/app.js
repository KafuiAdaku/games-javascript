document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const resultDisplay = document.querySelector('#result');
    const currentPlayerDisp = document.querySelector('#current-player')
    let currentPlayer = 1;
    const sqPerRow = 7;

    for (let i = 0; i < squares.length - sqPerRow; i++) {
        squares[i].onclick = () => {
            if (squares[i + 7].classList.contains('taken')) {
                if (currentPlayer === 1) {
                    squares[i].classList.add('player-one');
                    squares[i].classList.add('taken');
                    currentPlayer = 2;
                } else if (currentPlayer ===2) {
                    squares[i].classList.add('player-two');
                    squares[i].classList.add('taken');
                    currentPlayer = 1;
                } else {alert("Can't go here");}
                currentPlayerDisp.innerHTML = currentPlayer;
            } 
        }
    }
})