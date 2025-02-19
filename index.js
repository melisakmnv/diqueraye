// ========================================== //
// ============ ROTATE MINI LOGO ============ //
// ========================================== //

const DURATION = 5000;

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");

    function spinLogo() {
        logo.classList.add("animate-spin-slow");

        // Stop spinning after 1s to restart cleanly
        setTimeout(() => {
            logo.classList.remove("animate-spin-slow");
        }, 1000);
    }

    // Start spinning immediately
    spinLogo();

    // Repeat the spin every 5 seconds
    setInterval(spinLogo, DURATION);
});

// ========================================== //
// ============== ANIMATE TEXT ============== //
// ========================================== //

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backDelay: 5000,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
