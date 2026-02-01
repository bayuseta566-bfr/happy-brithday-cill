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
]


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
