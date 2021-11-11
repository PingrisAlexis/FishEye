class ImageMedia {
    constructor (media) {
        this.media  = media;
    }

    getElement() {
        return `                        
               <img tabindex="0" class="lightbox-open" src="../../assets/media/photographers-pictures/${this.media.photographerId}/${this.media.image}" alt="${this.media.alt}."/>
                `
    }
}

class VideoMedia {
    constructor (media) {
        this.media = media;
    }

    getElement() {
        return `<video tabindex="0" title="${this.media.alt}" class="lightbox-open" controls>
		            <source  src="../../assets/media/photographers-pictures/${this.media.photographerId}/${this.media.video}">
                </video>`
    }
}

class MediaFactory {
    constructor (media) {
        this.media = media
    }

    getDOMElement() {
        if (this.media.video) {
            return new VideoMedia(this.media).getElement()
        }
        return new ImageMedia(this.media).getElement()
    }
}
