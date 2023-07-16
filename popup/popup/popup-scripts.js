function initiate_popup(args) {
    // Extract the arguments
    const target = args.target || false;
    const overlayColor = args.overlay_color || false;

    // If target is not provided, return
    if (!target) {
        return false;
    }

    // Set overlay background color if provided
    if (overlayColor) {
        const targetElement = document.querySelector(target);
        targetElement.style.backgroundColor = overlayColor;
    }

    // Fade in the popup
    popup_fade_in(document.querySelector(target));

    // Close the popup when clicking on the overlay
    document.querySelector(target).addEventListener("click", function (e) {
        if (e.target.classList.contains("DuKSh")) {
            popup_fade_out(this);
        }
    });

    // Close the popup when clicking on elements with class 'AYaOY(close buttons)'
    const closeButtonElements = document.querySelectorAll(`${target} .AYaOY`);
    closeButtonElements.forEach(function (element) {
        element.addEventListener("click", function () {
            popup_fade_out(this.closest(".DuKSh"));
        });
    });

    // Prevent form submission and add 'gsCWf(display flex)' class to 'iDzey(popup loader)' element
    const submitButtonElements = document.querySelectorAll(
        `${target} [type=submit]`
    );
    submitButtonElements.forEach(function (element) {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            this.closest(".DuKSh")
                .querySelector(".iDzey")
                .classList.add("gsCWf");
        });
    });
}

function popup_fade_in(element) {
    // Fade in the popup by adding 'gsCWf(display flex)' class
    element.classList.add("gsCWf");
    document.body.style.overflow = "hidden";
}

function popup_fade_out(element) {
    // Fade out the popup by removing 'gsCWf(display flex)' class
    element.classList.remove("gsCWf");
    document.body.style.overflow = "auto";
}
