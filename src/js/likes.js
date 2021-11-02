window.onload = likesPerPhotographer;

let selectedBtnIndex = [];

document.body.addEventListener( 'click',  (btn) => {
    let likesBtn = btn.target;
    let likes = likesBtn.previousElementSibling;
    let selectedBtn = likesBtn.getAttribute("data-id");

    if (likesBtn.className === "far fa-heart like-btn") {

        if(!selectedBtnIndex.includes(selectedBtn)) {
            selectedBtnIndex.push(selectedBtn)
            likesBtn.style.fontWeight = "bold";
            let likesCount = parseInt(likes.innerText);
            likesCount += 1;
            likes.innerText = likesCount;
            likesPerPhotographer();
        }
        else {
            selectedBtnIndex = selectedBtnIndex.filter(item => item !== selectedBtn)
            likesBtn.style.fontWeight = "400";
            let likesCount = parseInt(likes.innerText);
            likesCount -= 1;
            likes.innerText = likesCount;
            likesPerPhotographer();
        }
    }
})

function likesPerPhotographer() {
    const likesPerMedia = document.querySelectorAll(".photographer-pictures-likes-container span");
    const likesPerPhotographer = document.getElementById("photographer-info-total-likes");
    likesPerPhotographer.innerHTML = Array.from(likesPerMedia).reduce((sum, likes) => {
        return sum + Number(likes.textContent);
    }, 0);
}