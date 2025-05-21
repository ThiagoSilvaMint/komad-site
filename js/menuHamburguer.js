const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const blurDiv = document.querySelector("#blur");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
    blurDiv.classList.toggle('blur');
});