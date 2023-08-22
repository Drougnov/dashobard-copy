/**
 * @function initiate_slidein
 *
 * Initiate's slidein
 *
 * @params args object
 */
function initiate_slidein(args) {
    var target = args.target || false;
    // Validating target
    if (!target) {
        console.error('Missing Required Argument "target"');
        return false;
    }
    target = document.querySelector(target);
    var position = args.position || 'left';
    var shadowPlacement = args.shadowPlacement || 'outset';

    // Shadow placement
    if (shadowPlacement === 'inset') {
        target.classList.add('gXlMi');
    } else {
        target.classList.add('jueIH');
    }

    // Slidein position
    if (position === 'right') {
        target.classList.add('RWXep');
    }

    // Closing slides if any active
    var submenus = document.querySelectorAll('.DGrxx');
    submenus.forEach(function (submenu) {
        submenu.classList.remove('PcwQR');
    });

    var slides = document.querySelectorAll('.fsImK');
    slides.forEach(function (slide) {
        slide.classList.remove('lpiOx', 'tRLtc', 'RWXep');
    });

    // Opening targeted slide
    target.classList.add('tRLtc'); // Slidein Display Flex
    target.classList.add('lpiOx'); // Slidein slide animation
}

document.addEventListener('DOMContentLoaded', function () {
    // Closing the slidein if close class clicked
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('SVfWr')) {
            var slidein = event.target.closest('.fsImK');
            slidein.classList.add('OJDpn'); // Adding class with slideOut animation
            setTimeout(function () {
                slidein.classList.remove('OJDpn'); // Removing the slideOut animation class
                slidein.classList.remove('lpiOx', 'tRLtc', 'RWXep'); // Removing the slidein (Left And Right) and display block classes
            }, 500);
        }
    });

    // Opening the multilevel slidein
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('htoFn')) {
            event.preventDefault();
            var submenu = event.target.closest('.nWRZX').querySelector('.DGrxx');
            submenu.classList.add('PcwQR'); // Slidein slide animation class to submenu
        }
    });

    // Closing the multilevel slidein
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('htoFn')) {
            event.preventDefault();
            var submenu = event.target.closest('.DGrxx');
            submenu.classList.add('QQNlZ');
            setTimeout(function () {
                submenu.classList.remove('QQNlZ');
                submenu.classList.remove('PcwQR'); // Removing Slidein slide animation class to submenu
            }, 500);
        }
    });
});



function runMasonry() {
    var grid = document.querySelector('.grid');
    var masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 0,
        // gutter: 10 // Set your desired gutter size
    });
    return masonry;
}

var masonry = null; // Declare masonry variable in a wider scope

document.addEventListener('lazyloaded', function (e) {
    var img = e.target;
    // Perform actions or handle logic for the loaded image
    console.log('Image loaded:', img.getAttribute('data-src'));
    img.classList.remove('xyz');

    if (!masonry) {
        masonry = runMasonry();
    } else {
        masonry.layout();
    }
    document.querySelector(".iDzey").classList.remove("gsCWf");
});

// load more button
const loadMoreButton = document.querySelector(".KRaVJ");
loadMoreButton.addEventListener("click", () => {
    loadMoreButton.classList.toggle("TpsXD");
    getPosts({
        s_keyword: document.getElementById("ajax_search").value,
        page: parseInt(document.getElementById("page_num").value) + 1,
        append: true
    });
});

// New Code
const range_field = document.querySelectorAll(".ajax_filter_range_field");
const range_default_one = 12;
const range_default_two = 100;
const offcanvas_size = 900;

// Init price range slider
if (range_field.length > 0) {
    range_field.forEach((element) => {
        const range_slider = jQuery(element).ionRangeSlider({
            type: "double",
            grid: true,
            min: range_default_one,
            max: range_default_two,
            from: range_default_one,
            to: range_default_two,
            prefix: "",
            onFinish: function () {
                if (window.innerWidth >= offcanvas_size) {
                    getPosts();
                }
            },
            onUpdate: function () {
                getPosts();
            },
        });
    });
}

function reset_range_slider() {
    var range_sliders = jQuery(".ajax_filter_range_field").data("ionRangeSlider");
    range_sliders.reset();
}

// Getting posts on page load

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".iDzey").classList.add("gsCWf");
});

// Getting posts on Apply Selection clicked
document.getElementById("ajax-filters").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the default form submission
    getPosts();
});

// Getting posts on each selection
if (window.innerWidth >= offcanvas_size) {
    document.querySelectorAll(".ajax-filter-trigger-input").forEach((element) => {
        element.addEventListener("input", getPosts);
    });
    document.querySelectorAll(".ajax-filter-trigger-change").forEach((element) => {
        element.addEventListener("change", getPosts);
    });

    document.querySelectorAll(".ajax-filter-trigger-delayed-input").forEach((element) => {

        // ---------old code---------

        // On adding value to search field calls the getPost after 2s delays

        // let delayTimer;
        // element.addEventListener('input', function (event) {
        //     const inputValue = event.target.value;

        //     // Clear the previous timer and request
        //     clearTimeout(delayTimer);

        //     // Set a new timer to trigger the request after 2 seconds
        //     delayTimer = setTimeout(function () {
        //         getPosts({
        //             s_keyword: document.getElementById("ajax_search").value,
        //             page: document.getElementById("page_num").value,
        //             reset: true,
        //         });
        //     }, 2000); // 2 seconds delay
        // });

        // ----------new code-----------

        // call function search icon click
        const searchIcon = document.getElementById('search-icon-container');

        searchIcon.addEventListener('click', ()=>{
            getPosts({
                s_keyword: document.getElementById("ajax_search").value,
                page: document.getElementById("page_num").value,
                reset: true,
            });
        })
    });
}

// Resetting post filters
document.querySelector(".reset-ajax-filter").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll('.ajax-filter-trigger-delayed-input').forEach((element) => {
        element.value = "";
    });
    getPosts({
        page: 1,
        reset: true,
    });
});

function re_init_events() {
    // Removing individual filter
    document.querySelectorAll(".remove-filter").forEach((element) => {
        element.addEventListener("click", function () {
            const parent = this.closest(".filter");
            const target_id = parent.dataset.targetId;
            const target = document.getElementById(target_id);

            if (target) {
                if (target.classList.contains("ajax_filter_range_field")) {
                    reset_range_slider();
                } else if (target.classList.contains("ajax-filter-trigger-change")) {
                    target.value = target.querySelector("option:first-child").value;
                    target.dispatchEvent(new Event("change"));
                } else if (target.classList.contains("ajax-filter-trigger-input")) {
                    target.checked = false;
                    target.dispatchEvent(new Event("input"));
                } else if (target.classList.contains("ajax-filter-trigger-delayed-input")) {
                    target.value = '';
                    target.dispatchEvent(new Event("input"));
                }

                if (window.innerWidth < offcanvas_size) {
                    getPosts();
                }
            }
        });
    });

    // Pagination
    document.querySelectorAll("#pagination .page-numbers").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault(); // prevent the default anchor behaviour
            getPosts({
                s_keyword: document.getElementById("ajax_search").value,
                page: this.textContent,
            });
        });
    });
}

re_init_events();

// Main function to get posts
function getPosts(parameters = {}) {
    const page = parameters.page || 1;
    const reset = parameters.reset || false;
    const append = parameters.append || false;
    const s_keyword = parameters.s_keyword || false;
    const form = document.getElementById("ajax-filters");
    const active_filters = [];

    var slidein = document.querySelector('.fsImK');
    slidein.classList.add('OJDpn'); // Adding class with slideOut animation
    setTimeout(function () {
        slidein.classList.remove('OJDpn'); // Removing the slideOut animation class
        slidein.classList.remove('lpiOx', 'tRLtc', 'RWXep'); // Removing the slidein (Left And Right) and display block classes
    }, 500);

    document.querySelector(".iDzey").classList.add("gsCWf");

    if (!append) {
        document.querySelector("#loop .grid").innerHTML = '';
    }

    // If getting posts after resetting post filters
    if (reset) {
        form.reset();
        reset_range_slider();
    }

    // Changing page number if pagination clicked
    document.getElementById("page_num").value = page;

    // Filter breadcrumbs for checkboxes
    form.querySelectorAll('.ajax-filter-trigger-input[type="checkbox"]:checked').forEach((element) => {
        active_filters.push({
            id: element.id,
            value: element.closest(".filter-container").textContent || element.value,
        });
    });

    // Filter breadcrumbs for delayed inputs
    document.querySelectorAll('.ajax-filter-trigger-delayed-input').forEach((element) => {
        if (element.value !== ""){
            active_filters.push({
                id: element.id,
                value: element.value,
            });
        }
    });

    // Filter breadcrumbs for dropdown
    form.querySelectorAll('.ajax-filter-trigger-change option:checked').forEach((element) => {
        if (element.value !== "latest" && element.value !== "") {
            active_filters.push({
                id: element.closest(".ajax-filter-trigger-change").id,
                value: element.textContent || element.value,
            });
        }
    });

    // Filter breadcrumbs for price range
    range_field.forEach((element) => {
        const range_value = element.value;
        if (range_value !== "" && range_value !== `${range_default_one};${range_default_two}`) {
            const parts = range_value.split(";");
            const start = `${parts[0]}`;
            const end = `${parts[1]}`;
            const text = `Age ${start} - ${end}`;

            active_filters.push({
                id: element.id,
                value: text,
            });
        }
    });

    // Adding filter breadcrumbs UI
    const activeFilterContainer = document.querySelector(".active-filter-container");
    if( activeFilterContainer ) {
        activeFilterContainer.querySelectorAll(".filter:not(.filter-template)").forEach((element) => element.remove());
        active_filters.forEach((item) => {
            const clonedElement = activeFilterContainer.querySelector(".filter-template").cloneNode(true);
            clonedElement.classList.remove("filter-template");
            clonedElement.querySelector("span").textContent = item.value;
            clonedElement.dataset.targetId = item.id;
            activeFilterContainer.appendChild(clonedElement);
        });
    }

    const formData = new FormData(form); // serialize all form data as a string
    formData.append("action", "cpt_ajax_filters"); // appending ajax callback

    if (s_keyword) {
        formData.append("s_keyword", s_keyword); // appending searched word
    }

    // Make an AJAX request to get the posts for the selected page and filters
    fetch(ajax_filters.ajax_url, {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((response) => {
        document.querySelector(".iDzey").classList.remove("gsCWf");
        // Update the post count
        document.getElementById("post-count").innerHTML = response.post_count_ui;
        // Display the filtered posts
        if (append) {
            document.querySelector("#loop .grid").innerHTML += response.posts;
        }else {
            document.querySelector("#loop .grid").innerHTML = response.posts;
        }
        // Display the pagination links
        document.getElementById("pagination").innerHTML = response.pagination;

        if ( response.post_count > 0 && response.page_count > parseInt(document.getElementById("page_num").value) ) {
            loadMoreButton.style.display = "block";
        }else {
            loadMoreButton.style.display = "none";
        }

        masonry.reloadItems();
        masonry.layout();

        // masonry = runMasonry();

        re_init_events();

        if (append) {
            loadMoreButton.classList.remove("TpsXD");
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

// double-ranged-slider

window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

// add simplebar's script and stylesheet to head

// Create a link element for the CSS file
var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css";

// Create a script element for the JavaScript file
var jsScript = document.createElement("script");
jsScript.src = "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js";

// Append the link and script elements to the head of the document
document.head.appendChild(cssLink);
document.head.appendChild(jsScript);