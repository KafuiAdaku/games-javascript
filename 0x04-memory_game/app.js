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
const turnsDisplay = document.querySelector('#turns');
let turns = 0;
const matchDisplay = document.querySelector('#match');
let match = 0;
const cardsSelected = [];
const cardsSelectedId = [];
const cardsWon = [];



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

function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute('card-id');
    cardsSelectedId.push(cardId);
    cardsSelected.push(cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].img)
    this.removeEventListener('click', flipCard);  // To avoid selecting an image twice

    if (cardsSelected.length === 2) {
        turns++;
        turnsDisplay.textContent = turns;
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const choiceOneId = cardsSelectedId[0]
    const choiceTwoId = cardsSelectedId[1]

    if (cardsSelected[0] === cardsSelected[1]) {
        match++;
        matchDisplay.textContent = match
        cards[choiceOneId].setAttribute('src', './images/white.png');
        cards[choiceTwoId].setAttribute('src', './images/white.png');
        cardsWon.push(...cardsSelected);
    }
    else {
        cards[choiceOneId].setAttribute('src', './images/blank.png');
        cards[choiceTwoId].setAttribute('src', './images/blank.png');
        cards[choiceOneId].addEventListener('click', flipCard);  //Re-add event listener
        cards[choiceTwoId].addEventListener('click', flipCard);  //Re-add event listener
    }
    cardsSelected.length = 0;
    cardsSelectedId.length = 0;

    if (cardsWon.length === cardArray.length) {
        setTimeout(() => alert(`You did it all in ${turns} turns`), 0);
    }
}
