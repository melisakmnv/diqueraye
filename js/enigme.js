
const FLIP_BUTTON = document.getElementById('flip-button')
const FLIP_CARD = document.getElementById('flip-card')
const SAVE_BUTTON = document.getElementById('save-button')



FLIP_BUTTON.addEventListener('click', function () {
    // Toggle the "flipped" class on the card to flip it
    FLIP_CARD.classList.toggle('flipped');
});


document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        alert("N'oubliez pas de sauvegarder votre partie avant de");
    }
});
