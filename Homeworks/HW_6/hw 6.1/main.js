//#bolvdlhP

//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:

//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//Приклад моделі об'єкту карти:

// {
//cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//value: '', // '6'-'10', 'ace','jack','queen','king'
//color:'', // 'red','black'
// }

const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7','8','9', '10', 'jack', 'queen', 'king', 'ace'];

let deck = [];
for (let i = 0; i < cardSuits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        let suit = cardSuits[i];
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';

        deck.push({
            cardSuit: suit,
            value: values[j],
            color: color,
        });
    }
}

console.log(deck);

//піковий туз
let aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);

//всі шістки
let allSixes = deck.filter(card => card.value === '6');
console.log(allSixes);

//всі червоні карти
let redCards = deck.filter(card => card.color === 'red');
console.log(redCards);

//всі буби
let allDiamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(allDiamonds);

//всі трефи від 9 та більше
let clubsFromNine = deck.filter(card => {
    if (card.cardSuit !== 'clubs') {
        return false;
    }
    let highValues = ['9', '10', 'jack', 'queen', 'king', 'ace'];
    return highValues.includes(card.value);
});
console.log('Трефи від 9:', clubsFromNine);



//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт

// Приклад моделі кінцевого об'єкту

// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardsBySuit = deck.reduce((result, card) => {
    if (card.cardSuit === 'spade') {
        result.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        result.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        result.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        result.clubs.push(card);
    }
    return result;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
});

console.log(cardsBySuit);