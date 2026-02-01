function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "220205") {
        window.location.href = "intro.html";
    } else {
        alert("Password salah 😢 coba lagi ya");
    }
}

const hints = [
    "💭 Password ini sangat dekat dengan dirimu…",
    "🎂 Berkaitan dengan hari spesialmu",
    "📅 Disusun dari angka, bukan huruf",
    "💗 Coba ingat tanggal lahirmu sendiri 😉"
];

let hintIndex = 0;

document.getElementById("helpBtn").addEventListener("click", () => {
    if (hintIndex < hints.length) {
        document.getElementById("hintText").innerText = hints[hintIndex];
        hintIndex++;
    } else {
        document.getElementById("hintText").innerText =
            "✨ Kamu pasti bisa menebaknya sekarang";
    }
});


function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const img = document.getElementById("preview");
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function goGallery() {
    window.location.href = "intro.html";
}

const memories = [
    {
        title: "Kenangan Masa SMP",
        desc: "Hari itu dirimu masih suka mengedit dan terlalu toxic."
    },
    {
        title: "Kado Sederhana",
        desc: "Senyum sederhana yang terukir hari itu ternyata sulit dilupakan."
    },
    {
        title: "Liburan",
        desc: "ini adalah kenangan pertama yang ia kirim ke diriku saat dirinya pergi liburan ke kota Sambas."
    },
    {
        title: "Masa Kecil",
        desc: "senyum saat ia ingin masuk sekolah terlihat tanpa beban."
    },
    {
        title: "Tarawih 2025",
        desc: "Saat hari pertama malam ramadhan, dengan anggunnya. malam itu menjadi damai."
    },
    {
        title: "Cafe Pak Wan",
        desc: "saat pertama kali bertemu setelah salah paham, mengembalikan kebersamaan yang telah dimakan waktu."
    },
    {
        title: "Lucu aja sihh",
        desc: "diriku di hukum untuk jualan keripik, dan dirimu ku paksa untuk membelinya (ya walau aku yang bayarnyaa wkwk)."
    },
    {
        title: "17 Agustus 2024",
        desc: "foto pertama kita dua sahabat dalam satu frame, aku kating dirimu maba¬_¬."
    },
    {
        title: "indah pantai tak seindah dirimu",
        desc: "gelap malam di bibir pantai tak memudarkan indah cantikmu cill."
    },
    {
        title: "Hari Pelantikan",
        desc: "ku ucapkan selamat mengemban amanah sebagai buk Kabid Media ya bocill kuu(≧∇≦)ﾉ"
    },
    {
        title: "Awww cantik bangettt",
        desc: "Aura-aura keras kepalanya kerasa banget, tapi apapun nasehat dariku pasti dia dengar."
    },
    {
        title: "Tetap tersenyum di sela ego orang-orang",
        desc: "bagaimana dirimu masih bisa begitu baik saat orang-orang selalu iri padamu? ego orang-orang yang menekan mu dan kau masih bisa tersenyum, bukan wajahmu yang cantik tapi juga hatimuu."
    },
    // Tambahkan sampai 12
];

function showInfo(index) {
    document.getElementById("popup-title").innerText = memories[index].title;
    document.getElementById("popup-desc").innerText = memories[index].desc;
    document.getElementById("popup").style.display = "block";
}


function typeWriter() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        sound.currentTime = 0;
        sound.play();
        i++;
        setTimeout(typeWriter, speed);
    }
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


const text = `
                Setahun lalu, langkahmu goyah, namun kau memilih berdiri di atas
                kakimu sendiri—tanpa menggantungkan luka pada siapa pun.
                Kau melewati hari-hari sulit dengan napas panjang dan kepala tegak, belajar bahwa kuat tak selalu berarti keras.
                
                Di perjalanan itu, kau menemukan orang-orang yang kau cinta,
                dan lebih sulit dari itu—kau menaklukkan egomu sendiri, sambil sabar menghadapi ego orang lain tanpa kehilangan dirimu.
                
                Kau tumbuh.
                
                Menjadi Co PDD di kepanitian, belajar bertanggung jawab bukan hanya pada tugas, tapi pada kepercayaan.
                Kau membangun web yang rapi dan bernyawa, menciptakan animasi 3D yang membuat orang berkata: wow —bukan karena kagum
                saja, tapi karena tahu ada kerja keras di baliknya.
                
                Kau menjadi penggerak di pameran, bukan sekadar hadir,
                tapi menghidupkan.Kau memimpin sebagai Kepala Bidang Media di Lembaga Pers Mahasiswa, belajar bahwa memimpin adalah melayani dengan hati.
                
                Dan di antara semua pencapaian itu, kita pernah berpisah arah,
                namun memilih kembali—menjadi sahabat terbaik, tanpa dendam, tanpa sisa ego.
                
                Aku melihatmu hari ini dengan dada penuh bangga.
                
                I so proud of you, Bocill.
                Terima kasih sudah bertahan. Terima kasih sudah tumbuh.
                Dan apa pun yang terjadi nanti, aku sayang dirimu—selalu.`;

let i = 0;
const speed = 45; // makin kecil makin cepat

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

const sound = document.getElementById("typeSound");

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        sound.currentTime = 0;
        sound.play();
        i++;
        setTimeout(typeWriter, speed);
    }
}
function goNext() {
    window.location.href = "kejutan.html";
}
function goNext() {
    if (confirm("Siap menerima kejutan berikutnya? 💕")) {
        window.location.href = "kejutan.html";
    }
}

const targetDate = new Date("February 22, 2026 18:45:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector(".countdown").innerHTML = 
        "<h2>Hadiahnya sudah sampai 💝</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function goHome() {
    window.location.href = "index.html"; // 🔧 GANTI SESUAI MENU UTAMA
}
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = (3 + Math.random() * 5) + "s";

    const colors = ["#ff8fb1", "#ffd6e8", "#ff5c8a", "#ffc2d1"];
    confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 8000);
}

// Confetti terus menerus
setInterval(createConfetti, 300);

window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();
}, { once: true });



