//CONTACT
const contactModal = document.querySelector(".form-container");
const btnCloseContactModal = document.querySelectorAll(".form-close");


//LAUNCH CONTACT MODAL
document.addEventListener('click',function launchContactModal(e){
    if(e.target && e.target.className === "modal-btn"){
        contactModal.style.display = "block";
    }
});

//CLOSE CONTACT MODAL
btnCloseContactModal.forEach((btn) => btn.addEventListener("click", closeContactModal));
function closeContactModal() {
    contactModal.style.display = document.querySelector(".hide");
}
