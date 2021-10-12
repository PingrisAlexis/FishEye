
const filters = document.querySelectorAll('.photographers-filter');

filters.forEach(filter => {

    filter.onclick = () => {

        let selectedFilter = filter.getAttribute('data-filter');
        let photographerCardsToHide = document.querySelectorAll(`.photographers-filter:not([data-filter='${selectedFilter}'])`);
        let photographerCardsToShow = document.querySelectorAll(`[data-filter='${selectedFilter}']`);


        photographerCardsToHide.forEach(el => {
            el.parentNode.parentNode.classList.add('hide');
            el.parentNode.parentNode.classList.remove('show');
            el.classList.remove("active")
            console.log("222222")

        });

        photographerCardsToShow.forEach(el => {
            if (el.parentNode.parentNode.classList == "active") {

                photographerCardsToHide = [];
                photographerCardsToShow = document.querySelectorAll('[data-filter]');
                console.log("33333")

            }
            el.parentNode.parentNode.classList.remove('hide');
            el.parentNode.parentNode.classList.add('show');
            el.classList.add("active")

        });
    };
});