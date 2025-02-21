

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".disque-slider");

    if (!sliders.length) return;

    const list = [];

    sliders.forEach((element) => {
        const [slider, prevEl, nextEl, pagination] = [
            element.querySelector(".swiper"),
            element.querySelector(".slider-nav__item_prev"),
            element.querySelector(".slider-nav__item_next"),
        ];

        console.log("first")

        list.push(
            new Swiper(slider, {
                effect: "coverflow",
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,
                speed: 800,
                observer: true,
                watchOverflow: true,
                watchSlidesProgress: true,
                centeredSlides: true,
                initialSlide: 1,
                navigation: { nextEl, prevEl, disabledClass: "disabled" },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.95,
                },
                breakpoints: {
                    768: { spaceBetween: 40 }
                }
            })
        );
    });


    // // ========================================== //
    // // ============ ROTATE MINI LOGO ============ //
    // // ========================================== //

    // const DURATION = 3000;

    // const logo = document.getElementById("logo");

    // function spinLogo() {
    //     logo.classList.add("animate-spin-slow");

    //     // Stop spinning after 1s to restart cleanly
    //     setTimeout(() => {
    //         logo.classList.remove("animate-spin-slow");
    //     }, 1000);
    // }

    // // Start spinning immediately
    // spinLogo();

    // // Repeat the spin every 5 seconds
    // setInterval(spinLogo, DURATION);
});
