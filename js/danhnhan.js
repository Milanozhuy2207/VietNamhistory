
const figuresData = [
    
    {
        id: "dinh-bo-linh", name: "Đinh Tiên Hoàng", role: "vua",
        image: "assets/images/DinhTienHoang.jpg",
        quote: "Trượng phu chỉ có một chúa, sao lại làm tôi hai họ?",
        desc: `<p>Người có công thống nhất đất nước, dẹp yên loạn 12 sứ quân, lập ra nhà Đinh, đặt tên nước là Đại Cồ Việt.</p>`
    },
    {
        id: "le-hoan", name: "Lê Đại Hành", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Bọn giặc dòm ngó... ta phải đánh, không thể ngồi nhìn.",
        desc: `<p>Thập đạo tướng quân lên ngôi Hoàng đế, trực tiếp cầm quân đánh tan quân Tống xâm lược năm 981, bình định Chiêm Thành.</p>`
    },
    {
        id: "ly-thai-to", name: "Lý Thái Tổ", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Đóng đô ở nơi trung tâm trời đất... là nơi kinh đô bậc nhất của đế vương muôn đời.",
        desc: `<p>Lý Công Uẩn là người sáng lập triều Lý, ban "Chiếu dời đô" (1010) dời đô về Thăng Long, mở ra thế rồng bay cho dân tộc.</p>`
    },
    {
        id: "tran-nhan-tong", name: "Trần Nhân Tông", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Xã tắc hai phen chồn ngựa đá / Non sông nghìn thuở vững âu vàng.",
        desc: `<p>Vị vua anh minh lãnh đạo Đại Việt 2 lần đánh thắng Nguyên Mông. Sau đó ngài nhường ngôi, lên núi Yên Tử tu hành, sáng lập Thiền phái Trúc Lâm.</p>`
    },
    {
        id: "le-loi", name: "Lê Thái Tổ", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Ta dấy binh đánh giặc... vì muốn để ngàn năm về sau biết ta không chịu làm tôi tớ cho bọn giặc.",
        desc: `<p>Lãnh đạo khởi nghĩa Lam Sơn 10 năm gian khổ đánh đuổi quân Minh, lập ra triều Hậu Lê kéo dài hơn 300 năm.</p>`
    },
    {
        id: "le-thanh-tong", name: "Lê Thánh Tông", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Một thước núi, một tấc sông của ta, lẽ nào lại nên vứt bỏ?",
        desc: `<p>Vị vua đưa Đại Việt phát triển rực rỡ nhất lịch sử phong kiến với Quốc triều Hình luật (Luật Hồng Đức) và Bản đồ Hồng Đức.</p>`
    },
    {
        id: "quang-trung", name: "Nguyễn Huệ", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Đánh cho để dài tóc. Đánh cho để đen răng... Đánh cho sử tri Nam quốc anh hùng chi hữu chủ.",
        desc: `<p>Anh hùng áo vải cờ đào, bách chiến bách thắng. Đại phá 5 vạn quân Xiêm và 29 vạn quân Thanh, thống nhất giang sơn.</p>`
    },
    {
        id: "ham-nghi", name: "Vua Hàm Nghi", role: "vua",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Thà chịu cảnh tù đày nơi đất khách, quyết không làm vị vua bù nhìn cho giặc.",
        desc: `<p>Vị vua trẻ tuổi yêu nước, ban "Chiếu Cần Vương" kêu gọi toàn dân kháng chiến chống Pháp. Dù bị lưu đày sang châu Phi vẫn giữ nguyên khí tiết.</p>`
    },

    
    {
        id: "hai-ba-trung", name: "Hai Bà Trưng", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Một xin rửa sạch nước thù / Hai xin đem lại nghiệp xưa họ Hùng...",
        desc: `<p>Hai nữ anh hùng dân tộc đầu tiên cưỡi voi phất cờ khởi nghĩa năm 40, đánh đuổi giặc Hán, lập ra nhà nước độc lập Mê Linh.</p>`
    },
    {
        id: "ba-trieu", name: "Bà Triệu", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ... chứ không chịu khom lưng làm tì thiếp cho người.",
        desc: `<p>Nữ tướng áo vàng, cưỡi voi trắng đánh quân Ngô năm 248. Biểu tượng bất diệt cho ý chí quật cường của phụ nữ Việt Nam.</p>`
    },
    {
        id: "ngo-quyen", name: "Ngô Quyền", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Hoằng Tháo là một đứa trẻ dại... Ta lấy quân mới mỏi mà đánh quân nhọc mệt, tất phá được.",
        desc: `<p>Chỉ huy trận đại thắng sông Bạch Đằng 938, chôn vùi quân Nam Hán, chấm dứt 1000 năm Bắc thuộc.</p>`
    },
    {
        id: "ly-thuong-kiet", name: "Lý Thường Kiệt", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Ngồi yên đợi giặc không bằng đem quân ra trước để chặn thế mạnh của giặc.",
        desc: `<p>Danh tướng nhà Lý, tiên phát chế nhân đánh sang đất Tống, sau đó lập phòng tuyến sông Như Nguyệt bảo vệ thành công Đại Việt.</p>`
    },
    {
        id: "tran-hung-dao", name: "Trần Hưng Đạo", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Bệ hạ chém đầu tôi rồi hãy hàng.",
        desc: `<p>Quốc công Tiết chế, tổng chỉ huy 2 lần đại thắng Nguyên Mông. Tác giả "Hịch Tướng Sĩ", được nhân dân tôn làm Đức Thánh Trần.</p>`
    },
    {
        id: "pham-ngu-lao", name: "Phạm Ngũ Lão", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Múa giáo non sông trải mấy thu / Ba quân khí thế át sao Ngưu.",
        desc: `<p>Danh tướng xuất thân từ nông dân đan sọt, bị giáo đâm xuyên đùi không biết vì mải nghĩ việc nước. Bách chiến bách thắng thời Trần.</p>`
    },
    {
        id: "tran-quoc-toan", name: "Trần Quốc Toản", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Phá cường địch, báo hoàng ân.",
        desc: `<p>Thiếu niên anh hùng, vì không được dự hội nghị Bình Than đã bóp nát quả cam, sau đó tự lập đội quân 600 người đánh giặc lập công lớn.</p>`
    },
    {
        id: "hoang-hoa-tham", name: "Hoàng Hoa Thám", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Chúng tôi gắn bó với phong tục của đất nước chúng tôi. Chúng tôi không bao giờ chịu phục tùng các ông.",
        desc: `<p>Được mệnh danh là "Hùm thiêng Yên Thế". Lãnh đạo cuộc khởi nghĩa nông dân kéo dài gần 30 năm chống thực dân Pháp.</p>`
    },
    {
        id: "vo-nguyen-giap", name: "Võ Nguyên Giáp", role: "tuong",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Thần tốc, thần tốc hơn nữa, táo bạo, táo bạo hơn nữa...",
        desc: `<p>Đại tướng đầu tiên, Tổng tư lệnh Quân đội. Chỉ huy chiến dịch Điện Biên Phủ (1954) lừng lẫy năm châu và Đại thắng mùa Xuân (1975).</p>`
    },

    
    {
        id: "chu-van-an", name: "Chu Văn An", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Ta chưa từng nghe nước nào bề tôi nịnh hót, lấn lướt quyền vua mà có thể giữ được nước.",
        desc: `<p>Người thầy của muôn đời (Vạn thế sư biểu). Khí tiết thanh cao, từng dâng "Thất trảm sớ" xin chém 7 tên nịnh thần.</p>`
    },
    {
        id: "nguyen-trai", name: "Nguyễn Trãi", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Đem đại nghĩa để thắng hung tàn. Lấy chí nhân để thay cường bạo.",
        desc: `<p>Đại công thần nhà Lê, danh nhân văn hóa thế giới. Tác giả "Bình Ngô Đại Cáo", dùng chiến lược "tâm công" đánh giặc Minh.</p>`
    },
    {
        id: "nguyen-binh-khiem", name: "Nguyễn Bỉnh Khiêm", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Ta dại, ta tìm nơi vắng vẻ / Người khôn, người đến chốn lao xao.",
        desc: `<p>Trạng Trình Nguyễn Bỉnh Khiêm, nhà tiên tri, nhà thơ, bậc đại trí thức thời Mạc. Khuyên chúa Nguyễn "Hoành Sơn nhất đái, vạn đại dung thân".</p>`
    },
    {
        id: "le-quy-don", name: "Lê Quý Đôn", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Phi nông bất ổn, phi công bất phú, phi thương bất hoạt, phi trí bất hưng.",
        desc: `<p>Nhà bác học vĩ đại nhất của Việt Nam thời phong kiến. Tác giả của bộ bách khoa toàn thư "Vân đài loại ngữ" và "Phủ biên tạp lục".</p>`
    },
    {
        id: "nguyen-du", name: "Nguyễn Du", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Chữ tâm kia mới bằng ba chữ tài.",
        desc: `<p>Đại thi hào dân tộc, Danh nhân văn hóa thế giới. Tác giả kiệt tác "Truyện Kiều" - đỉnh cao của văn học chữ Nôm Việt Nam.</p>`
    },
    {
        id: "phan-boi-chau", name: "Phan Bội Châu", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Đúc gan sắt để dời non lấp bể / Xối máu nóng rửa vết nhơ nô lệ.",
        desc: `<p>Nhà chí sĩ yêu nước kiệt xuất đầu thế kỷ 20. Lãnh đạo phong trào Đông Du, đưa thanh niên sang Nhật học tập để cứu nước.</p>`
    },
    {
        id: "ho-chi-minh", name: "Hồ Chí Minh", role: "van",
        image: "assets/images/NgoQuyen.jpg",
        quote: "Không có gì quý hơn độc lập, tự do.",
        desc: `<p>Lãnh tụ vĩ đại, Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới. Người sáng lập Đảng Cộng sản và nước Việt Nam Dân chủ Cộng hòa.</p>`
    }
];


function renderRoster(data) {
    const grid = document.getElementById("roster-grid");
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = "<p style='color: #888; grid-column: 1 / -1; text-align: center; font-size: 18px;'>Không tìm thấy nhân vật nào.</p>";
        return;
    }

    data.forEach((figure, index) => {
        const card = document.createElement("div");
        card.className = "roster-card";
        
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => openModal(figure.id);
        card.innerHTML = `
            <img src="${figure.image}" alt="${figure.name}" loading="lazy">
            <div class="roster-name">${figure.name}</div>
        `;
        grid.appendChild(card);
    });
}

function filterFigures() {
    const searchKeyword = document.getElementById("search-box").value.toLowerCase();
    const selectedRole = document.getElementById("role-filter").value;

    const filteredData = figuresData.filter(figure => {
        const matchName = figure.name.toLowerCase().includes(searchKeyword);
        const matchRole = (selectedRole === "all") || (figure.role === selectedRole);
        return matchName && matchRole;
    });
    renderRoster(filteredData);
}

function openModal(id) {
    const figure = figuresData.find(item => item.id === id);
    if (!figure) return;

    let roleText = ""; let roleColor = "";
    if (figure.role === "vua") { roleText = "Hoàng Đế / Lãnh Tụ"; roleColor = "#DAA520"; }
    else if (figure.role === "tuong") { roleText = "Danh Tướng"; roleColor = "#8b0000"; }
    else { roleText = "Danh Nhân Văn Hóa"; roleColor = "#2E8B57"; }

    document.getElementById("modal-img").src = figure.image;
    document.getElementById("modal-name").innerText = figure.name;

    const roleBadge = document.getElementById("modal-role");
    roleBadge.innerText = roleText;
    roleBadge.style.backgroundColor = roleColor;

    document.getElementById("modal-quote").innerText = figure.quote;
    document.getElementById("modal-desc").innerHTML = figure.desc;

    const modal = document.getElementById("info-modal");
    modal.style.display = "flex"; 
    setTimeout(() => {
        modal.classList.remove("hidden"); 
    }, 10);
}

function closeModal() {
    const modal = document.getElementById("info-modal");
    modal.classList.add("hidden");
    setTimeout(() => {
        modal.style.display = "none"; 
    }, 300);
}

window.onclick = function (event) {
    const modal = document.getElementById("info-modal");
    if (event.target === modal) {
        closeModal();
    }
}

renderRoster(figuresData);

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3500);
}