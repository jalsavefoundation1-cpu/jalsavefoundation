/* =====================================================
   JAL SEVA FOUNDATION
   WEBSITE JAVASCRIPT
===================================================== */


/* ================================
   PAGE LOADER
================================ */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader =
            document.getElementById("loader");

        loader.classList.add("hide");

    }, 900);

});



/* ================================
   MOBILE MENU
================================ */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener(
    "click",
    function () {

        navigation.classList.toggle(
            "mobile-open"
        );

    }
);



/* ================================
   CLOSE MOBILE MENU
================================ */

document
    .querySelectorAll("#navigation a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "mobile-open"
                );

            }

        );

    });



/* ================================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);



/* ================================
   COUNTER ANIMATION
================================ */

const counters =
    document.querySelectorAll(
        ".counter"
    );


const counterObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;


                    const duration = 1800;


                    const interval =
                        Math.max(
                            10,
                            duration / target
                        );


                    const timer =
                        setInterval(

                            function () {

                                current +=
                                    Math.ceil(
                                        target / 100
                                    );


                                if (
                                    current >=
                                    target
                                ) {

                                    current =
                                        target;

                                    clearInterval(
                                        timer
                                    );

                                }


                                counter.textContent =
                                    current.toLocaleString();

                            },

                            interval

                        );


                    counterObserver.unobserve(
                        counter
                    );

                }
            );

        },

        {
            threshold: .5
        }

    );


counters.forEach(
    function (counter) {

        counterObserver.observe(
            counter
        );

    }
);



/* ================================
   BACK TO TOP
================================ */

const topButton =
    document.getElementById(
        "topButton"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            topButton.classList.add(
                "show"
            );

        } else {

            topButton.classList.remove(
                "show"
            );

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* ================================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        document
            .querySelectorAll(
                "#navigation a"
            )
            .forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) === "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

    }
);



/* ================================
   CONTACT FORM
================================ */

function submitForm(event) {

    event.preventDefault();


    alert(
        "Thank you for contacting Jal Seva Foundation. Please connect your form to a real email service before launching the website."
    );


    event.target.reset();

}



/* ================================
   3D TILT EFFECT
================================ */

const cards =
    document.querySelectorAll(
        ".about-card, .team-card, .problem-item, .life-card"
    );


cards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -3;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    3;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }

        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }

        );

    }
);

/* ==========================================
   JAL SEVA FOUNDATION
   DYNAMIC WATER DROP ANIMATION
========================================== */

const waterEffect = document.querySelector(".water-effect");

if (waterEffect) {

    function createWaterDrop() {

        const drop = document.createElement("span");

        drop.classList.add("water-drop");

        // Random horizontal position
        drop.style.left = Math.random() * 100 + "%";

        // Random size
        const size = Math.random() * 5 + 4;

        drop.style.width = size + "px";
        drop.style.height = size * 2.5 + "px";

        // Random falling speed
        const duration = Math.random() * 4 + 4;

        drop.style.animationDuration = duration + "s";

        // Random delay
        drop.style.animationDelay =
            Math.random() * 2 + "s";

        waterEffect.appendChild(drop);

        // Remove after animation
        setTimeout(() => {
            drop.remove();
        }, (duration + 2) * 1000);
    }


    // Create drops continuously
    setInterval(createWaterDrop, 450);


    /* ==========================================
       FLOATING BUBBLES
    ========================================== */

    function createBubble() {

        const bubble = document.createElement("span");

        bubble.classList.add("water-bubble");

        bubble.style.left =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 12 + 5;

        bubble.style.width = size + "px";
        bubble.style.height = size + "px";

        const duration =
            Math.random() * 8 + 8;

        bubble.style.animationDuration =
            duration + "s";

        waterEffect.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }


    // Create bubbles
    setInterval(createBubble, 1800);

}

/* =========================================
   💧 JAL SEVA FOUNDATION - ANIMATION JS
   ========================================= */

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       💧 1. CREATE WATER DROPS
       ========================================= */

    function createWaterDrops() {
        const container = document.body;

        for (let i = 0; i < 25; i++) {

            const drop = document.createElement("div");
            drop.classList.add("water-drop");

            // Random size
            const size = Math.random() * 18 + 6;

            drop.style.width = size + "px";
            drop.style.height = size * 1.4 + "px";

            // Random position
            drop.style.left = Math.random() * 100 + "%";

            // Random animation speed
            drop.style.animationDuration =
                Math.random() * 5 + 4 + "s";

            // Random delay
            drop.style.animationDelay =
                Math.random() * 5 + "s";

            container.appendChild(drop);
        }
    }

    createWaterDrops();


    /* =========================================
       ⭐ 2. CREATE FALLING STARS
       ========================================= */

    function createStars() {

        for (let i = 0; i < 35; i++) {

            const star = document.createElement("div");

            star.classList.add("falling-star");

            // Random position
            star.style.left = Math.random() * 100 + "%";

            // Random size
            const size = Math.random() * 4 + 1;

            star.style.width = size + "px";
            star.style.height = size + "px";

            // Random speed
            star.style.animationDuration =
                Math.random() * 5 + 3 + "s";

            // Random delay
            star.style.animationDelay =
                Math.random() * 8 + "s";

            document.body.appendChild(star);
        }
    }

    createStars();


    /* =========================================
       🌠 3. SHOOTING STARS
       ========================================= */

    function createShootingStars() {

        setInterval(() => {

            const star = document.createElement("div");

            star.classList.add("shooting-star");

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 50 + "%";

            document.body.appendChild(star);

            // Remove after animation
            setTimeout(() => {
                star.remove();
            }, 2000);

        }, 3000);
    }

    createShootingStars();


    /* =========================================
       🫧 4. CREATE BUBBLES
       ========================================= */

    function createBubbles() {

        for (let i = 0; i < 30; i++) {

            const bubble = document.createElement("div");

            bubble.classList.add("bubble-animation");

            // Random size
            const size = Math.random() * 20 + 5;

            bubble.style.width = size + "px";
            bubble.style.height = size + "px";

            // Random horizontal position
            bubble.style.left =
                Math.random() * 100 + "%";

            // Random animation speed
            bubble.style.animationDuration =
                Math.random() * 8 + 5 + "s";

            // Random delay
            bubble.style.animationDelay =
                Math.random() * 8 + "s";

            document.body.appendChild(bubble);
        }
    }

    createBubbles();


    /* =========================================
       🔄 5. 360° ROTATION
       ========================================= */

    const rotateElements =
        document.querySelectorAll(".rotate-360");

    rotateElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            element.style.transform =
                "rotateY(360deg)";

        });

        element.addEventListener("mouseleave", () => {

            element.style.transform =
                "rotateY(0deg)";

        });

    });


    /* =========================================
       🎴 6. PAGE FLIP
       ========================================= */

    const flipCards =
        document.querySelectorAll(".page-flip");

    flipCards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("flipped");

        });

    });


    /* =========================================
       🖱️ 7. 3D MOUSE TILT
       ========================================= */

    const cards =
        document.querySelectorAll(".card-3d");

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -8;

            const rotateY =
                ((x - centerX) / centerX) * 8;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

        });

    });


    /* =========================================
       💧 8. WATER SPHERE MOUSE MOVEMENT
       ========================================= */

    const sphere =
        document.querySelector(".water-sphere");

    if (sphere) {

        document.addEventListener("mousemove", e => {

            const x =
                (window.innerWidth / 2 - e.clientX) / 30;

            const y =
                (window.innerHeight / 2 - e.clientY) / 30;

            sphere.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* =========================================
       📜 9. REVEAL ELEMENTS ON SCROLL
       ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================================
       🔢 10. ANIMATED COUNTERS
       ========================================= */

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =
            Number(counter.getAttribute("data-target"));

        let current = 0;

        const updateCounter = () => {

            const increment =
                target / 100;

            if (current < target) {

                current += increment;

                counter.innerText =
                    Math.ceil(current);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    /* =========================================
       🌊 11. RANDOM WATER SPLASH
       ========================================= */

    document.addEventListener("click", e => {

        const splash =
            document.createElement("div");

        splash.classList.add("water-drop");

        splash.style.position = "fixed";

        splash.style.left = e.clientX + "px";

        splash.style.top = e.clientY + "px";

        splash.style.width = "12px";

        splash.style.height = "18px";

        splash.style.animationDuration = "1s";

        document.body.appendChild(splash);

        setTimeout(() => {

            splash.remove();

        }, 1000);

    });


    /* =========================================
       ⬆️ 12. SCROLL TO TOP
       ========================================= */

    const scrollTop =
        document.querySelector("#scrollTop");

    if (scrollTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                scrollTop.classList.add("show");

            } else {

                scrollTop.classList.remove("show");

            }

        });


        scrollTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =========================================
       🌊 13. PARALLAX WATER EFFECT
       ========================================= */

    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;

        const waterElements =
            document.querySelectorAll(".water-effect");

        waterElements.forEach(element => {

            element.style.transform =
                `translateY(${scroll * 0.15}px)`;

        });

    });

});