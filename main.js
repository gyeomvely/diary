const hamburger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menu');
const icons = document.querySelector('.nav__icons');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})