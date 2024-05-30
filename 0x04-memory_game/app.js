const cardArray = [
    {
        name: 'lion',
        img: './images/lion.png'
    },
    {
        name: 'alligator',
        img: './images/alligator.png'
    },
    {
        name: 'chicken',
        img: './images/chicken.png'
    },
    {
        name: 'horse',
        img: './images/horse.png'
    },
    {
        name: 'frog',
        img: './images/frog.png'
    },
    {
        name: 'elephant',
        img: './images/elephant.png'
    },
    {
        name: 'lion',
        img: './images/lion.png'
    },
    {
        name: 'alligator',
        img: './images/alligator.png'
    },
    {
        name: 'chicken',
        img: './images/chicken.png'
    },
    {
        name: 'horse',
        img: './images/horse.png'
    },
    {
        name: 'frog',
        img: './images/frog.png'
    },
    {
        name: 'elephant',
        img: './images/elephant.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());  // randomly sort array


const gameGrid = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/stone_wall.png');
        card.setAttribute('card-id', i);
        gameGrid.appendChild(card);
    }
}

createBoard();