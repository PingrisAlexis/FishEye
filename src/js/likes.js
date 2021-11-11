let allSelectedLikes = [];

function handleLikes() {
    const likes = document.querySelectorAll(".like-btn");

    likes.forEach((like) => {

        like.addEventListener("click", (like) => {
            likeDislike(like);
        });

        like.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {

                likeDislike(like);
            }
        });
    });

    likesPerPhotographer();
}

function likeDislike (like) {

    let selectedLike = like.target || like;
    let selectedLikeIndex = selectedLike.getAttribute("data-id");
    let likes = selectedLike.previousElementSibling;
    let likesCount = parseInt(likes.innerText);

    if (!allSelectedLikes.includes(selectedLikeIndex)) {
        allSelectedLikes.push(selectedLikeIndex)
        selectedLike.style.fontWeight = "bold";
        likesCount += 1;
        likes.innerText = likesCount;
        likesPerPhotographer();
    }
    else {
        allSelectedLikes = allSelectedLikes.filter(item => item !== selectedLikeIndex)
        selectedLike.style.fontWeight = "400";
        likesCount -= 1;
        likes.innerText = likesCount;
        likesPerPhotographer();
    }
}

function likesPerPhotographer() {
    const likesPerMedia = document.querySelectorAll(".photographer-pictures-likes-container span");
    const likesPerPhotographer = document.getElementById("photographer-info-total-likes");
    likesPerPhotographer.innerHTML =
        Array
            .from(likesPerMedia)
            .reduce((sum, likes) => {
                return sum + Number(likes.textContent);
                    }, 0);
}