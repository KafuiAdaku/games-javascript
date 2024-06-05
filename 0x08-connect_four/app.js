document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const resultDisplay = document.querySelector('#result');
    const currentPlayerDisp = document.querySelector('#current-player')
    let currentPlayer = 1;
    const sqPerRow = 7;


    function checkForWin(sqIdx) {
        const playerNumber = currentPlayer === 1 ? 2 : 1;  // switch to current player
        if (
            checkLeft(sqIdx, playerNumber) ||
            checkRight(sqIdx, playerNumber) ||
            checkDown(sqIdx, playerNumber)
        ) {
            alert(`Player ${playerNumber} WINS!`);
            for (let i = 0; i < squares.length - sqPerRow; i++) {
                squares[i].removeEventListener('click', handleClick)
            }
        }
    }
    

    function checkLeft(sqIdx, player) {
        const playerClass = player === 1 ? 'player-one' : 'player-two';
        let count = 0;
        const limit = sqIdx - 3;
        const lowerBound = Math.floor(sqIdx / sqPerRow) * sqPerRow
        if (sqIdx - 3 >= lowerBound) {
            for (sqIdx; sqIdx >= limit; sqIdx--){
                if(squares[sqIdx].classList.contains(playerClass)) {
                    count++;
                }
            }
            return count === 4 ? true : false;
        }
        return false;
    }

    function checkRight(sqIdx, player) {
        const playerClass = player === 1 ? 'player-one' : 'player-two';
        let count = 0;
        const limit = sqIdx + 3;
        const upperBound = ((Math.floor(sqIdx / sqPerRow) + 1) * sqPerRow) - 1
        if (sqIdx + 3 <= upperBound) {
            for (sqIdx; sqIdx <= limit; sqIdx++){
                if(squares[sqIdx].classList.contains(playerClass)) {
                    count++;
                }
            }
            return count === 4 ? true : false;
        }
        return false;
    }


    function checkDown(sqIdx, player) {
        const playerClass = player === 1 ? 'player-one' : 'player-two';
        let count = 0;
        const limit = sqIdx + (3 * sqPerRow);
        if (limit < squares.length) {
            for (let i = sqIdx; i <= limit; i += sqPerRow) {
                if (squares[i].classList.contains(playerClass)) {
                    count++;
                }
            }
            return count === 4 ? true : false;
        }
        return false;
    }


    function handleClick() {
        // if the square below the current square is taken, you can select on top of it
        if (squares[i + 7].classList.contains('taken')) {
            if (currentPlayer === 1) {
                squares[i].classList.add('player-one');
                squares[i].classList.add('taken');
                currentPlayer = 2;
            } else if (currentPlayer ===2) {
                squares[i].classList.add('player-two');
                squares[i].classList.add('taken');
                currentPlayer = 1;
            } 
            currentPlayerDisp.innerHTML = currentPlayer;
            setTimeout(() => checkForWin(i), 0);
        } else {alert("Can't go here");}
    }


    for (let i = 0; i < squares.length - sqPerRow; i++) {
        squares[i].addEventListener('click', handleClick)
    }
})