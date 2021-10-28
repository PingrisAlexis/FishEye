// window.addEventListener("load", function(){

    const openLightbox = document.querySelectorAll(".photographer-pictures-medias");
    openLightbox.forEach((element, index) => {
        element.addEventListener("click",() => {
            openLightboxOnEvent(index);
        });
    });

    const closeLightboxModal = document.querySelector("#lightbox-close");
    closeLightboxModal.addEventListener("click",closeLightbox);

    const prevSlide = document.querySelector("#lightbox-prev-slide");
    prevSlide.addEventListener("click",previousMedia);

    const nextSlide = document.querySelector("#lightbox-next-slide");
    nextSlide.addEventListener("click", nextMedia);
// })

function openModal() {
    document.getElementById("lightbox-modal").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox-modal").style.display = "none";
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