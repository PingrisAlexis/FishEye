class MediaCard {

    constructor (media) {
        this.media = media;
    }

    getMediaCard () {
        return `
				    <figure class="photographer-pictures-container">
				        ${new MediaFactory(this.media).getDOMElement()} 
                        <figcaption>
                            <h2 class="photographer-pictures-title">${this.media.title}</h2>
                            <div class="photographer-pictures-likes-container">
                                  <span aria-label="likes" class="photographer-pictures-likes-amount">${this.media.likes}</span>
                                  <i data-id="${this.media.id}" tabindex="0" class="far fa-heart like-btn" ></i>
                           </div>
                        </figcaption>
                    </figure>
              `
    }

    getMediaLightbox () {
        return `
                     <div class="lightbox-slides">
                            ${new MediaFactory(this.media).getDOMElement()} 
                            <h3>${this.media.title}</h3>
                     </div>
              `
    }
}