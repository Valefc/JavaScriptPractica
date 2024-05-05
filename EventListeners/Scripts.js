//13
document.addEventListener("DOMContentLoaded", function() {
    var mensaje=document.getElementById("mensaje");
    mensaje.parentElement.addEventListener("mouseover", function() {
      mensaje.style.display = "block"; 
    });
    mensaje.parentElement.addEventListener("mouseout", function() {
      mensaje.style.display = "none"; 
    });
  });

//14
document.addEventListener("DOMContentLoaded", function() {
    var elementss = document.getElementById("elements");
    elementss.addEventListener("click", function() {
      elementss.classList.toggle("ampliado"); 
    });
  });

//15
document.addEventListener("DOMContentLoaded", function() {
    var boton=document.getElementById("boton");
    var elemento=document.getElementById("elemento");
    boton.addEventListener("click", function() {
        elemento.classList.toggle("mostrar"); 
    });
  });

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