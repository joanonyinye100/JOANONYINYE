function slideToHomePage() {
    const container = document.querySelector('.slide-container');
    container.style.transform = 'translateX(-100%)'; // Slide to the left

    // You can use window.location.href to navigate to the home page after the animation completes
    setTimeout(() => {
        window.location.href = 'index.html'; // Replace 'home.html' with your actual home page URL
    }, 500); // Adjust the delay based on your animation duration
}



// JavaScript to remove the preloader when the page is fully loaded
window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});