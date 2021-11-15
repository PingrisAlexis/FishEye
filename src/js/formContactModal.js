// DOM elements
const BtnSubmitValidForm = document.getElementById("btn-form-submit");
BtnSubmitValidForm.addEventListener('click', validation);

const infoFirstname = document.getElementById("info-firstname");
const infoLastname = document.getElementById("info-lastname");
const infoEmail = document.getElementById("info-email");
const infoMessage = document.getElementById("info-message");

const regexName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//CONTACT
const contactModal = document.querySelector(".form-container");
const btnCloseContactModal = document.querySelectorAll(".form-close");

// //FOCUS ELEMENTS
const focusableElementsFormContact = "button, span, input, textarea";
const firstFocusableElementFormContact = contactModal.querySelectorAll(focusableElementsFormContact)[0];

//LAUNCH CONTACT MODAL
document.addEventListener('click',function launchContactModal(e){
    if(e.target && e.target.className === "modal-btn"){
        contactModal.style.display = "block";
        firstFocusableElementFormContact.focus();
    }
});

//CLOSE CONTACT MODAL
btnCloseContactModal.forEach((elt) => {
    elt.addEventListener("click",() => {
        closeContactModal();
    });
    elt.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            closeContactModal();
        }
    });
});


function closeContactModal() {
    contactModal.style.display = document.querySelector(".hide");
}

//INVALID INPUT
function invalidControl(selector, errorMessage) {
    selector.textContent = errorMessage;
    selector.style.color = "#901C1C";

    return false;
}

//VALID INPUT
function validControl(selector, message) {
    selector.textContent = message;
    selector.style.color = "black";

    return selector.previousElementSibling.value;
}

//CONTROL FIRSTNAME
function controlFirstname() {

    const firstname = document.getElementById("user-firstname");
    const testFirstname = regexName.test(firstname.value);

    if (firstname.value === "") {

        return invalidControl(infoFirstname, "Prénom requis");

    }
    else if (firstname.value.trim().length < 2) {

        return invalidControl(infoFirstname, "Le prénom doit avoir au moins deux caractéres");

    }
    else if (testFirstname === false){

        return invalidControl(infoFirstname, "Format incorrect");

    }
    else {

        return validControl(infoFirstname, "Prénom validé");

    }
}

//CONTROL LASTNAME
function controlLastname() {

    const lastname = document.getElementById("user-lastname");
    const testLastname = regexName.test(lastname.value);

    if (lastname.value === "") {

        return invalidControl(infoLastname, "Nom requis");

    }
    else if (lastname.value.trim().length < 2) {

        return invalidControl(infoLastname, "Le nom doit avoir au moins deux caractéres");

    }
    else if (testLastname === false){

        return invalidControl(infoLastname, "Format incorrect");

    }
    else {

        return validControl(infoLastname, "Nom validé");

    }
}

//CONTROL EMAIL
function controlEmail () {

    const email = document.querySelector("#user-email");
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testEmail = regexEmail.test(email.value);

    if (email.value === "") {

        return invalidControl(infoEmail, "E-mail requis");

    }
    else if (testEmail === false){

        return invalidControl(infoEmail, "Format incorrect");

    }
    else {

        return validControl(infoEmail, "E-mail validé");

    }
}

//CONTROL MESSAGE
function controlMessage() {

    const message = document.getElementById("user-message");
    const testMessage = regexName.test(message.value);

    if (message.value === "") {

        return invalidControl(infoMessage, "Message requis");

    }
    else if (message.value.trim().length < 2) {

        return invalidControl(infoMessage, "Le message doit avoir au moins deux caractéres");

    }
    else if (testMessage === false){

        return invalidControl(infoMessage, "Format incorrect");

    }
    else {

        return validControl(infoMessage, "Message validé");

    }
}

//SUBMIT FORM
function validation(event)  {

    event.preventDefault();

    let validFirstname = controlFirstname();
    let validLastname = controlLastname();
    let validEmail = controlEmail();
    let validMessage = controlMessage();


    if (validFirstname && validLastname && validEmail && validMessage !== false) {

        let formData = new FormData();

        formData.append('firstname', validFirstname);
        formData.append('lastname', validLastname);
        formData.append('email', validEmail);
        formData.append('message', validMessage);


        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }


        resetForm()
    }
}
//RESET FORM
function resetForm() {
    const infoForm = document.getElementById("info-submit-form");
    document.querySelector("form").reset();

    infoFirstname.previousElementSibling.style.border = "none";
    infoFirstname.textContent = "";

    infoLastname.previousElementSibling.style.border = "none";
    infoLastname.textContent = "";

    infoEmail.previousElementSibling.style.border = "none";
    infoEmail.textContent = "";

    infoMessage.previousElementSibling.style.border = "none";
    infoMessage.textContent = "";

    return validControl(infoForm, "Message envoyé!");
}

