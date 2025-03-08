var swiper = new Swiper(".card__content", {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 2,
    loop: true,
    speed: 500,
    spaceBetween: 64,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
        scale: 0.85,
    },

    navigation: {
        nextEl: ".slider-nav__item_next",
        prevEl: ".slider-nav__item_prev",
    },
    breakpoints: {
        1980: {
            speed: 800,
            spaceBetween: 0,
            slidesPerView: 3,
          

        }

    }
});