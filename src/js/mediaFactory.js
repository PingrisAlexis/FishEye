
class Image {
    constructor (imageUrl) {
        this.imageUrl = imageUrl
    }

    getElement() {
        return `<img class="img" src="${this.imageUrl}" alt="">`
    }
}

class Video {
    constructor (videoUrl) {
        this.videoUrl = videoUrl
    }

    getElement() {
        return `<video controls>
		            <source src="${this.videoUrl}">
                </video>`
    }
}

class MediaFactory {
    constructor (media) {
        this.media = media
    }

    getDOMElement() {
        if (this.media.endsWith('.mp4')) {
            return new Video(this.media).getElement()
        }
        return new Image(this.media).getElement()
    }
}


const media = [
    'toto.jpg',
    'toto.jpg',
    'toto.mp4',
    'toto.jpg',
]

const completeDom = media.map((m) => {
    return new MediaFactory(m).getDOMElement()
})

document.querySelector('#root').innerHTML = completeDom.join('');

console.log(completeDom);