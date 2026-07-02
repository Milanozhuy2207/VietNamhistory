
// 1. HIỆU ỨNG CHỮ TỰ GÕ (TYPEWRITER) CHO CÂU SLOGAN
const sloganText = "Nơi dòng chảy thời gian ngưng đọng qua các triều đại.";
const sloganElement = document.querySelector('.slogan');
let charIndex = 0;

function typeSlogan() {
    if (charIndex < sloganText.length) {
        // Thêm từng ký tự vào thẻ slogan
        sloganElement.textContent += sloganText.charAt(charIndex);
        charIndex++;
        // Gọi lại hàm sau một khoảng thời gian ngắn để tạo hiệu ứng gõ
        setTimeout(typeSlogan, 70);
    }
}

// 2. HIỆU ỨNG ĐỐM SÁNG (SPARKS) BAY TRONG PHẦN HERO
const heroSection = document.querySelector('.hero');
if (heroSection) {
    // Tạo 40 đốm sáng ngẫu nhiên
    for (let i = 0; i < 40; i++) {
        let spark = document.createElement('div');
        spark.classList.add('spark');
        // Vị trí ngang ngẫu nhiên
        spark.style.left = Math.random() * 100 + 'vw';
        // Tốc độ và độ trễ ngẫu nhiên để các đốm không bay cùng lúc
        spark.style.animationDuration = (Math.random() * 4 + 3) + 's';
        spark.style.animationDelay = Math.random() * 5 + 's';
        // Kích thước ngẫu nhiên
        spark.style.width = spark.style.height = (Math.random() * 3 + 2) + 'px';
        heroSection.appendChild(spark);
    }
}

// 3. HIỆU ỨNG BỘ ĐẾM SỐ (COUNTER) VÀ HIỆN DẦN KHI CUỘN TRANG
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
    counters.forEach(counter => {
        // Lấy con số mục tiêu từ thuộc tính data-target
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText.replace('+', '');
            const inc = target / 80; // Bước nhảy để hoàn thành trong ~80 lần lặp
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

// Lắng nghe sự kiện cuộn để kích hoạt bộ đếm khi cuộn tới phần Thống kê
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    // Nếu phần tử nằm trong vùng nhìn thấy và chưa bắt đầu đếm
    if (sectionTop < window.innerHeight - 100 && !started) {
        startCounters();
        started = true;
    }
});

// 4. NGÂN HÀNG LỜI DẠY CỦA TIỀN NHÂN (DAILY QUOTE)
const ancientQuotes = [
    { text: "Bệ hạ chém đầu tôi rồi hãy hàng.", author: "Hưng Đạo Đại Vương Trần Hưng Đạo" },
    { text: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông...", author: "Bà Triệu" },
    { text: "Nam quốc sơn hà Nam đế cư / Tiệt nhiên định phận tại thiên thư.", author: "Lý Thường Kiệt" },
    { text: "Đánh cho để dài tóc. Đánh cho để đen răng. Đánh cho sử tri Nam quốc anh hùng chi hữu chủ.", author: "Vua Quang Trung" },
    { text: "Không có gì quý hơn độc lập, tự do.", author: "Chủ tịch Hồ Chí Minh" },
    { text: "Đem đại nghĩa để thắng hung tàn, lấy chí nhân để thay cường bạo.", author: "Nguyễn Trãi" }
];

function initDailyQuote() {
    // Chọn ngẫu nhiên một câu nói từ mảng trên
    const quoteObj = ancientQuotes[Math.floor(Math.random() * ancientQuotes.length)];
    const textElem = document.getElementById('daily-quote-text');
    const authorElem = document.getElementById('daily-quote-author');
    
    if (textElem && authorElem) {
        textElem.innerText = `"${quoteObj.text}"`;
        authorElem.innerText = `— ${quoteObj.author}`;
    }
}

// KHỞI CHẠY CÁC CHỨC NĂNG KHI TRANG TẢI XONG
window.addEventListener('load', () => {
    initDailyQuote();
    if (sloganElement) {
        sloganElement.textContent = ""; 
        // Đợi sau khi preloader kết thúc mới bắt đầu gõ slogan
        setTimeout(typeSlogan, 3500); 
    }
});
