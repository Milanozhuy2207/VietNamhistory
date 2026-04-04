
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    if (themeToggle) themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        const icon = themeToggle.querySelector('i');
        if (isLight) icon.classList.replace('fa-moon', 'fa-sun');
        else icon.classList.replace('fa-sun', 'fa-moon');
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    const yearCounter = document.getElementById('year-counter');
    const eraText = document.getElementById('era-text');
    const progressBar = document.getElementById('loader-progress');
    let startYear = -2879, endYear = 2026, duration = 2500, startTime = null;

    function updateLoader(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / duration;
        if (progress > 1) progress = 1;
        progressBar.style.width = (progress * 100) + '%';
        let currentYear = Math.floor(startYear + (endYear - startYear) * progress);
        if (currentYear < 0) yearCounter.innerText = Math.abs(currentYear) + ' TCN';
        else yearCounter.innerText = 'Năm ' + currentYear;

        if (progress < 0.25) eraText.innerText = "Thời kỳ Dựng nước & Bắc thuộc...";
        else if (progress < 0.6) eraText.innerText = "Kỷ nguyên Đại Việt rực rỡ...";
        else if (progress < 0.85) eraText.innerText = "Thời kỳ Cận - Hiện đại...";
        else { eraText.innerText = "Hào Khí Sử Việt!"; yearCounter.innerText = "2026"; yearCounter.style.transform = "scale(1.1)"; }

        if (progress < 1) requestAnimationFrame(updateLoader);
        else setTimeout(() => { preloader.classList.add('hidden'); }, 300);
    }
    requestAnimationFrame(updateLoader);
});


const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else if (!document.body.classList.contains('quiz-bg') && window.location.pathname.includes('index')) navbar.classList.remove('scrolled');
});

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-xmark');
    });
}

function revealElements() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        if (reveals[i].getBoundingClientRect().top < window.innerHeight - 50) reveals[i].classList.add("active");
    }
}
window.addEventListener("scroll", revealElements);
setTimeout(revealElements, 2800);