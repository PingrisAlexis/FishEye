window.addEventListener("load", function(){

    const openLightbox = document.querySelectorAll(".lightbox-open");
    openLightbox.forEach((element, index) => {
        element.addEventListener("click",() => {
            openLightboxOnEvent(index);
        });
        element.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                openLightboxOnEvent(index);
            }
        });
    });

    const closeLightboxModal = document.querySelector("#lightbox-close");
    closeLightboxModal.addEventListener("click",closeLightbox);
    closeLightboxModal.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            closeLightbox();
        }
    });

    const prevSlide = document.querySelector("#lightbox-prev-slide");
    prevSlide.addEventListener("click",previousMedia);
    prevSlide.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            previousMedia();
        }
    });

    const nextSlide = document.querySelector("#lightbox-next-slide");
    nextSlide.addEventListener("click", nextMedia);
    nextSlide.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            nextMedia();
        }
    });

})
const rootElement = document.querySelector("html");

function openModal() {
    rootElement.classList.add("stop-scroll");
    ScrollToTopBtn.style.display = "none";

    document.querySelector(".lightbox-modal").style.display = "flex";
    document.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
    document.getElementById("lightbox-modal").style.display = "none";
    rootElement.classList.remove("stop-scroll");
    ScrollToTopBtn.style.display = "flex";


}

function openLightboxOnEvent(index) {
    openModal();
    currentSlide(index +1);
}

function previousMedia() {
    plusSlides(-1);
}

function nextMedia() {
    plusSlides(1);
}

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".lightbox-slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}