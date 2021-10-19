const photographersPageCardsContainer = document.querySelector(".photographer-page-header");
const mediasPageContainer = document.getElementById("media-cards-container");
const urlSearch = new URLSearchParams(window.location.search).get("id");
const lightboxModalContent = document.querySelector(".lightbox-modal-content");


fetch('../../fisheye.json')
    .then(resp => resp.json())
    .then(data => {
        let loadPhotographers = data.photographers;
        let loadMedias = data.media;

        loadMedias.map((media) => {
            if (media.photographerId === parseInt(urlSearch)) {
                mediasPageContainer.innerHTML += new MediaCard(media).getMediaCard();
                lightboxModalContent.innerHTML += new MediaCard(media).getMediaLightbox();

            }
        })

        loadPhotographers.find((photographer) => {
            if (photographer.id === parseInt(urlSearch)) {
                    photographersPageCardsContainer.innerHTML = new PhotographerCard(photographer).getPhotographerPageCard();
            }
        })
    })
    .catch(err => {
        console.log(err);
    })
