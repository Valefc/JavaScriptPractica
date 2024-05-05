//16
let cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];

cards.forEach((card) => {
    card.addEventListener('click', () => {
        flipCard(card);
    });
});

function flipCard(card) {
    card.classList.add('flipped');
    flippedCards.push(card);
    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    let card1 = flippedCards[0];
    let card2 = flippedCards[1];
    if (card1.id === card2.id) {
        matchedCards.push(card1);
        matchedCards.push(card2);
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}