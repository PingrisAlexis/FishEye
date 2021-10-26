const photographersPageCardsContainer = document.querySelector(".photographer-page-header");
const mediasPageContainer = document.getElementById("media-cards-container");
const urlSearch = new URLSearchParams(window.location.search).get("id");
const lightboxModalContent = document.querySelector(".lightbox-modal-content");

fetch('../../fisheye.json')
    .then(resp => resp.json())
    .then(data => {
        let loadPhotographers = data.photographers;
        let loadMedias = data.media;

        loadMedias
            .filter((media) => media.photographerId === parseInt(urlSearch))
            .map((media) => {
                mediasPageContainer.innerHTML += new MediaCard(media).getMediaCard();
                lightboxModalContent.innerHTML += new MediaCard(media).getMediaLightbox();
                // console.log(media)
        })

        const photographer = loadPhotographers.find((photographer) => photographer.id === parseInt(urlSearch));
        // loadPhotographers.find((photographer) => {
            if (photographer) {
                photographersPageCardsContainer.innerHTML = new PhotographerCard(photographer).getPhotographerPageCard();
            }
        // })
    })
    .catch(err => {
        console.log(err);
    })
