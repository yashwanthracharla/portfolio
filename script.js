/* ==============================
SMOOTH SCROLLING
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    }

});


});

/* ==============================
TYPING EFFECT
================================= */

const text = [
    "AI/ML Engineer",
    "Machine Learning Developer",
    "Generative AI Developer",
    "Python Developer"
];

let i = 0;
let j = 0;

let currentText = "";
let isDeleting = false;

function type() {


currentText = text[i];

const typingElement = document.getElementById("typing");

if (!typingElement) {
    return;
}

if (isDeleting) {

    typingElement.textContent =
        currentText.substring(0, j--);

} else {

    typingElement.textContent =
        currentText.substring(0, j++);

}


/* Finished typing */

if (!isDeleting && j === currentText.length) {

    isDeleting = true;

    setTimeout(type, 1200);

    return;
}


/* Finished deleting */

if (isDeleting && j === 0) {

    isDeleting = false;

    i = (i + 1) % text.length;

}


setTimeout(
    type,
    isDeleting ? 50 : 100
);


}

type();

/* ==============================
SCROLL FADE-IN ANIMATION
================================= */

const elements =
document.querySelectorAll(".fade-in");

function revealElements() {


elements.forEach(el => {

    const position =
        el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        el.classList.add("show");

    }

});


}

window.addEventListener(
"scroll",
revealElements
);

/* Reveal elements already visible */

revealElements();

/* ==============================
AI ORBIT MOUSE PARALLAX
================================= */

const aiOrbit = document.querySelector(".ai-orbit");

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (aiOrbit && !prefersReducedMotion) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let animationFrame;

    document.addEventListener("mousemove", function (event) {

        /* Find mouse position relative to the center
           of the browser window */

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        /* Convert mouse position into a small movement */

        mouseX = (event.clientX - centerX) / centerX;
        mouseY = (event.clientY - centerY) / centerY;

    });


    function animateParallax() {

        /* Smoothly move toward the mouse position */

        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        /* Maximum movement is intentionally small */

        const moveX = currentX * 12;
        const moveY = currentY * 12;

        aiOrbit.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

        animationFrame =
            requestAnimationFrame(animateParallax);

    }

    animateParallax();

}
