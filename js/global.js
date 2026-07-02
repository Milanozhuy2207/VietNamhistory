
// XỬ LÝ CHẾ ĐỘ SÁNG/TỐI (THEME TOGGLE)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Kiểm tra và áp dụng theme đã lưu trong localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    // Thay đổi icon từ mặt trăng sang mặt trời nếu là theme sáng
    if (themeToggle) themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Lắng nghe sự kiện click vào nút chuyển đổi theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        // Lưu lựa chọn theme vào localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Cập nhật icon tương ứng
        const icon = themeToggle.querySelector('i');
        if (isLight) icon.classList.replace('fa-moon', 'fa-sun');
        else icon.classList.replace('fa-sun', 'fa-moon');
    });
}

// XỬ LÝ MÀN HÌNH CHỜ (PRELOADER)
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    const yearCounter = document.getElementById('year-counter');
    const eraText = document.getElementById('era-text');
    const progressBar = document.getElementById('loader-progress');
    
    // Cấu hình thời gian và các mốc năm sử thi
    let startYear = -2879, // Năm thành lập nước Văn Lang
        endYear = 2026, 
        duration = 2500, // Thời gian chạy (ms)
        startTime = null;

    // Hàm cập nhật trạng thái loading theo thời gian thực
    function updateLoader(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / duration;
        if (progress > 1) progress = 1;
        
        // Cập nhật thanh tiến trình
        progressBar.style.width = (progress * 100) + '%';
        
        // Hiệu ứng đếm năm
        let currentYear = Math.floor(startYear + (endYear - startYear) * progress);
        if (currentYear < 0) yearCounter.innerText = Math.abs(currentYear) + ' TCN';
        else yearCounter.innerText = 'Năm ' + currentYear;

        // Thay đổi mô tả thời kỳ theo tiến độ loading
        if (progress < 0.25) eraText.innerText = "Thời kỳ Dựng nước & Bắc thuộc...";
        else if (progress < 0.6) eraText.innerText = "Kỷ nguyên Đại Việt rực rỡ...";
        else if (progress < 0.85) eraText.innerText = "Thời kỳ Cận - Hiện đại...";
        else { 
            eraText.innerText = "Hào Khí Sử Việt!"; 
            yearCounter.innerText = "2026"; 
            yearCounter.style.transform = "scale(1.1)"; 
        }

        // Tiếp tục hoạt ảnh nếu chưa đạt 100%
        if (progress < 1) requestAnimationFrame(updateLoader);
        else setTimeout(() => { preloader.classList.add('hidden'); }, 300);
    }
    requestAnimationFrame(updateLoader);
});

// XỬ LÝ THANH ĐIỀU HƯỚNG (NAVBAR) VÀ MENU MOBILE
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Đổi màu nền navbar khi cuộn chuột
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else if (!document.body.classList.contains('quiz-bg') && window.location.pathname.includes('index')) navbar.classList.remove('scrolled');
});

// Điều khiển đóng/mở menu mobile (Hamburger)
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        // Chuyển đổi icon giữa 3 gạch và dấu X
        icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-xmark');
    });
}

// XỬ LÝ HIỆU ỨNG HIỆN DẦN KHI CUỘN TRANG (REVEAL ON SCROLL)
function revealElements() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        // Kiểm tra xem phần tử đã vào vùng nhìn thấy chưa
        if (reveals[i].getBoundingClientRect().top < window.innerHeight - 50) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", revealElements);
// Kích hoạt reveal lần đầu sau khi preloader kết thúc
setTimeout(revealElements, 2800);