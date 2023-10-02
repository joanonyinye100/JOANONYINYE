function slideToHomePage() {
    const container = document.querySelector('.slide-container');
    container.style.transform = 'translateX(-100%)'; 
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 500); 
}



// JavaScript to remove the preloader when the page is fully loaded
window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});





let diff = 0;
const txt = ["Designer", "Developer", "Freelancer"];
const speed = 10;
let interv;

function typeWriter() {
  const dis = document.getElementById("moving-text");
  if (diff < txt[0].length) {
    dis.innerHTML += txt[0].charAt(diff);
    diff++;
  } else {
    clearInterval(interv);
    txt.push(txt.shift());
    diff = 0;
    dis.innerHTML = "";
    startTyping();
  }
}

function startTyping() {
  interv = setInterval(typeWriter, 1000);
}

startTyping();

