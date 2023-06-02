// Function to validate the password
function validatePassword(password) {
    console.log("validatePassword function run");

    // Minimum length of 8 characters
    if (password.length < 8) {
        return false;
    }

    // Must contain at least one uppercase letter, one lowercase letter, and one number
    if (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password)
    ) {
        return false;
    }

    return true;
}

// Function to scroll to the password
function scrolltoPassword() {
    // Finding the element by attribute
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        // If the input element has 'data-type="password"', store it in passwordInput
        if (inputElements[i].getAttribute("data-type") === "password") {
            var passwordInput = inputElements[i];
            break;
        }
    }

    // Scrolling the page to the element
    if (passwordInput !== undefined) {
        // Get the dimensions of the password input field
        var rect = passwordInput.getBoundingClientRect();
        // Calculate the absolute top position of the password input field
        var absoluteTop = rect.top + window.pageYOffset;
        // Calculate the position which would place the password field in the middle of the page
        var middle = absoluteTop - window.innerHeight / 2;

        // Scroll to the middle position smoothly
        window.scrollTo({
            top: middle,
            behavior: "smooth",
        });
    }
}

// Show password prompt and prevent form submission
var forms = document.getElementsByTagName("form");
for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    // Find the first input field with 'data-type="password"' inside the form
    var passwordInput = form.querySelector('[data-type="password"]');

    if (passwordInput) {
        // If there's a password input in the form, add an event listener for form submission
        (function (input) {
            form.addEventListener("submit", function (event) {
                // When the form is submitted, get the password from the input field
                var passwordValue = input.value;
                // If the password doesn't meet the validation criteria
                if (!validatePassword(passwordValue)) {
                    // Prevent form submission
                    event.preventDefault();

                    // Select the element with the class 'unq_oKTLa'
                    var element = document.querySelector(".unq_oKTLa");

                    // Remove the class 'dspl_dWotM' from the selected element - for display
                    element.classList.remove("dspl_dWotM");

                    // Scroll to the password input field
                    scrolltoPassword();

                    console.log(
                        "Password is not secure. Form submission prevented."
                    );
                }
            });
        })(passwordInput);
    }
}

// Add button loader
form.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Timeout function to delay execution
    setTimeout(function () {
        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            // Check if the form has classes .xxx or .xxx
            if (
                form.classList.contains("xxx") ||
                form.classList.contains("xxx")
            ) {
                continue; // Skip the logic for these forms
            }

            var requiredFields = form.querySelectorAll(":required");
            var hasMissingFields = false;

            // Check if all native required fields are entered
            for (var j = 0; j < requiredFields.length; j++) {
                if (!requiredFields[j].value) {
                    hasMissingFields = true;
                    break;
                }
            }

            // Check if element with class 'unq_oKTLa' exists and has display none
            var element = form.querySelector(".unq_oKTLa");
            var shouldAddLoader =
                element && getComputedStyle(element).display === "none";

            //Add class 'loader' to the form's button if conditions are met
            if (shouldAddLoader) {
                buttonLoader(form);
            }
        }
    }, 100);
});

function buttonLoader(form) {
    var buttonContainer = form.querySelector(".btn-container");
    var button = buttonContainer.querySelector("button");

    button.classList.add("TpsXD", "white-loader");
    button.style.position = "relative";
}
