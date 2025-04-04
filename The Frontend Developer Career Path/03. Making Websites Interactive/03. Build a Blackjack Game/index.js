const Player = {
    name: 'Mahdi',
    chips: 200,
};
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');
playerEl.textContent = Player.name + ': $' + Player.chips;

function startGame() {
    isAlive = true;
    const firstCard = getRandomCard();
    const secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    sumEl.textContent = 'Sum: ' + sum;
    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = 'You\'ve got Blackjack!';
        hasBlackJack = true;
    } else {
        message = 'You\'re out of the game!';
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function getRandomCard() {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }
    if (randomNumber === 1) {
        return 11;
    }
    return randomNumber;
}
