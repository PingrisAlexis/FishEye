const photographersPageCardsContainer = document.querySelector(".photographer-page-header");
const mediasPageContainer = document.querySelector(".media-cards-container");
const urlSearch = new URLSearchParams(window.location.search).get("id");
const lightboxModalContent = document.querySelector(".lightbox-modal-content");

let mediaArraySort = [];
let sortByContainer = document.querySelector(".order-by-select");
let sortByOptions = sortByContainer.options[sortByContainer.selectedIndex].value



fetch('../../fisheye.json')
    .then(resp => resp.json())
    .then(data => {
        let loadPhotographers = data.photographers;
        let loadMedias = data.media;

// pushHTML =                 mediasPageContainer.innerHTML += new MediaCard(media).getMediaCard();

        sortByContainer.addEventListener("click",(index) => {
            if (sortByOptions === "Popularité")  {
                mediaArraySort = loadMedias.sort((a, b) => { // SORT BY POPULARITY
                    return b.likes - a.likes
                })
                console.log("popu")
            }
            else if (sortByOptions === "Date")  {
                console.log("date")
            }
            else if (sortByOptions === "Titre")  {
                console.log("titre")
            }
        });

        loadMedias
            .filter((media) => media.photographerId === parseInt(urlSearch))
            .map((media) => {






                mediasPageContainer.innerHTML += new MediaCard(media).getMediaCard();
                lightboxModalContent.innerHTML += new MediaCard(media).getMediaLightbox();
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
