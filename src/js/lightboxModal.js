let slideIndex =0;
console.log(slideIndex)
// let selectedMedia = document.getAttribute("data-filter");
// console.log(selectedMedia)

// Open the Modal
function openModal() {
    document.getElementById("lightbox-modal").style.display = "flex";
}

// Close the Modal
function closeModal() {
    document.getElementById("lightbox-modal").style.display = "none";
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("lightbox-slides");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}