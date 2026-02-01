function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "220205") {
        window.location.href = "intro.html";
    } else {
        alert("Password salah 😢 coba lagi ya");
    }
}

function checkPassword() {
    localStorage.setItem("playMusic", "yes");
    window.location.href = "ucapan.html";
}

const countdownEl = document.getElementById("countdown");
const textEl = document.getElementById("text");

let count = 3;

// HITUNG MUNDUR
const countdownInterval = setInterval(() => {
    countdownEl.textContent = count;
    count--;

    if (count < 0) {
        clearInterval(countdownInterval);
        countdownEl.style.display = "none";
        showText();
    }
}, 1000);

// TEKS MUNCUL PER KATA
function showText() {
    const sentence = "Happy Birthday Bocill, selamat bertambah usia ke 21 yawww( •̀ ω •́ )y";
    const words = sentence.split(" ");
    

    let index = 0;

    const wordInterval = setInterval(() => {
        if (index < words.length) {
            const span = document.createElement("span");
            span.className = "word";
            span.textContent = words[index] + " ";
            textEl.appendChild(span);
            index++;
        } else {
            clearInterval(wordInterval);

            // AUTO PINDAH KE MENU
            setTimeout(() => {
                window.location.href = "menu.html"; // 🔧 GANTI MENU UTAMA
            }, 1800);
        }
    }, 500);
}

