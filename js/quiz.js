

const questionBank = [
    { question: "Vị tướng nào lãnh đạo trận Bạch Đằng năm 938, chấm dứt 1000 năm bắc thuộc?", options: ["Ngô Quyền", "Lý Thường Kiệt", "Trần Hưng Đạo", "Quang Trung"], correctIndex: 0 },
    { question: "Bản tuyên ngôn độc lập đầu tiên 'Nam Quốc Sơn Hà' được gắn liền với vị tướng nào?", options: ["Trần Hưng Đạo", "Lý Thường Kiệt", "Lê Lợi", "Ngô Quyền"], correctIndex: 1 },
    { question: "Kinh đô của nước Âu Lạc dưới thời Thục Phán An Dương Vương nằm ở đâu?", options: ["Thăng Long", "Phú Xuân", "Hoa Lư", "Cổ Loa"], correctIndex: 3 },
    { question: "Vị vua nào đã quyết định dời đô từ Hoa Lư về Thăng Long năm 1010?", options: ["Lý Thái Tổ", "Lý Thánh Tông", "Lê Đại Hành", "Đinh Tiên Hoàng"], correctIndex: 0 },
    { question: "Người anh hùng dân tộc nào đã ba lần đánh bại quân Nguyên Mông xâm lược?", options: ["Trần Quang Khải", "Trần Quốc Toản", "Trần Hưng Đạo", "Trần Nhật Duật"], correctIndex: 2 },
    { question: "Tác giả của 'Bình Ngô Đại Cáo' - bản tuyên ngôn độc lập thứ hai của dân tộc là ai?", options: ["Lê Lợi", "Nguyễn Trãi", "Chu Văn An", "Nguyễn Bỉnh Khiêm"], correctIndex: 1 },
    { question: "Vị nữ vương đầu tiên trong lịch sử Việt Nam là ai?", options: ["Bà Triệu", "Hai Bà Trưng", "Nguyên Phi Ỷ Lan", "Lý Chiêu Hoàng"], correctIndex: 1 },
    { question: "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu' diễn ra vào năm nào?", options: ["1945", "1954", "1975", "1930"], correctIndex: 1 },
    { question: "Ai là người đã đọc bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa?", options: ["Võ Nguyên Giáp", "Hồ Chí Minh", "Trường Chinh", "Phạm Văn Đồng"], correctIndex: 1 },
    { question: "Triều đại nào dài nhất trong lịch sử phong kiến Việt Nam?", options: ["Triều Trần", "Triều Lê", "Triều Lý", "Triều Nguyễn"], correctIndex: 1 },
    { question: "Vị vua nào được mệnh danh là 'Vua đen' (Mai Hắc Đế)?", options: ["Mai Thúc Loan", "Phùng Hưng", "Lý Nam Đế", "Triệu Quang Phục"], correctIndex: 0 },
    { question: "Ai là người chỉ huy chiến dịch Hồ Chí Minh lịch sử năm 1975?", options: ["Văn Tiến Dũng", "Võ Nguyên Giáp", "Lê Trọng Tấn", "Trần Văn Trà"], correctIndex: 1 },
    { question: "Vạn Xuân là quốc hiệu của nước ta dưới thời vị vua nào?", options: ["Lý Nam Đế", "Mai Hắc Đế", "Đinh Tiên Hoàng", "Ngô Quyền"], correctIndex: 0 },
    { question: "Lễ hội Đống Đa (Hà Nội) kỷ niệm chiến thắng của vị vua nào?", options: ["Lê Thái Tổ", "Quang Trung", "Nguyễn Huệ", "Cả B và C đều đúng"], correctIndex: 3 },
    { question: "Nữ tướng nào được nhân dân tôn vinh là 'Nhụy Kiều Tướng quân'?", options: ["Trưng Trắc", "Bà Triệu", "Bùi Thị Xuân", "Nguyễn Thị Định"], correctIndex: 1 },
    { question: "Trạng lường tiêu biểu cho tài năng toán học của Việt Nam thời xưa là ai?", options: ["Lương Thế Vinh", "Nguyễn Bỉnh Khiêm", "Lê Quý Đôn", "Mạc Đĩnh Chi"], correctIndex: 0 },
    { question: "Quốc hiệu đầu tiên của nước ta là gì?", options: ["Đại Cồ Việt", "Đại Việt", "Văn Lang", "Âu Lạc"], correctIndex: 2 },
    { question: "Bộ luật thành văn đầu tiên của nước ta có tên là gì?", options: ["Luật Hồng Đức", "Luật Gia Long", "Hình Thư", "Quốc triều hình luật"], correctIndex: 2 },
    { question: "Thành phố nào trước đây có tên gọi là Sài Gòn?", options: ["Đà Nẵng", "Cần Thơ", "Hải Phòng", "Thành phố Hồ Chí Minh"], correctIndex: 3 },
    { question: "Vị trạng nguyên nào nổi tiếng với tài đối đáp, được mệnh danh là 'Lưỡng quốc Trạng nguyên'?", options: ["Mạc Đĩnh Chi", "Nguyễn Hiền", "Lương Thế Vinh", "Chu Văn An"], correctIndex: 0 },
    { question: "Chiến dịch mang tên vị lãnh tụ kính yêu của chúng ta nhằm giải phóng hoàn toàn miền Nam là gì?", options: ["Chiến dịch Huế - Đà Nẵng", "Chiến dịch Tây Nguyên", "Chiến dịch Hồ Chí Minh", "Chiến dịch Điện Biên Phủ"], correctIndex: 2 },
    { question: "Ai là người thêu lá cờ 'Phá cường địch, báo hoàng ân'?", options: ["Trần Quốc Toản", "Trần Hưng Đạo", "Trần Quang Khải", "Trần Nhật Duật"], correctIndex: 0 },
    { question: "Nhà Trần được thành lập sau khi vị vua nào nhường ngôi?", options: ["Lý Huệ Tông", "Lý Cao Tông", "Lý Chiêu Hoàng", "Lý Anh Tông"], correctIndex: 2 },
    { question: "Tác phẩm 'Nhật ký trong tù' được Bác Hồ viết bằng ngôn ngữ nào?", options: ["Tiếng Việt", "Tiếng Pháp", "Tiếng Hán", "Tiếng Anh"], correctIndex: 2 },
    { question: "Hải Phòng được mệnh danh là thành phố gì?", options: ["Thành phố Cảng", "Thành phố Hoa phượng đỏ", "Cả A và B đều đúng", "Thành phố Sương mù"], correctIndex: 2 }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let highScore = parseInt(localStorage.getItem('historyHighScore')) || 0;
let timer;
let timeLeft;
const TIME_LIMIT = 15;


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initGame() {
    
    questions = shuffle([...questionBank]).slice(0, 15);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("high-score-display").innerText = highScore;
    loadQuestion();
}

function startTimer() {
    timeLeft = TIME_LIMIT;
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.width = '100%'; 
    timerBar.style.backgroundColor = '#4CAF50';

    timer = setInterval(() => {
        timeLeft -= 0.05;
        const percentage = (timeLeft / TIME_LIMIT) * 100;
        timerBar.style.width = percentage + '%';
        
        if (percentage < 30) {
            timerBar.style.backgroundColor = '#f44336';
            timerBar.classList.add('timer-shake'); 
        } else {
            timerBar.classList.remove('timer-shake');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 50);
}

function handleTimeOut() {
    const allBtns = document.getElementById("options-container").children;
    const correctIndex = questions[currentQuestionIndex].correctIndex;
    
    
    allBtns[correctIndex].classList.add("correct-flash");
    for (let btn of allBtns) btn.disabled = true;

    setTimeout(nextQuestion, 1500);
}

function loadQuestion() {
    clearInterval(timer);
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = `<span class="q-number">Câu ${currentQuestionIndex + 1}/15:</span> ${q.question}`;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    
    const originalOptions = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correctIndex }));
    const shuffledOptions = shuffle([...originalOptions]);

    shuffledOptions.forEach((opt) => {
        const btn = document.createElement("button");
        btn.innerText = opt.text; 
        btn.classList.add("option-btn", "reveal-animation");
        btn.onclick = () => checkAnswer(opt.isCorrect, btn);
        optionsContainer.appendChild(btn);
    });

    startTimer();
}

function checkAnswer(isCorrect, selectedBtn) {
    clearInterval(timer);
    const optionsContainer = document.getElementById("options-container");
    const allBtns = optionsContainer.children;
    
    for (let btn of allBtns) btn.disabled = true;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score += 10;
        document.getElementById("score").innerText = score;
        
    } else {
        selectedBtn.classList.add("wrong");
        
        for (let btn of allBtns) {
            
            const q = questions[currentQuestionIndex];
            if (btn.innerText === q.options[q.correctIndex]) {
                btn.classList.add("correct");
            }
        }
    }

    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-body").classList.add("hidden");
    const resultScreen = document.getElementById("result-screen");
    resultScreen.classList.remove("hidden");
    
    document.getElementById("final-score").innerText = score;
    document.getElementById("max-score").innerText = questions.length * 10;

    let feedbackText = "";
    let feedbackColor = "white";

    if (score === questions.length * 10) {
        feedbackText = "🔥 Tuyệt đỉnh! Bạn là một nhà sử học thực thụ!";
        feedbackColor = "#gold";
    } else if (score >= (questions.length * 10) * 0.8) {
        feedbackText = "🌟 Rất tốt! Kiến thức lịch sử của bạn rất đáng nể.";
    } else if (score >= (questions.length * 10) * 0.5) {
        feedbackText = "👍 Khá lắm! Hãy tiếp tục tìm hiểu thêm nhé.";
    } else {
        feedbackText = "📚 Đừng nản chí, hãy đọc thêm 'Hào Khí Sử Việt' để nâng cao kiến thức!";
    }

    
    const oldFeedback = document.getElementById("quiz-feedback");
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement("p");
    feedback.id = "quiz-feedback";
    feedback.innerHTML = feedbackText;
    feedback.style.margin = "15px 0";
    feedback.style.fontWeight = "bold";
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('historyHighScore', highScore);
        const recordMsg = document.createElement("div");
        recordMsg.innerHTML = "🏆 KỶ LỤC MỚI!";
        recordMsg.style.color = "var(--gold)";
        recordMsg.style.fontSize = "24px";
        recordMsg.style.fontWeight = "bold";
        recordMsg.classList.add("glow-effect");
        feedback.appendChild(recordMsg);
    }

    resultScreen.insertBefore(feedback, resultScreen.querySelector('.restart-btn'));
}

function restartQuiz() {
    document.getElementById("quiz-body").classList.remove("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    initGame();
}


window.addEventListener('load', () => {
    setTimeout(initGame, 3000);
});
