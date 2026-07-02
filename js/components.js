// js/components.js
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

const preloaderHTML = `
  <div id="preloader">
    <div class="loader-content">
      <div class="year-counter" id="year-counter">2879 TCN</div>
      <div class="era-text" id="era-text">Kỷ nguyên Hùng Vương...</div>
      <div class="progress-bar-container">
        <div class="progress-bar" id="loader-progress"></div>
      </div>
    </div>
  </div>
`;

const navbarHTML = `
  <nav id="navbar" class="${currentPath !== 'index.html' ? 'scrolled' : ''}">
    <div class="logo">HÀO KHÍ SỬ VIỆT</div>
    <div class="nav-actions">
      <div class="hamburger" id="hamburger">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Trang Chủ</a></li>
      <li><a href="trieudai.html" class="${currentPath === 'trieudai.html' ? 'active' : ''}">Các Triều Đại</a></li>
      <li><a href="danhnhan.html" class="${currentPath === 'danhnhan.html' ? 'active' : ''}">Danh Nhân</a></li>
      <li><a href="bando.html" class="${currentPath === 'bando.html' ? 'active' : ''}">Bản Đồ</a></li>
      <li><a href="quiz.html" class="quiz-link glow-effect ${currentPath === 'quiz.html' ? 'active' : ''}">Thử Thách</a></li>
    </ul>
  </nav>
`;

const footerHTML = `
  <footer>
    <div class="footer-content">
      <h3>Đội thi Tin học trẻ</h3>
      <p>Bản quyền © 2026. Lập trình bởi Ngô Chí Nguyên.</p>
    </div>
  </footer>
`;

const themeToggleHTML = `
  <div class="floating-theme-toggle glow-effect" id="theme-toggle" title="Đổi giao diện">
    <i class="fa-solid fa-moon"></i>
  </div>
`;

const bgMusicHTML = `
  <div class="floating-music-toggle glow-effect" id="music-toggle" title="Phát/Tạm dừng nhạc nền">
    <i class="fa-solid fa-music"></i>
  </div>
  <audio id="bg-audio" loop preload="none">
    <source src="https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-transition-2290.mp3" type="audio/mpeg">
  </audio>
`;

function renderComponents() {
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', navbarHTML);
  body.insertAdjacentHTML('afterbegin', preloaderHTML);
  body.insertAdjacentHTML('beforeend', themeToggleHTML);
  body.insertAdjacentHTML('beforeend', bgMusicHTML);
  body.insertAdjacentHTML('beforeend', footerHTML);
}

renderComponents();

document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-audio');
  let isPlaying = false;

  if (musicBtn && audio) {
    audio.volume = 0.5;
    musicBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
      } else {
        audio.play().catch(e => console.error(e));
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
      isPlaying = !isPlaying;
    });
  }
});

// THÊM PWA MANIFEST & ĐĂNG KÝ SERVICE WORKER
const pwaTags = `
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#4a0404">
  <link rel="apple-touch-icon" href="assets/images/trongdong.jpg">
`;
document.head.insertAdjacentHTML('beforeend', pwaTags);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed: ', err));
  });
}
