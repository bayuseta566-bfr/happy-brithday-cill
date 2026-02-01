function openGift() {
    document.querySelector(".lid").style.transform = "translateY(-80px) rotate(-15deg)";
    document.querySelector(".gift-box").style.display = "none";
    document.querySelector(".puzzle-container").classList.remove("hidden");
}

const puzzle = document.getElementById("puzzle");
const image = "kucing.jpeg"; // 🔧 GANTI JIKA NAMA FILE BERBEDA
let pieces = [];

for (let i = 0; i < 9; i++) {
    const piece = document.createElement("div");
    piece.className = "piece";
    piece.style.backgroundImage = `url(${image})`;
    piece.style.backgroundPosition = `${-(i%3)*100}px ${-Math.floor(i/3)*100}px`;
    piece.draggable = true;
    piece.dataset.index = i;
    pieces.push(piece);
}

pieces.sort(() => Math.random() - 0.5);
pieces.forEach(p => puzzle.appendChild(p));

let dragged;

puzzle.addEventListener("dragstart", e => dragged = e.target);
puzzle.addEventListener("dragover", e => e.preventDefault());

puzzle.addEventListener("drop", e => {
    if (e.target.className === "piece") {
        const temp = dragged.style.backgroundPosition;
        dragged.style.backgroundPosition = e.target.style.backgroundPosition;
        e.target.style.backgroundPosition = temp;
        checkWin();
    }
});

function checkWin() {
    const all = document.querySelectorAll(".piece");
    let correct = true;

    all.forEach((p, i) => {
        if (p.style.backgroundPosition !== `${-(i%3)*100}px ${-Math.floor(i/3)*100}px`) {
            correct = false;
        }
    });

    if (correct) {
        document.getElementById("nextBtn").classList.remove("hidden");
    }
}
function goNext() {
    window.location.href = "droprize.html"; // 🔧 GANTI NAMA HALAMAN
}





