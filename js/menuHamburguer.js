const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

navLink.forEach(link => {
    link.addEventListener("click", e => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});