const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const timerText = document.getElementById("timer");
const download = document.getElementById("download");

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => video.srcObject = stream);

function startCapture() {
    const total = parseInt(document.getElementById("count").value);
    const filter = document.getElementById("filter").value;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight * total;

    let taken = 0;
    let y = 0;

    function countdown() {
        let t = 3;
        timerText.textContent = t;

        const interval = setInterval(() => {
            t--;
            timerText.textContent = t;

            if (t === 0) {
                clearInterval(interval);
                capture();
            }
        }, 1000);
    }

    function capture() {
        flashEffect();
        ctx.filter = filter;
        ctx.drawImage(video, 0, y, canvas.width, video.videoHeight);
        y += video.videoHeight;
        taken++;

        if (taken < total) {
            countdown();
        } else {
            timerText.textContent = "✨ Selesai!";
            download.href = canvas.toDataURL("image/png");
            download.classList.remove("hidden");
            flashEffect();

        }
    }

    countdown();
}

function flashEffect() {
    const flash = document.createElement("div");
    flash.style.position = "absolute";
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "white";
    flash.style.opacity = "0.8";
    flash.style.zIndex = "999";
    document.querySelector(".photobooth").appendChild(flash);

    setTimeout(() => flash.remove(), 150);
}
