var swiper = new Swiper(".card__content", {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    loop: true,
    speed: 500,
    spaceBetween: 64,

    navigation: {
        nextEl: ".slider-nav__item_next",
        prevEl: ".slider-nav__item_prev",
    },

    breakpoints: {

        1280: {
            slidesPerView: 3,
            spaceBetween:16,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: false,
                scale: 0.85,
            },
        }
    }


});

