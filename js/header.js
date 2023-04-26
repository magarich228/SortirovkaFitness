document.onscroll = (function () {
    const background = document.querySelector(".header-background");
    
    background.style.opacity = (window.pageYOffset < 300) ? 0 : 1;
});

document.onscroll();