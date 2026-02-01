const wishes = [
    "Selamat ulang tahun 🤍 Terima kasih sudah bertahan sejauh ini. Kamu hebat, lebih dari yang kamu kira.",
    "Hari ini bukan sekadar bertambah usia, tapi bukti bahwa kamu terus tumbuh dan kuat.",
    "Semoga langkahmu selalu diberi cahaya, bahkan di hari yang terasa berat.",
    "Tidak apa-apa lelah, asal jangan menyerah. Kamu pantas bahagia.",
    "Teruslah menjadi dirimu sendiri. Dunia butuh caramu tersenyum.",

    // TAMBAHAN
    "Semoga di usia baru ini, hatimu lebih tenang dan mimpimu semakin dekat.",
    "Kalau suatu hari kamu ragu, ingat: kamu sudah sejauh ini bukan tanpa alasan.",
    "Boleh pelan, asal jangan berhenti. Hidup bukan lomba.",
    "Kamu berharga, bahkan di hari ketika kamu merasa biasa saja.",
    "Hari ini rayakan dirimu—karena kamu layak dirayakan 🎉"
];


function openWish(index) {
    const papers = document.querySelectorAll(".paper");
    const paper = papers[index];

    paper.classList.add("out");

    setTimeout(() => {
        document.getElementById("wishText").innerText = wishes[index];
        document.getElementById("wishBox").classList.remove("hidden");
        createConfetti();
        createHearts();
    }, 600);
}

function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "30px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

function createConfetti() {
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement("div");
        confetti.className = "heart";
        confetti.innerText = ["✨","🎉","💐","🌸"][Math.floor(Math.random()*4)];

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.bottom = "0px";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

function closeWish() {
    // tutup box ucapan
    document.getElementById("wishBox").classList.add("hidden");

    // kembalikan semua kertas ke dalam botol
    const papers = document.querySelectorAll(".paper");
    papers.forEach(paper => {
        paper.classList.remove("out");
    });
}

function createFloatingBG() {
    setInterval(() => {
        const el = document.createElement("div");
        el.className = "float";
        el.innerText = ["💌","📜","💖","✨","🌸"][Math.floor(Math.random()*5)];

        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = (14 + Math.random() * 14) + "px";
        el.style.animationDuration = (6 + Math.random() * 6) + "s";

        document.body.appendChild(el);

        setTimeout(() => el.remove(), 12000);
    }, 600);
}

/* PANGGIL SEKALI */
createFloatingBG();

