const ScrollToTopBtn = document.querySelector(".scroll-to-top");

function scrollToTop() {
    window.scrollTo(0, 0);
}

window.onscroll = () =>  {
    if (document.documentElement.scrollTop > 40) {
        ScrollToTopBtn.style.display = "flex";
    } else {
        ScrollToTopBtn.style.display = "none";
    }
    ScrollToTopBtn.addEventListener("click", scrollToTop);
};
