document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let currentInvaderIdx = 220;

    // Create divs representing squares in the grid
    for (let i = 0; i < 225; i++) {
        const square = document.createElement('div');
        grid.append(square);
    }

    // select squares
    const squares = Array.from(document.querySelectorAll('.grid div'));

    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    ];

    function draw() {
        for (let i = 0; i < alienInvaders.length; i++) {
            squares[alienInvaders[i]].classList.add('invader');
        }
    }

    draw();

    squares[currentInvaderIdx].classList.add('shooter');
    
})