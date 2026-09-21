// =========================
// PAGE LOADED
// =========================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Ankush Portfolio Loaded Successfully!");
});


// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// =========================
// HIRE ME BUTTON
// =========================

const hireButtons = document.querySelectorAll(".hire-btn, .btn");

hireButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log(
            "Button clicked:",
            button.textContent.trim()
        );

    });

});


// =========================
// CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Ankush Jorvekar. All Rights Reserved.`;

}