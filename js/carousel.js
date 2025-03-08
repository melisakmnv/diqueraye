

// document.addEventListener("DOMContentLoaded", () => {
//     const sliders = document.querySelectorAll(".disque-slider");

//     if (!sliders.length) return;

//     const list = [];

//     sliders.forEach((element) => {
//         const [slider, prevEl, nextEl, pagination] = [
//             element.querySelector(".swiper"),
//             element.querySelector(".slider-nav__item_prev"),
//             element.querySelector(".slider-nav__item_next"),
//         ];

//         console.log("first")

//         list.push(
//             new Swiper(slider, {
//                 effect: "coverflow",
//                 slidesPerView: 3,
//                 spaceBetween: 40,
//                 loop: true,
//                 speed: 800,
//                 observer: true,
//                 watchOverflow: true,
//                 watchSlidesProgress: true,
//                 centeredSlides: true,
//                 initialSlide: 1,
//                 navigation: { nextEl, prevEl, disabledClass: "disabled" },
//                 coverflowEffect: {
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 10,
//                     modifier: 1,
//                     slideShadows: false,
//                     scale: 0.85,
//                 },
//                 breakpoints: {
//                     1280: { 
//                         speed: 800,
//                         spaceBetween: 0, 
//                         slidesPerView: 3,
//                         coverflowEffect: {
//                             rotate: 0,
//                             stretch: 80,
//                             depth: 50,
//                             scale: 0.5,
//                         },

//                      }

//                 }
//             })
//         );
//     });

// });


/*=============== SWIPER JS ===============*/
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