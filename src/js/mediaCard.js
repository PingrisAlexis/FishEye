class MediaCard {

    constructor (media) {
        this.media = media;
    }

    getMediaCard () {
        return `    
				    <figure class="photographer-pictures-container">
				        ${new MediaFactory(this.media).getDOMElement()} 
                        <figcaption>
                            <h3 class="photographer-pictures-title">${this.media.title}</h3>
                            <div class="photographer-pictures-likes-container">
                                  <span aria-label="likes" class="photographer-pictures-likes-amount">${this.media.likes}</span>
                                  <i class="far fa-heart like-btn" ></i>
                           </div>
                        </figcaption>
                    </figure>
              `
    }
    getMediaLightbox() {
        return `    
                     <div class="lightbox-slides">
                            ${new MediaFactory(this.media).getDOMElement()} 
                            <h4>${this.media.title}</h4>
                     </div>
              `
    }
}