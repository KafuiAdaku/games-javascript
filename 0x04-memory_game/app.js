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
        img: './images/ice-cream.png'
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
        img: './images/ice-cream.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());  // randomly sort array
const cardsSelected = [];
const cardsSelectedId = [];


const gameGrid = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('card-id', i);
        card.addEventListener('click', flipCard)
        gameGrid.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    console.log('check for match');
    const cards = document.querySelectorAll('#grid img');

    if (cardsSelected[0] === cardsSelected[1]) {
        alert('You found a match!');
        cards[cardsSelectedId[0]].setAttribute('src', './images/white.png');
    }
}

function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute('card-id');
    cardsSelectedId.push(cardId);
    cardsSelected.push(cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsSelected.length === 2) {
        setTimeout(checkMatch, 500);
    }
}