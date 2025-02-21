// ========================================== //
// ============ ROTATE MINI LOGO ============ //
// ========================================== //

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");

    if (logo) {
        const DURATION = 3000 * 10;

        function spinLogo() {

            logo.classList.add("animate-spin-slow");

            setTimeout(() => {
                logo.classList.remove("animate-spin-slow");
            }, 1000);
        }

        spinLogo();
        setInterval(spinLogo, DURATION);

    } else {
        console.log("Logo element not found!");
    }
});
