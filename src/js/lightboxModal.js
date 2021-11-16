//LIGHTBOX
const LightboxModal = document.querySelector(".lightbox-modal");

//FOCUS ELEMENTS
const focusableElementsLightbox = "span, a";
const firstFocusableElementLightbox = LightboxModal.querySelectorAll(focusableElementsLightbox)[0];

const rootElement = document.querySelector("html");

function handleLightbox() {

    //Open Lightbox
    const openLightbox = document.querySelectorAll(".lightbox-open");
    openLightbox.forEach((element, index) => {
        element.addEventListener("click", () => {
            openLightboxOnEvent(index);

        });
        element.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                openLightboxOnEvent(index);
            }
        });
    });

    //Close Lightbox
    const closeLightboxModal = document.querySelector(".lightbox-close");
    closeLightboxModal.addEventListener("click", closeLightbox);
    closeLightboxModal.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            closeLightbox();
        }
    });

    //Previous Lightbox's slide
    const prevSlide = document.querySelector(".lightbox-prev");
    prevSlide.addEventListener("click", previousMedia);
    prevSlide.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            previousMedia();
        }
    });

    //Next Lightbox's slide
    const nextSlide = document.querySelector(".lightbox-next");
    nextSlide.addEventListener("click", nextMedia);
    nextSlide.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                nextMedia();
            }
    });
}

function openLightbox() {

    rootElement.classList.add("stop-scroll");
    ScrollToTopBtn.style.display = "none";
    LightboxModal.style.display = "flex";
}


function closeLightbox() {

    LightboxModal.style.display = "none";
    rootElement.classList.remove("stop-scroll");
    if (document.documentElement.scrollTop > 40) {
        ScrollToTopBtn.style.display = "flex";
    }
}

function openLightboxOnEvent(index) {

    openLightbox();
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

    firstFocusableElementLightbox.focus();

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