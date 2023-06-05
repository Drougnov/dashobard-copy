// Show toggle icon on focus of password input
function lHCgG(event) {
    // get the target of the event
    let element = event.target;

    // Remove the password error prompt
    var unq_oKTLa = document.querySelector(".unq_oKTLa");
    unq_oKTLa.classList.add("dspl_dWotM");

    // find parent div .form-field of the event target
    let formField = element.closest(".form-field");
    if (!formField) {
        console.error("closest form field not found");
        return;
    }

    // find password input within the form field
    let passwordInput = formField.querySelector("input[data-type=password]");
    if (!passwordInput) {
        console.error("password input not found");
        return;
    }

    // if the form field doesn't have the class 'first_focus'
    if (!formField.classList.contains("first_focus")) {
        // add the class 'first_focus'
        formField.classList.add("first_focus");

        // add the class 'password_invisible'
        formField.classList.add("password_invisible");

        // set the type of the password input to 'password'
        passwordInput.type = "password";

        // find the eye icon wrapper within the form field
        let eye_icon_wrapper = formField.querySelector(".piDFy");

        // show the eye icon wrapper
        eye_icon_wrapper.style.display = "block";
    }
}

// Toggle visibility of password input on click of icon
function piDFy(event) {
    // get the target of the event
    let element = event.target;

    // find parent div .form-field of the event target
    let formField = element.closest(".form-field");
    if (!formField) {
        console.error("closest form field not found");
        return;
    }

    // find password input within the form field
    let passwordInput = formField.querySelector("input[data-type=password]");
    if (!passwordInput) {
        console.error("password input not found");
        return;
    }

    // if the form field has the class 'password_visible'
    if (formField.classList.contains("password_visible")) {
        // remove the class 'password_visible'
        formField.classList.remove("password_visible");

        // add the class 'password_invisible'
        formField.classList.add("password_invisible");

        // set the type of the password input to 'password'
        passwordInput.type = "password";

        // focus on the password input
        passwordInput.focus();
    } else {
        // remove the class 'password_invisible'
        formField.classList.remove("password_invisible");

        // add the class 'password_visible'
        formField.classList.add("password_visible");

        // set the type of the password input to 'text'
        passwordInput.type = "text";

        // focus on the password input
        passwordInput.focus();
    }
}
