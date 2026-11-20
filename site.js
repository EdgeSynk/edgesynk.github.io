// Reveal animation on scroll
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};
document.documentElement.classList.add('reveal-ready');
revealOnScroll();
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('section-menu');
const mobileMenu = window.matchMedia('(max-width: 880px)');

const closeMenu = () => navToggle.setAttribute('aria-expanded', 'false');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
});

navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
});

navToggle.closest('nav').addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        navToggle.focus();
    }
});

mobileMenu.addEventListener('change', closeMenu);
navToggle.hidden = false;

const languageSwitch = document.querySelector('.language-switch');
const languagePage = new URL(languageSwitch.href);
const syncLanguageLink = () => {
    const section = document.getElementById(window.location.hash.slice(1));
    languagePage.hash = section?.matches('section') ? window.location.hash : '';
    languageSwitch.href = languagePage.href;
};

syncLanguageLink();
window.addEventListener('hashchange', syncLanguageLink);
