
// 1. HIỆU ỨNG CHỮ TỰ GÕ (TYPEWRITER)
const sloganText = "Nơi dòng chảy thời gian ngưng đọng qua các triều đại.";
const sloganElement = document.querySelector('.slogan');
let charIndex = 0;

function typeSlogan() {
    if (charIndex < sloganText.length) {
        sloganElement.textContent += sloganText.charAt(charIndex);
        charIndex++;
        setTimeout(typeSlogan, 70);
    }
}

// 2. HIỆU ỨNG ĐỐM SÁNG (SPARKS)
const heroSection = document.querySelector('.hero');
if (heroSection) {
    for (let i = 0; i < 40; i++) {
        let spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.left = Math.random() * 100 + 'vw';
        spark.style.animationDuration = (Math.random() * 4 + 3) + 's';
        spark.style.animationDelay = Math.random() * 5 + 's';
        spark.style.width = spark.style.height = (Math.random() * 3 + 2) + 'px';
        heroSection.appendChild(spark);
    }
}

// 3. HIỆU ỨNG COUNTER VÀ REVEAL SCROLL
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText.replace('+', '');
            const inc = target / 80;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
}

window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100 && !started) {
        startCounters();
        started = true;
    }
});

// 4. NGÂN HÀNG LỜI DẠY TIỀN NHÂN
const ancientQuotes = [
    { text: "Bệ hạ chém đầu tôi rồi hãy hàng.", author: "Hưng Đạo Đại Vương Trần Hưng Đạo" },
    { text: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông...", author: "Bà Triệu" },
    { text: "Nam quốc sơn hà Nam đế cư / Tiệt nhiên định phận tại thiên thư.", author: "Lý Thường Kiệt" },
    { text: "Đánh cho để dài tóc. Đánh cho để đen răng. Đánh cho sử tri Nam quốc anh hùng chi hữu chủ.", author: "Vua Quang Trung" },
    { text: "Không có gì quý hơn độc lập, tự do.", author: "Chủ tịch Hồ Chí Minh" },
    { text: "Đem đại nghĩa để thắng hung tàn, lấy chí nhân để thay cường bạo.", author: "Nguyễn Trãi" }
];

function initDailyQuote() {
    const quoteObj = ancientQuotes[Math.floor(Math.random() * ancientQuotes.length)];
    const textElem = document.getElementById('daily-quote-text');
    const authorElem = document.getElementById('daily-quote-author');
    
    if (textElem && authorElem) {
        textElem.innerText = `"${quoteObj.text}"`;
        authorElem.innerText = `— ${quoteObj.author}`;
    }
}

// Khởi chạy khi trang load xong
window.addEventListener('load', () => {
    initDailyQuote();
    if (sloganElement) {
        sloganElement.textContent = ""; 
        setTimeout(typeSlogan, 3500); 
    }
});
