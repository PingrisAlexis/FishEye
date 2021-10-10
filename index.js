let photographersContainer = document.getElementById("photographers-container");

fetch("fisheye.json")
    .then((resp) => resp.json())
    .then(function(data) {
        let loadPhotographers = data.photographers;
        loadPhotographers.map(function(photographer) {

            photographersContainer.innerHTML +=
                `<article class="photographer-card">
                        <a href="html/product.html?id=${photographer.id}">
                            <img class="photographer-portrait" src="asset/media/PhotographersPortraits/${photographer.portrait}" alt="Photographer Portrait">
                            <h2>${photographer.name}</h2>
                        </a>
                        <p>${photographer.city}</p>
                        <p>${photographer.tagline}</p>
                        <span>${photographer.tags}</span>                     
                </article>`
        });

    })
    .catch(function(error) {
        console.log(error);
    });
