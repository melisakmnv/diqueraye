
const FLIP_BUTTON = document.getElementById('flip-button')
const FLIP_CARD = document.getElementById('flip-card')
const SAVE_BUTTON = document.getElementById('save-button')



FLIP_BUTTON.addEventListener('click', function () {
    // Toggle the "flipped" class on the card to flip it
    FLIP_CARD.classList.toggle('flipped');
});


SAVE_BUTTON.addEventListener('click', function () {
    alert("Vous pouvez sauvegarder votre partie :)");
})