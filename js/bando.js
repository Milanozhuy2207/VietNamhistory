const mapLocations = [
    {
        id: "pac-bo", top: 5, left: 58, category: "khang-chien",
        name: "Hang Pác Bó", short: "Nơi Bác Hồ trở về Tổ quốc (1941)",
        image: "assets/images/hang-pac-bo.jpg",
        desc: `<p>Di tích lịch sử tại Cao Bằng. Đây là nơi Chủ tịch Hồ Chí Minh đã sống và làm việc sau 30 năm bôn ba nước ngoài để trực tiếp lãnh đạo cách mạng Việt Nam. Suối Lê-nin và Núi Các Mác là những cái tên do chính Bác đặt tại đây.</p>`
    },
    {
        id: "dien-bien-phu", top: 12, left: 32, category: "khang-chien",
        name: "Điện Biên Phủ", short: "Chiến thắng lừng lẫy năm châu (1954)",
        image: "assets/images/dien-bien-phu.jpg",
        desc: `<p>Nơi diễn ra trận quyết chiến chiến lược vĩ đại nhất trong kháng chiến chống Pháp. Dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp, quân ta đã đập tan tập đoàn cứ điểm mạnh nhất Đông Dương, buộc Pháp ký hiệp định Geneva.</p>`
    },
    {
        id: "ai-chi-lang", top: 10, left: 65, category: "khang-chien",
        name: "Ải Chi Lăng", short: "Mồ chôn Liễu Thăng (1427)",
        image: "assets/images/ai-chi-lang.jpg",
        desc: `<p>Vùng ải hiểm trở bậc nhất xứ Lạng. Nơi đây nghĩa quân Lam Sơn đã phục kích chém rơi đầu chủ tướng giặc Minh là Liễu Thăng, tiêu diệt hàng vạn viện binh, buộc Vương Thông ở Đông Quan phải đầu hàng.</p>`
    },
    {
        id: "song-bach-dang", top: 18, left: 63, category: "khang-chien",
        name: "Sông Bạch Đằng", short: "Mồ chôn ngoại xâm (938, 981, 1288)",
        image: "assets/images/Song-BD.jpg",
        desc: `<p>Dòng sông huyền thoại 3 lần nhuộm máu quân thù. Nổi tiếng nhất là chiến thuật cắm cọc nhọn bọc sắt dưới lòng sông của Ngô Quyền (938) và Trần Hưng Đạo (1288) đập tan quân Nam Hán và quân Nguyên Mông.</p>`
    },
    {
        id: "thang-long", top: 19, left: 55, category: "co-do",
        name: "Thăng Long - Hà Nội", short: "Kinh đô ngàn năm văn hiến",
        image: "assets/images/thanglong.jpg",
        desc: `<p>Kinh đô của Đại Việt từ thời Lý (1010). Nơi gắn liền với những chiến công oanh liệt: 3 lần đánh bại Nguyên Mông, trận Ngọc Hồi - Đống Đa đại phá quân Thanh, và là Thủ đô ngàn năm văn hiến của Việt Nam ngày nay.</p>`
    },
    {
        id: "thanh-nha-ho", top: 28, left: 50, category: "van-hoa",
        name: "Thành Nhà Hồ", short: "Di sản văn hóa thế giới (Thanh Hóa)",
        image: "assets/images/thanh-nhaho.jpg",
        desc: `<p>Tòa thành bằng đá độc nhất vô nhị tại Việt Nam và là di sản thế giới UNESCO. Được Hồ Quý Ly xây dựng vào năm 1397 bằng những khối đá khổng lồ mà không cần chất kết dính, thể hiện kỹ thuật xây dựng bậc thầy thời bấy giờ.</p>`
    },
    {
        id: "hoa-lu", top: 23, left: 54, category: "co-do",
        name: "Cố đô Hoa Lư", short: "Kinh đô nước Đại Cồ Việt",
        image: "assets/images/codo-hoalu.jpg",
        desc: `<p>Nằm tại Ninh Bình, với địa thế núi non hiểm trở "công thủ toàn diện", đây được chọn làm kinh đô của nước ta dưới triều Đinh và Tiền Lê trước khi Lý Công Uẩn dời đô về Thăng Long.</p>`
    },
    {
        id: "phu-xuan", top: 48, left: 68, category: "co-do",
        name: "Phú Xuân - Huế", short: "Cố đô triều Nguyễn",
        image: "assets/images/phuxuan.jpg",
        desc: `<p>Từng là thủ phủ của các chúa Nguyễn ở Đàng Trong, sau đó trở thành Kinh đô của cả nước dưới triều đại Tây Sơn (Quang Trung) và triều đại nhà Nguyễn (1802 - 1945). Nơi đây lưu giữ quần thể di tích Cố đô Huế cực kỳ đồ sộ.</p>`
    },
    {
        id: "hieu-lang", top: 50, left: 67, category: "van-hoa",
        name: "Lăng Minh Mạng", short: "Kiến trúc đỉnh cao triều Nguyễn",
        image: "assets/images/lang-minhmang.jpg",
        desc: `<p>Một trong những lăng tẩm đẹp nhất của triều Nguyễn, thể hiện sự hài hòa tuyệt đối giữa kiến trúc cung đình và thiên nhiên thơ mộng. Lăng được xây dựng ròng rã 3 năm với hàng vạn nhân công.</p>`
    },
    {
        id: "rach-gam", top: 82, left: 48, category: "khang-chien",
        name: "Rạch Gầm - Xoài Mút", short: "Đại phá 5 vạn quân Xiêm (1785)",
        image: "assets/images/rachgam-xoaimut.jpg",
        desc: `<p>Đoạn sông Tiền (Tiền Giang) nơi Nguyễn Huệ lập trận địa mai phục. Chỉ trong một ngày, quân Tây Sơn đã đánh tan tác 5 vạn quân Xiêm xâm lược cùng hàng trăm chiến thuyền, bảo vệ vững chắc miền Nam.</p>`
    },
    {
        id: "dinh-doc-lap", top: 78, left: 55, category: "khang-chien",
        name: "Dinh Độc Lập", short: "Chứng nhân lịch sử (30/04/1975)",
        image: "assets/images/dinh-doclap.jpg",
        desc: `<p>Nơi đánh dấu thời khắc sụp đổ của chính quyền Sài Gòn khi xe tăng quân Giải phóng húc đổ cổng chính vào lúc 11h30 ngày 30/4/1975, kết thúc 30 năm chiến tranh chia cắt, thống nhất đất nước Việt Nam.</p>`
    },
    {
        id: "con-dao", top: 95, left: 55, category: "khang-chien",
        name: "Nhà tù Côn Đảo", short: "Địa ngục trần gian",
        image: "assets/images/nhatu-condao.jpg",
        desc: `<p>Được ví như "địa ngục trần gian" trong suốt 113 năm (1862-1975). Nơi đây thực dân Pháp và đế quốc Mỹ đã giam cầm, tra tấn hàng vạn chiến sĩ cách mạng Việt Nam, tiêu biểu như chị Võ Thị Sáu.</p>`
    }
];

let currentFilter = 'all';

function renderMap() {
    const mapContainer = document.getElementById("map-container");
    const tooltip = document.getElementById("map-tooltip");
    const locationList = document.getElementById("location-list");

    const oldHotspots = mapContainer.querySelectorAll(".hotspot");
    oldHotspots.forEach(h => h.remove());
    locationList.innerHTML = "";

    const filteredData = currentFilter === 'all' 
        ? mapLocations 
        : mapLocations.filter(loc => loc.category === currentFilter);

    filteredData.forEach(loc => {
        const dot = document.createElement("div");
        dot.className = "hotspot reveal-animation";
        dot.style.top = loc.top + "%";
        dot.style.left = loc.left + "%";

        dot.addEventListener("mouseenter", () => {
            tooltip.innerHTML = `<h4>${loc.name}</h4><p>${loc.short}</p>`;
            tooltip.classList.remove("hidden");
            tooltip.style.top = (dot.offsetTop - 15) + "px";
            tooltip.style.left = dot.offsetLeft + "px";
        });
        dot.addEventListener("mouseleave", () => tooltip.classList.add("hidden"));
        dot.addEventListener("click", () => openLocModal(loc.id));

        mapContainer.appendChild(dot);

        const listItem = document.createElement("div");
        listItem.className = "loc-item reveal-animation";
        listItem.innerHTML = `
            <img src="${loc.image}" alt="${loc.name}">
            <div class="loc-item-info">
                <h4>${loc.name}</h4>
                <p>${loc.short}</p>
            </div>
        `;

        listItem.addEventListener("click", () => openLocModal(loc.id));
        locationList.appendChild(listItem);
    });
}

function filterMap(category) {
    currentFilter = category;
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
    renderMap();
}

function openLocModal(id) {
    const data = mapLocations.find(item => item.id === id);
    if (!data) return;

    document.getElementById("loc-img").src = data.image;
    document.getElementById("loc-name").innerText = data.name;
    document.getElementById("loc-short").innerText = data.short;
    document.getElementById("loc-desc").innerHTML = data.desc;

    document.getElementById("location-modal").classList.remove("hidden");
}

function closeLocModal() {
    document.getElementById("location-modal").classList.add("hidden");
}

window.onclick = function (event) {
    const modal = document.getElementById("location-modal");
    if (event.target === modal) {
        closeLocModal();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(renderMap, 500);
});
