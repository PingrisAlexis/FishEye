const photographersContainer = document.getElementById("photographers-container");

fetch("fisheye.json")
    .then(resp => resp.json())
    .then(data => {
        let loadPhotographers = data.photographers;

        loadPhotographers.map(photographer =>

            photographersContainer.innerHTML +=
                `<article class="photographer-card projects">
                        <a href="html/photographer-page.html?id=${photographer.id}">
                            <img class="photographer-portrait" src="asset/media/PhotographersPortraits/${photographer.portrait}" alt="Photographer Portrait">
                            <h2>${photographer.name}</h2>
                        </a>
                        <p>${photographer.city}, ${photographer.country}</p>
                        <p>${photographer.tagline}</p>
                        <p>${photographer.price}€/jour</p>
                        <ul >${photographer.tags.map(tag =>
                            `<li class="project"  data-filter="${tag}">#${tag}
                                   <span class="sr-only">Filtre les artistes selon la catégorie ${tag}</span>
                            </li>`).join(" ")}
                        </ul> 
                </article>`

        )
    })
    .catch(err => {
        console.log(err);
    });

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

    filter.addEventListener('click', function() {

        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);


        itemsToHide.forEach(el => {
            el.parentNode.parentNode.classList.add('hide');
            el.parentNode.parentNode.classList.remove('show');
        });

        itemsToShow.forEach(el => {
            el.parentNode.parentNode.classList.remove('hide');
            el.parentNode.parentNode.classList.add('show');
        });

    });
});