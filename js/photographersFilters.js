
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