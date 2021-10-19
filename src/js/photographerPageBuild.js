const photographersPageCardsContainer = document.getElementById("photographers-page-card-container");
const urlSearch = new URLSearchParams(window.location.search).get("id");
// const mediasPageContainer = document.getElementById("medias-page-card-container");

fetch('../fisheye.json')
    .then(resp => resp.json())
    .then(data => {
        let loadPhotographers = data.photographers;

        loadPhotographers.find((photographer) => {
            if (photographer.id === parseInt(urlSearch)) {
                    photographersPageCardsContainer.innerHTML = new PhotographerCard(photographer).getPhotographerPageCard();
			}
        })
    })
    .catch(err => {
        console.log(err);
    })
