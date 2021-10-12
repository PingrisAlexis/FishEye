const photographersContainer = document.getElementById("photographers-container");

fetch("fisheye.json")
    .then(resp => resp.json())
    .then(data => {
        let loadPhotographers = data.photographers;

        loadPhotographers.map(photographer =>

            photographersContainer.innerHTML +=
                `<article class="photographer-card">
                        <a href="html/photographer-page.html?id=${photographer.id}">
                            <img class="photographer-portrait" src="asset/media/PhotographersPortraits/${photographer.portrait}" alt="Photographer Portrait">
                            <h2>${photographer.name}</h2>
                        </a>
                        <p>${photographer.city}, ${photographer.country}</p>
                        <p>${photographer.tagline}</p>
                        <p>${photographer.price}€/jour</p>
                        <ul >${photographer.tags.map(tag =>
                            `<li class="photographers-filter"  data-filter="${tag}">#${tag}
                                   <span class="sr-only">Filtre les artistes selon la catégorie ${tag}</span>
                            </li>`).join(" ")}
                        </ul> 
                </article>`

        )
    })
    .catch(err => {
        console.log(err);
    });
