document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    let currentShooterIdx = 202;
    const width = 15;
    let direction = 1;
    let goingRight = true;

    let moveInvaderTimer;
    let laserMoveId, shooterId, laserIdx;

    // Create divs representing squares in the grid
    for (let i = 0; i < 225; i++) {
        const square = document.createElement('div');
        grid.append(square);
    }

    // select squares
    const squares = Array.from(document.querySelectorAll('.grid div'));

    squares[currentShooterIdx].classList.add('shooter');

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


    function remove() {
        for (let i = 0; i < alienInvaders.length; i++) {
            squares[alienInvaders[i]].classList.remove('invader')
        }
    }

    

    function moveShooter(event) {
        squares[currentShooterIdx].classList.remove('shooter');
        switch(event.key) {
            case 'ArrowLeft':
                if (currentShooterIdx % width !== 0)
                    currentShooterIdx--;
                break;
            case 'ArrowRight':
                if (currentShooterIdx % width < width - 1)
                    currentShooterIdx++;
                break;
        }
        squares[currentShooterIdx].classList.add('shooter');
    }

    document.addEventListener('keydown', moveShooter);

    function moveInvaders() {
        const leftEdge = alienInvaders[0] % width === 0;
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
        remove();

        //code logic for movement
        if(rightEdge && goingRight) {
            for (let i = 0; i < alienInvaders.length; i++) {
                alienInvaders[i] += width + 1;
            }
            direction = -1;
            goingRight = false;
        }
        if (leftEdge && !goingRight) {
            for (let i = 0; i < alienInvaders.length; i++) {
                alienInvaders[i] += width - 1;
            }
            direction = 1;
            goingRight = true;
        }

        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += direction;
        }

        draw();

        // Game over check
        // when ivaders hit the shooter
        if (
            squares[currentShooterIdx].classList.contains('shooter') &&
            squares[currentShooterIdx].classList.contains('invader')
        ) {
            clearInterval(moveInvaderTimer);
            // clearInterval(laserMoveId);
            // clearInterval(shooterId);
            resultDisplay.innerHTML = 'YOU LOSE!';
            setTimeout(() => alert('YOU LOSE!'), 0);
        }
        // when invaders hit the bottom of the grid
        for (let i = 0; i < alienInvaders.length; i++) {
            if (alienInvaders[i] >= squares.length - width) {
                resultDisplay.innerHTML = 'GAME OVER!';
                // clearInterval(moveInvaderTimer);
                // clearInterval(laserMoveId);
                clearInterval(shooterId);
            }
        }
    }

    moveInvaderTimer = setInterval(moveInvaders, 100);

    function shooter() {
        laserIdx = currentShooterIdx;
        laserMoveId = setInterval(moveLaser, 100);

        function moveLaser() {
            squares[laserIdx].classList.remove('laser');
            laserIdx -= width;
            if (laserIdx < 0) {
                clearInterval(laserMoveId);
            } else {
                squares[laserIdx].classList.add('laser');
                if (
                    squares[laserIdx].classList.contains('laser') &&
                    squares[laserIdx].classList.contains('invader')
                ) {
                    squares[laserIdx].classList.remove('invader');
                    squares[laserIdx].classList.remove('laser');
                    const alienRemoved = alienInvaders.indexOf(laserIdx)
                    alienInvaders.splice(alienRemoved, 1);``
                    clearInterval(laserMoveId);
                }
            }
        }
        moveLaser();
    }
    shooterId = setInterval(shooter, 300);
})