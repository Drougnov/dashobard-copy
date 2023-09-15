# Plan Popup Documentation

## Usage && elements

Can be used for popup with plans (Basic, Pro, Plus etc.) section that requires carousel.

It containes `splide` carousel library.

## special classes and attribute

`AYaOY`: Add this class to any element inside the popup. On click of that/those elment the popup will be closed.

`gsCWf`: Add this class to the popup's outer wrapper/loader, to show them intially on page load.

## How to add plan popup

First select a target elment which will toggle the visibility of the popup. It can be any elements (button, div, image etc.). Add a function `initiate_popup()` on click. The function takes an object as argument. Set an unique id as the value of the object's target property.  Here is an example:

```html
<button onclick="initiate_popup({'target': '#example id', 'overlay_color': 'rgb(0 170 255 / 58%)'});">Show/Hide Popup</button>
```

Then add the markup for the popup inside the body. Add the same unique id on the popup's outer wrapper. Also add the `plan-popup` class to activate the element's style. Like this:

```html
<div class="DuKSh EJVsl OtrSK cNGwx plan-popup" id="#example id">
```

### How to add loader to the popup

The loader is activated on click of any element with the attribute [type="submit"]. Ex: `<button type="submit">Save</button>`. Add the loader markup inside the container `<div class="ExGby HruDj">`:

```html
    <div class="iDzey CzomY EJVsl OtrSK">
        <svg
            width="100"
            height="100"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
        >
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                    <circle
                        stroke-opacity=".5"
                        cx="18"
                        cy="18"
                        r="18"
                    ></circle>
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </path>
                </g>
            </g>
        </svg>
    </div>
```

Thats it!

### How to add dropdown to the popup

We can add dropdown to the popup header. To add the dropdown add this markup inside the header right section (`<div class="wcrwV gsCWf EJVsl">`)  and it's done: 

```html
<div class="BgbBR HruDj">
    <!-- dropdown toggle button -->
    <div
        class="RTcUA TNIio UYvZu gsCWf EJVsl OtrSK DeYlt"
    >
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </svg>
    </div>
    <!-- dropdown contents -->
    <div class="JVeuW CzomY">
        <div class="YLtig DeYlt">Deleted Tasks</div>
        <div class="YLtig DeYlt">
            Archived Tasks
        </div>
        <div class="YLtig DeYlt">
            Duplicate Tasks
        </div>
    </div>
</div>
```

### How to add splide carousel

[Splide intialaization guide](https://splidejs.com/guides/getting-started/)

## complete markup

Here is the full markup for plan popup:

*Note: The first class of each element is a unique class to target the specific element. The rest are for style purpose*

```html
    <!-- outer wrapper -->
    <div class="DuKSh EJVsl OtrSK cNGwx plan-popup" id="plan-popup">
            <!-- inner wrapper -->
            <div class="GodhZ gsCWf EJVsl OtrSK CzomY">
                <!-- container -->
                <div class="ExGby HruDj">
                    <!-- header -->
                    <div class="tSrNa gsCWf EJVsl zsSLy">
                        <h1 class="USKIn">Plans!</h1>

                        <!-- header right section -->
                        <div class="wcrwV gsCWf EJVsl">
                             <!-- close button -->
                            <div
                                class="AYaOY TNIio UYvZu gsCWf EJVsl OtrSK DeYlt"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                                            stroke="#000000"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- contents -->
                    <div class="TImJU">
                        <h1 class="PbRGJ">Choose your membership</h1>

                        <!-- plan version 1 -->
                        <div class="plans-container plans-container-one splide">
                            <div class="splide__track">
                                <div class="plan-carousel-wrapper splide__list">
                                    <div class="plan basic-plan splide__slide">
                                        <h1 class="plan__title">Basic 01</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD0.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan basic-plan splide__slide">
                                        <h1 class="plan__title">Basic</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD0.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan plus-plan splide__slide">
                                        <div class="plan__header tRLtc"></div>
                                        <h1 class="plan__title">Plus</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD10.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan pro-plan splide__slide">
                                        <h1 class="plan__title">Pro</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD19.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan pro-plan splide__slide">
                                        <h1 class="plan__title">Pro 1</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD19.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <!-- plan version 2 -->
                        <div class="plans-container plans-container-two splide">
                            <div class="splide__track">
                                <div class="plan-carousel-wrapper splide__list">
                                    <div class="plan basic-plan splide__slide">
                                        <div class="plan__header tRLtc"></div>
                                        <h1 class="plan__title">Basic 1</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD0.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan basic-plan splide__slide">
                                        <div class="plan__header tRLtc"></div>
                                        <h1 class="plan__title">Basic</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD0.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan plus-plan splide__slide">
                                        <div class="plan__header tRLtc"></div>
                                        <h1 class="plan__title">Plus</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD10.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan pro-plan splide__slide">
                                        <div class="plan__header tRLtc"></div>
                                        <h1 class="plan__title">Pro</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD19.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="plan pro-plan splide__slide">
                                        <div class="plan__header tRLtc"></div>
                                        <h1 class="plan__title">Pro 1</h1>
                                        <div class="plan__pricing">
                                            <span class="plan__price"
                                                >USD19.99</span
                                            >
                                            <span>/ month</span>
                                        </div>
                                        <button class="plan__choose-btn">
                                            Choose Plan
                                        </button>
                                        <p class="plan__text">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Voluptas iste error animi doloremque
                                            incidunt iusto. Delectus,
                                            repudiandae.
                                        </p>
                                        <ul class="plan__feature-list">
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                            <li>
                                                <div
                                                    class="plan__feature-list__icon-container"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                                                stroke="#000000"
                                                                stroke-width="2.5"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span
                                                    class="plan__feature-list__text"
                                                    >Dashboard</span
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-wrapper">
                            <section
                                class="splide column-carousel"
                                role="group"
                                aria-labelledby="column-carousel-heading"
                            >
                                <h2 id="column-carousel-heading">
                                    Column carousel
                                </h2>

                                <div class="splide__track">
                                    <ul class="splide__list">
                                        <li class="splide__slide">
                                            <h2>Column 01</h2>
                                        </li>
                                        <li class="splide__slide">
                                            <h2>Column 02</h2>
                                        </li>
                                        <li class="splide__slide">
                                            <h2>Column 03</h2>
                                        </li>
                                        <li class="splide__slide">
                                            <h2>Column 04</h2>
                                        </li>
                                        <li class="splide__slide">
                                            <h2>Column 05</h2>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <!-- close button -->
                        <button class="AYaOY">OK</button>
                    </div>
                </div>
            </div>
        </div>
```