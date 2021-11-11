//LISTEN TO THE TRAP FOCUS TAB
document.addEventListener("keydown", function(e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
        return;
    }

    if (e.shiftKey) {

        if (document.activeElement === firstFocusableElementLightbox) {
            e.preventDefault();

            lastFocusableElementLightbox.focus();
            console.log("focus lightbox last element")
        }
            else  if (document.activeElement === firstFocusableElementFormContact) {
                lastFocusableElementFormContact.focus();
                e.preventDefault();
                console.log("focus form contact last element")
            }

    } else {
        if (document.activeElement === lastFocusableElementLightbox) {
            e.preventDefault();
            firstFocusableElementLightbox.focus();
            console.log("focus lightbox first element")
        }
            else   if (document.activeElement === lastFocusableElementFormContact ) {
                e.preventDefault();
                firstFocusableElementFormContact.focus();
                console.log("focus form contact  first element")
            }

    }
});
