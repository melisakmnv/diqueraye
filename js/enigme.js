
const FLIP_BUTTON = document.getElementById('flip-button')
const FLIP_CARD = document.getElementById('flip-card')
const SAVE_BUTTON = document.getElementById('save-button')
let hasSaved = false; // save flag
 


FLIP_BUTTON.addEventListener('click', function () {
    // Toggle the "flipped" class on the card to flip it
    FLIP_CARD.classList.toggle('flipped');
});


// Once this button is click, there is no alert //
SAVE_BUTTON.addEventListener('click', function () {
   console.log("saved")
    hasSaved = true;
})


// BUILT IN ALERT with no cancellation

// document.addEventListener("visibilitychange", function () {
//     if (document.hidden && !hasSaved) {
//         alert("N'oubliez pas de sauvegarder votre partie avant de partir !");
//     }
// });

window.addEventListener("beforeunload", function (event) {
    if (!hasSaved) {
        event.returnValue = "Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?";
        return "Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?";
    }
});