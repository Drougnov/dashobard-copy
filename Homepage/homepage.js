// ------------------handle header height----------------------

// calculate header height
let headerHeight = document.querySelector('.header').offsetHeight;

// set the header height as a css variable
function setHeaderHeightVariable() {
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}
setHeaderHeightVariable();

// set an obserber for header height change and update the variable
const resizeObserver = new ResizeObserver(() => {
    const newHeaderHeight = document.querySelector('.header').offsetHeight;
    if (newHeaderHeight !== headerHeight) {
        headerHeight = newHeaderHeight;
        setHeaderHeightVariable();
    }
});

// Observe the header element
resizeObserver.observe(document.querySelector('.header'));

// -------------------------initiate splides.js---------------------------

document.addEventListener('DOMContentLoaded', function () {
    // (keyhole icon + featured creators)
    new Splide('.start__text-carousel', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: .25,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount( window.splide.Extensions );

    // auto sliding image - top
    new Splide('.start__img-carousel-top', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: -.25,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount( window.splide.Extensions );

    // auto sliding image - bottom
    new Splide('.start__img-carousel-bottom', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: .25,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount( window.splide.Extensions );

    // center focused carousel (img + name + username)
    new Splide('.new-creators-container', {
        type   : 'loop',
        perPage: 8,
        gap: '10px',
        breakpoints: {
            1024: {
                perPage: 6,
            },
            850: {
                perPage: 5,
                pagination: false,
            },
            650: {
                perPage: 3,
                padding: { left: 10, right: 10 }
            },
            350: {
                perPage: 2,
            },
        },
        focus: 'center',
    }).mount();

    // static two-row carousel (multiple instances)
    const creatorsContainers = document.querySelectorAll('.creators-container');

    creatorsContainers.forEach((creatorsContainer) => {
    const splide = new Splide(creatorsContainer, {
        type: 'loop',
        gap: '8px',
        perPage: 6,
        pagination: false,
        breakpoints: {
        1200: {
            perPage: 5,
        },
        1024: {
            perPage: 4,
        },
        850: {
            perPage: 3,
        },
        650: {
            perPage: 2,
            padding: { left: 8, right: 8 },
        },
        350: {
            perPage: 1,
        },
        },
        arrows: false,
        focus: 'left',
    }).mount();

    // Create the custom-pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination-container');

    // Calculate the number of pagination buttons based on the perPage setting
    const pageCount = Math.ceil(splide.length / 5); // Each button controls 5 slides

    // Create pagination buttons
    const buttons = [];

    for (let i = 0; i < pageCount; i++) {
        const button = document.createElement('div');
        button.classList.add("pagination-btn", "tRLtc")

        // Add a data attribute to each button to store the target slide index
        button.dataset.targetSlide = i * 5; // Each button controls 5 slides

        // Add a click event listener to each button
        button.addEventListener('click', (event) => {
        const targetSlide = parseInt(event.target.dataset.targetSlide);

        // Go to the target slide index
        splide.go(targetSlide);
        });

        // Append the button to the pagination container
        paginationContainer.appendChild(button);
        buttons.push(button);
    }

    // Add an 'active' class to the first button to highlight it on initialization
    buttons[0].classList.add('pagination-active');

    // Add a 'move' event listener to update the active button based on Splide movement
    splide.on('move', (newIndex) => {
        // Remove the 'active' class from all buttons
        buttons.forEach((button) => {
        button.classList.remove('pagination-active');
        });

        // Calculate the index of the active button based on the currently focused slide
        const activeButtonIndex = Math.floor(newIndex / 5); // Each button controls 5 slides

        // Add the 'active' class to the active button
        buttons[activeButtonIndex].classList.add('pagination-active');
    });

    // Append the custom-pagination container to the creatorsContainer
    creatorsContainer.appendChild(paginationContainer);
    });
});


//--------------------handle-popup----------------------
const popupOpeners = document.querySelectorAll('.popup-opener');

popupOpeners.forEach(popupOpener => {
    popupOpener.addEventListener('click', () => {
        // Retrieve data from the clicked popup-opener
        const title = popupOpener.querySelector('.creators__text-container--title').textContent;
        const username = popupOpener.querySelector('.creators__text-container--handle span').textContent;
        const imageUrl = popupOpener.querySelector('.creators__img-container img').getAttribute('src');

        // Populate the popup container with the retrieved data
        const popup = document.getElementById('form-popup');
        popup.querySelector('.popup-thumbnail-img').setAttribute('src', imageUrl);
        popup.querySelector('.popup-model-img').setAttribute('src', imageUrl);
        popup.querySelector('.popup-model-username').textContent = username;
        popup.querySelector('.popup-stream-title').textContent = title;

        // Show the popup
        initiate_popup({'target': '#form-popup'})
    });
});