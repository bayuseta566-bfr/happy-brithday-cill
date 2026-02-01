function showInfo(index) {
    document.getElementById("popup-title").innerText = memories[index].title;
    document.getElementById("popup-desc").innerText = memories[index].desc;
    document.getElementById("popup").style.display = "block";
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
                Setahun lalu, langkahmu goyah, namun kau memilih berdiri di atas kakimu sendiri—tanpa menggantungkan luka pada siapa pun.
                Kau melewati hari-hari sulit dengan napas panjang dan kepala tegak, belajar bahwa kuat tak selalu berarti keras.
                
                Di perjalanan itu, kau menemukan orang-orang yang kau cinta, dan lebih sulit dari itu—kau menaklukkan egomu sendiri, sambil sabar menghadapi ego orang lain tanpa kehilangan dirimu.
                
                Kau tumbuh. Menjadi Co PDD di kepanitian, belajar bertanggung jawab bukan hanya pada tugas, tapi pada kepercayaan.
                Kau membangun web yang rapi dan bernyawa, menciptakan animasi 3D yang membuat orang berkata: wow —bukan karena kagum saja, tapi karena tahu ada kerja keras di baliknya.
                
                Kau menjadi penggerak di pameran, bukan sekadar hadir, tapi menghidupkan.Kau memimpin sebagai Kepala Bidang Media di Lembaga Pers Mahasiswa, belajar bahwa memimpin adalah melayani dengan hati.
                
                Dan di antara semua pencapaian itu, kita pernah berpisah arah, namun memilih kembali—menjadi sahabat terbaik, tanpa dendam, tanpa sisa ego.
                
                Aku melihatmu hari ini dengan dada penuh bangga. I so proud of you, Bocill.
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

