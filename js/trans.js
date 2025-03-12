document.addEventListener("DOMContentLoaded", function () {
    barba.init({
        transitions: [
            {
                name: "simple-slide",
                leave(data) {
                    return new Promise((resolve) => {
                        const overlay = document.querySelector(".transition-overlay");

                        // Add 'is-active' class to trigger the animation
                        overlay.classList.add("is-active");

                        // After the animation is complete, resolve and move to the next page
                        setTimeout(() => {
                        
                            resolve(); // Proceed to the next page after 1s (duration of the transition)
                            // overlay.remove('is-active')
                          
              
                        }, 1500);

                    });
                },

                
            },
        ],
    });
});
