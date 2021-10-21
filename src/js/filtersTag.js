const filters = document.querySelectorAll('.photographers-filter');

filters.forEach(filter => {

    filter.onclick = () => {

        let selectedFilter = filter.getAttribute("data-filter");
        console.log(selectedFilter)
        let photographerCardsToHide = document.querySelectorAll(`.photographers-filter:not([data-filter='${selectedFilter}'])`);
        let photographerCardsToShow = document.querySelectorAll(`[data-filter='${selectedFilter}']`);

        if (selectedFilter === "all") {
            photographerCardsToHide = [];
            photographerCardsToShow = document.querySelectorAll('[data-filter]');
        }

        photographerCardsToHide.forEach(el => {
            el.parentNode.parentNode.classList.add("hide");
            el.parentNode.parentNode.classList.remove("show");
            // el.classList.remove("active");
        });

        photographerCardsToShow.forEach(el => {
            el.parentNode.parentNode.classList.remove("hide");
            el.parentNode.parentNode.classList.add("show");
            // el.classList.add("active");
        });
    };
});
