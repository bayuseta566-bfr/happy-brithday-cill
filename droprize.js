const prizes = [
    { img: "matcha.jpg", text: "matcha (matcha deppanmuu) (≧∇≦)ﾉ" },
    { img: "burger.jpg", text: "roti isi meongg φ(*￣0￣)" },
    { img: "uang.png", text: "uangg 2222005 miliyarr (* ￣︿￣)" },
    { img: "hadiah utama.png", text: "hati dan kasih sayang bayuu wkwk 🎀" },
    { img: "zong.jpg", text: "ZONK 😆" }
];

prizes.sort(() => Math.random() - 0.5);

const container = document.getElementById("cards");
const resultText = document.getElementById("hasil-hadiah"); // ⬅️ ELEMEN HASIL
let opened = false;

prizes.forEach(prize => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">?</div>
            <div class="card-back">
                <img src="${prize.img}">
            </div>
        </div>
    `;

    card.onclick = () => {
        if (opened) return;
        opened = true;

        card.classList.add("open");

        // ⏳ tunggu animasi flip selesai
        setTimeout(() => {
            resultText.innerText = "🎉 Kamu mendapatkan: " + prize.text;
            resultText.classList.add("show");
        }, 800);

        document.getElementById("finishBtn").classList.remove("hidden");
    };

    container.appendChild(card);
});

function finish() {
    window.location.href = "waktu.html";
}
