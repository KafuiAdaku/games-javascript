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
]

cardArray.sort(() => 0.5 - Math.random())  // randomly sort array


const gameGrid = document.querySelector('#grid')
console.log(gameGrid)