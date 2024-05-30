const cardArray = [
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: './images/alligator.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: './images/alligator.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());  // randomly sort array


const gameGrid = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('card-id', i);
        gameGrid.appendChild(card);
        gameGrid.addEventListener('click', flipCard)
    }
}

createBoard();

function flipCard(event) {
    console.log(cardArray);
    const cardId = this.getAttribute.data-id;
    cardArray[cardId].name;
}