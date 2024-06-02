const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const gridWidth = 560;
const gridHeight = 300;

const scoreDisplay = document.querySelector('#score');
let score = 0;

const userWidth = 100;
const userHeight = 20;
const userStartPos = [230, 10];
const currentPos = userStartPos;

const ballStartPos = [270, 40]
const ballCurrentPos = ballStartPos;
const ballDiameter = 20;
const ballHeight = ballDiameter;

// Randomly determine the initial ball direction when game starts
let xDirection = Math.floor(Math.random() * 100) % 2 ? 2 : -2;
let yDirection = 2;

let moveBallId = null;


// create block class
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}


const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]  
// draw all blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks()


// Add user block
function drawUser() {
    user.style.left = currentPos[0] + 'px';
    user.style.bottom = currentPos[1] + 'px';
}


const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);


// move user
function moveUser(event) {
    switch(event.key) {
        case 'ArrowLeft':
            if (currentPos[0] > 0) {
                currentPos[0] -= 10;
                drawUser();
            }
            break;
        
        case 'ArrowRight':
            if (currentPos[0] < (gridWidth - blockWidth)) {
                currentPos[0] += 10;
                drawUser();
            }
            
            break;

        /* case 'ArrowUp':
            currentPos[1] += 10;
            drawUser();
            break;
        
        case 'ArrowDown':
            currentPos[1] -= 10;
            drawUser();
            break; */
    }
}

document.addEventListener('keydown', moveUser);


// Create ball
function drawBall() {
    ball.style.left = ballCurrentPos[0] + 'px';
    ball.style.bottom = ballCurrentPos[1] + 'px';
}


const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);


// move ball
function moveBall() {
    ballCurrentPos[0] += xDirection;
    ballCurrentPos[1] += yDirection;
    drawBall();
    checkCollisions();
}

moveBallId = setInterval(moveBall, 30);

// check for collisions
function checkCollisions() {
    // check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        if (
            ((ballCurrentPos[0] >= blocks[i].bottomLeft[0]) &&
            (ballCurrentPos[0] <= blocks[i].bottomRight[0])) &&
            (((ballCurrentPos[1] + ballDiameter) >= blocks[i].bottomLeft[1]) &&
            (ballCurrentPos[1] <= blocks[i].topLeft[1]))
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            changeDirection('y');
            blocks.splice(i, 1);
            score++;
            scoreDisplay.innerHTML = score;

            // check for win
            if (blocks.length === 0) {
                scoreDisplay.innerHTML = 'YOU WIN!';
                clearInterval(moveBallId);
                document.removeEventListener('keydown', moveUser);
            }
        }
    }

    // check for wall collision
    if (
        ballCurrentPos[0] >= (gridWidth - ballDiameter) || ballCurrentPos[0] <= 0
    ) {
        changeDirection('x');
    }
    if (ballCurrentPos[1] >= (gridHeight - ballDiameter)) {
        changeDirection('y');
    }

    // check for user collision
    if (
        (((ballCurrentPos[0] + ballDiameter) >= currentPos[0]) &&
        (ballCurrentPos[0] <= currentPos[0] + userWidth)) &&
        (ballCurrentPos[1] === currentPos[1] + userHeight)
    ) {
        changeDirection('y');
    }
    // check for game over
    if (ballCurrentPos[1] <= 0) {
        clearInterval(moveBallId);
        document.removeEventListener('keydown', moveUser)
    }
}


function changeDirection(axis) {
    if (axis === 'x') {
        xDirection *= -1;
    } else if (axis === 'y') {
        yDirection *= -1;
    }
    return;
   /* if (xDirection === 2 && yDirection === 2) {
    xDirection *= -1;
    return;
   }
   if (xDirection === 2 && yDirection === -2) {
    xDirection *= -1;
    return;
   }
   if (xDirection === -2 && yDirection === 2) {
    xDirection *= -1;
    return;
   }
   if (xDirection === -2 && yDirection === -2) {
    xDirection *= -1;
    return;
   } */
}