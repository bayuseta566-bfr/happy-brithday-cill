const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        playBtn.innerHTML = "⏸";
    } else {
        song.pause();
        playBtn.innerHTML = "▶";
    }
});
