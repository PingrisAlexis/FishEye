class MediaCard {

    constructor (media) {
        this.media = media;
    }

    getMediaCard () {
        return `    
				    <figure class="photographer-pictures-container">
                        <img  class="hover-shadow-preview"  onclick="openModal();currentSlide(slideIndex)" src="../../assets/media/photographers-pictures/${this.media.photographerId}/${this.media.image}" alt="Media: ${this.media.title}."/>
                        <figcaption>
                            <h3 class="picturesTitles">${this.media.title}</h3>
                            <i class="fas fa-star"></i>
                        </figcaption>
                    </figure>

              `
    }
    getMediaLightbox() {
        return `    
                     <div class="lightbox-slides">
                       <img  class="lightbox-img" onclick="openModal(slideIndex)" src="../../assets/media/photographers-pictures/${this.media.photographerId}/${this.media.image}" alt="Photograpie ."/>
                     </div>
              `
    }

}