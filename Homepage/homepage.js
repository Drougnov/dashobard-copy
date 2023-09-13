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

    // static two row carousel (multiple instances)
    const creatorsContainers = document.querySelectorAll('.creators-container');
    const slideToSwipe = 5;  // number of column to slide on pagination button click

    creatorsContainers.forEach(creatorsContainer =>{
        // initiate carousel
        var splide = new Splide( creatorsContainer, {
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
                    padding: { left: 8, right: 8 }
                },
                350: {
                    perPage: 1,
                },
            },
            arrows: false,
            focus: 'left',
        } ).mount();

        // update button activity on column swipe and screen resize
        splide.on('move', checkButtonActivity);
        window.addEventListener('resize', checkButtonActivity);

        // visible pagination buttons
        const paginationButtons = creatorsContainer.querySelectorAll(`[role="presentation"]:nth-child(${slideToSwipe}n + 1) .splide__pagination__page`);

        paginationButtons.forEach((btn, index) => {
            // swipe columns on pagination button click
            btn.addEventListener('click', ()=>{
                const newIndex = index * slideToSwipe;
                splide.go(newIndex);
                checkButtonActivity();
            })
        })

        //check which button is active
        function checkButtonActivity(){
            // Get all the buttons (visible + hidden)
            const buttons = Array.from(creatorsContainer.querySelectorAll('.splide__pagination__page'));

            buttons.forEach((btn, index) => {
                // remove class from inactive buttons
                if(btn.parentElement.classList.contains('pagination-active')){
                    btn.parentElement.classList.remove('pagination-active');
                }

                if (btn.classList.contains('is-active')) {
                    // if any of 1st-5th button is active, show to 1st button
                    // if any of 6th-10th button is active, show 6th button
                    // so on....


                    for (let i = 0; i < slideToSwipe; i++) {
                        if (index >= slideToSwipe * i && index <= slideToSwipe * (i + 1) - 1) {
                            buttons[slideToSwipe  * i].parentElement.classList.add('pagination-active');
                            break;
                        }
                    }
                }
            })
        }

        checkButtonActivity();
    })
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