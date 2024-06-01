const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const gridWidth = 560;

const userStartPos = [230, 10];
const currentPos = userStartPos;

const ballStartPos = [270, 40]
const ballCurrentPos = ballStartPos


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
    ballCurrentPos[0] += 2;
    ballCurrentPos[1] += 2;
    drawBall();
}