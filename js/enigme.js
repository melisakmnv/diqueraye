
const FLIP_BUTTON = document.getElementById('flip-button')
const FLIP_CARD = document.getElementById('flip-card')



FLIP_BUTTON.addEventListener('click', function () {
    // Toggle the "flipped" class on the card to flip it
    FLIP_CARD.classList.toggle('flipped');
});