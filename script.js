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
