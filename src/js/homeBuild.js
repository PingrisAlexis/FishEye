const photographersHomeCardsContainer = document.getElementById("photographers-home-card-container");

fetch('fisheye.json')
	.then(resp => resp.json())
	.then(data => {
		let loadPhotographers = data.photographers;

		photographersHomeCardsContainer.innerHTML = loadPhotographers.map(photographer =>
														new PhotographerCard(photographer).getPhotographerHomeCard()).join('');
	})
	.catch(err => {
		console.log(err);
	});