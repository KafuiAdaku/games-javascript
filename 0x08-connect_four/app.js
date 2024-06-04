document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const resultDisplay = document.querySelector('#result');
    const currentPlayerDisp = document.querySelector('#current-player')
    let currentPlayer = 1;

    for (let i = 0; i < squares.length - 7; i++) {
        squares[i].onclick = () => {
            alert(`You have clicked square ${i}`);
        }
    }
})