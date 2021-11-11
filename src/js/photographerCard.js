
class PhotographerCard {

	constructor (photographer) {
		this.photographer = photographer;
	}

	getPhotographerHomeCard () {
		return`
				<article>
					<a  href="src/pages/photographer-page.html?id=${this.photographer.id}">
						<div role="figure">
							<img class="photographer-portrait" src="assets/media/photographers-portraits/${this.photographer.portrait}" aria-label="${this.photographer.name}">
							<h2>${this.photographer.name}</h2>
						</div>
					</a>
					<p class="photographer-city">${this.photographer.city}, ${this.photographer.country}</p>
					<p class="photographer-tagline">${this.photographer.tagline}</p>
					<p class="photographer-price">${this.photographer.price}€/jour</p>
					<ul>${this.photographer.tags.map(tag =>
						`<li class="photographers-filter"  data-filter="${tag}">#${tag}
							<span class="sr-only">Filtre les artistes selon la catégorie ${tag}</span>
						</li>`).join(' ')}
					</ul> 
				</article>`
	}

	getPhotographerPageCard () {
		return `
				
        		<article class="photographer-details-card">
        			<div>
        			     <img class="photographer-portrait" src="../../assets/media/photographers-portraits/${this.photographer.portrait}" aria-label="${this.photographer.name}" alt="">
					</div>
					<div class="btn-header-photographer-page-contact">
        				<input aria-label="contact button" class="modal-btn" type="submit" name="contact" value="Contactez-moi">
    				</div>
    				<div class="btn-bottom-photographer-page-contact">
        				<input aria-label="contact button" id="btn-bottom-form-submit" class="modal-btn" type="submit" name="contact" value="Contactez-moi">
    				</div>		
					<div role="text" class="photographer-datas">
						<h1 >${this.photographer.name}</h1>
        				<p class="photographer-city">${this.photographer.city}, ${this.photographer.country}</p>
						<p class="photographer-tagline">${this.photographer.tagline}</p>
						<ul>${this.photographer.tags.map(tag =>
							`<li aria-label="tag ${tag}" class="photographers-filter" data-filter="${tag}">#${tag}
								<span class="sr-only">Filtre les artistes selon la catégorie ${tag}</span>
							</li>`).join(' ')}
						</ul> 
					</div>
				</article>
				<aside>
                   <div class="photographer-info">
                      <span aria-label="likes total"  id="photographer-info-total-likes"></span>
                        	<i class="fas fa-heart"></i>
                        <span aria-label="${this.photographer.price} € / jour">${this.photographer.price} € / jour</span>
                   </div>
                </aside>	
			`
	}

}
