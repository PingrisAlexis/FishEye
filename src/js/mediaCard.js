class MediaCard {

    constructor (media) {
        this.media = media;
    }

    getMediaCard () {
        return `    
				    <figure class="photographer-pictures-container">
                        <img class="photographer-pictures-img" onclick="openModal();currentSlide(slideIndex)" data-id="${this.media.id}" src="../../assets/media/photographers-pictures/${this.media.photographerId}/${this.media.image}" alt="Media: ${this.media.title}."/>
                        <figcaption>
                            <h3 class="photographer-pictures-title">${this.media.title}</h3>
                            <div class="photographer-pictures-likes-container">
                                  <span class="photographer-pictures-likes-amount">${this.media.likes}</span>
                                  <i data-id="${this.media.id}" class="far fa-heart like-btn"></i>
                           </div>
                        </figcaption>
                    </figure>
              `
    }
    getMediaLightbox() {
        return `    
                     <div class="lightbox-slides">
                       <img  class="lightbox-img" onclick="openModal(${this.media.id})" src="../../assets/media/photographers-pictures/${this.media.photographerId}/${this.media.image}" alt="Photograpie ."/>
                     </div>
              `
    }
}