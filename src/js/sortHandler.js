function handleSort(value, medias, mediasPageContainer,lightboxModalContent) {
    mediasPageContainer.innerHTML = "";
    lightboxModalContent.innerHTML = "";

    let sortedMedias;

    if (value === "Popularité")  {
        sortedMedias = sortBy(medias, "likes")
    }
    else if (value === "Date")  {
        sortedMedias = sortBy(medias, "date")
    }
    else if (value === "Titre")  {
        sortedMedias = sortBy(medias, "title")
    }

    sortedMedias.forEach((media) => {
        mediasPageContainer.innerHTML += new MediaCard(media).getMediaCard();
        lightboxModalContent.innerHTML += new MediaCard(media).getMediaLightbox();
    })
}

function sortBy(medias, property) {
    return medias.sort( (a, b) => {
        if ( a[property] < b[property] ){
            return -1;
        }
        if ( a[property] > b[property] ){
            return 1;
        }
        return 0;
    })
}
