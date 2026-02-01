function openBox() {
    const box = document.getElementById("box");
    const cat = document.getElementById("cat");
    const message = document.getElementById("message");

    box.classList.add("open");
    cat.classList.remove("hidden");

    // kucing intip dulu
    setTimeout(() => {
        cat.classList.add("peek");
    }, 400);

    // lalu lompat
    setTimeout(() => {
        cat.classList.remove("peek");
        cat.classList.add("jump");
    }, 900);

    // teks muncul terakhir
    setTimeout(() => {
        message.classList.remove("hidden");
    }, 1600);
}


function goMenu() {
    window.location.href = "menu.html";
}