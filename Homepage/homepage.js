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

// -------------------initiate splides.js------------------

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.start__text-carousel', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        autoScroll: {
            speed: .25,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount( window.splide.Extensions );

    new Splide('.start__img-carousel-top', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        autoScroll: {
            speed: -.25,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount( window.splide.Extensions );

    new Splide('.start__img-carousel-bottom', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        autoScroll: {
            speed: .25,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    }).mount( window.splide.Extensions );

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
            },
            350: {
                perPage: 2,
            },
        },
        focus: 'center',
    }).mount();

    var elms = document.getElementsByClassName( 'creators-container' );

    for ( var i = 0; i < elms.length; i++ ) {
        new Splide( elms[ i ], {
            type   : 'loop',
            gap: '8px',
            perPage: 6,
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
                },
                350: {
                    perPage: 1,
                },
            },
            arrows: false,
            focus: 'left',
        } ).mount();
    }
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