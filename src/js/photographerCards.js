class PhotographerCard {

	constructor (photographer) {
		this.photographer = photographer;
	}

	getPhotographerHomeCard () {
		return `<article>
					<a href="html/photographer-page.html?id=${this.photographer.id}">
						<img class="photographer-portrait" src="assets/media/PhotographersPortraits/${this.photographer.portrait}" alt="Photographer Portrait">
						<h2>${this.photographer.name}</h2>
					</a>
					<p class="photographer-city">${this.photographer.city}, ${this.photographer.country}</pphotographer-city>
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
		return `<header class="photographer-page-header">
					<nav>
        				<a href="../index.html">
            				<img class="logo" src="../assets/global/logo-fisheye.png" alt="Fisheye Home page">
        				</a>
        			</nav>
        			<article class="photographer-details-card">
        				<div>
        			        <img class="photographer-portrait" src="../assets/media/PhotographersPortraits/${this.photographer.portrait}" alt="Photographer Portrait">
						</div>
						<div class="btn-header-photographer-page-contact">
    						<label for="contact"></label>
    						<input type="submit" name="contact" id="contact" value="Contactez-moi">
						</div>
						<div class="photographer-datas">
							<h1>${this.photographer.name}</h1>
        					<p class="photographer-city">${this.photographer.city}, ${this.photographer.country}</p>
							<p class="photographer-tagline">${this.photographer.tagline}</p>
							<ul>${this.photographer.tags.map(tag =>
								`<li class="photographers-filter"  data-filter="${tag}">#${tag}
									<span class="sr-only">Filtre les artistes selon la catégorie ${tag}</span>
								</li>`).join(' ')}
								<li aria-label="tag all" class="photographers-filter" data-filter="all">#all <span class="sr-only">Filtre qui affiche tout les artistes</span></li>
							</ul> 
						</div>
						</article>
    			</header>
    			<div class="btn-bottom-photographer-page-contact">
    				<label for="contact"></label>
    				<input type="submit" name="contact" id="contact" value="Contactez-moi">
				</div>
			<main></main>
`

	}
}


