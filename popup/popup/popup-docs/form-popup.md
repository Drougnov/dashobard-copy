# Form Popup Documentation

## Usage && elements

Can be used for forms

It containes a dropdown and a loader. The loader is visible on submit

## special classes

`AYaOY`: Add this class to any element inside the popup. On click of that/those elment the popup will be closed.

`gsCWf`: Add this class to the popup's outer wrapper/loader, to show them intially on page load.

## How to add form popup

First select a target elment which will toggle the visibility of the popup. It can be any elements (button, div, image etc.). Add a function `initiate_popup()` on click. The function takes an object as argument. Set an unique id as the value of the object's target property.  Here is an example:

```html
<button onclick="initiate_popup({'target': '#example id', 'overlay_color': 'rgb(0 170 255 / 58%)'});">Show/Hide Popup</button>
```

Then add the markup for the popup inside the body. Add the same unique id on the popup's outer wrapper. Like this:

```html
<div class="DuKSh EJVsl OtrSK cNGwx" id="#example id">
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

We can add dropdown to the popup header. To add the dropdown add this markup inside the header right section (`<div class="wcrwV gsCWf EJVsl">`) and it's done: 

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

## complete markup

Here is the full markup for form popup:

*Note: The first class of each element is a unique class to target the specific element. The rest are for style purpose*

```html
    <!-- outer wrapper -->
    <div class="DuKSh EJVsl OtrSK cNGwx" id="form-popup">
            <!-- inner wrapper -->
            <div class="GodhZ gsCWf EJVsl OtrSK CzomY">
                <!-- container -->
                <div class="ExGby HruDj">
                    <!-- header -->
                    <div class="tSrNa gsCWf EJVsl zsSLy">
                        <h1 class="USKIn">Popup Settings</h1>

                        <!-- header right section -->
                        <div class="wcrwV gsCWf EJVsl">
                            <!-- dropdown -->
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
                        <form action="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet atque corporis dolorem exercitationem id
                            laborum nemo nesciunt nobis odio, rem rerum sequi
                            sint ullam! Adipisci aut cumque deserunt doloremque
                            doloribus earum ex expedita harum inventore
                            molestias nostrum omnis porro, quae tempora
                            voluptatum. Ab alias at beatae iusto. Ab ad
                            architecto dolore earum eius excepturi, inventore
                            molestias nobis quasi repudiandae! Atque consectetur
                            delectus ea eius explicabo ipsa laboriosam nihil
                            totam voluptate. A accusamus aliquid amet animi
                            assumenda at aut beatae delectus, deleniti dicta
                            dignissimos dolorem dolores doloribus eius enim
                            facilis fuga hic impedit itaque laborum molestias
                            mollitia necessitatibus nemo nisi non nulla officia
                            pariatur porro possimus quam quia quisquam, quod
                            sequi sunt tempora vel vero! Aliquid, doloribus enim
                            ipsa maiores quis sed soluta! Ad amet beatae
                            molestiae quasi recusandae. Adipisci alias, animi at
                            commodi consectetur corporis culpa cumque delectus
                            deleniti distinctio dolor ducimus enim ex fugit iste
                            laboriosam minima modi mollitia nam neque odio omnis
                            pariatur perspiciatis porro quasi quo ratione
                            reprehenderit sequi sit tempore ut vel vitae
                            voluptatibus. Ab ad adipisci aperiam architecto
                            aspernatur assumenda aut, consectetur consequatur
                            consequuntur cum delectus distinctio doloremque
                            doloribus ducimus eaque earum est exercitationem
                            facilis fugit illum impedit in modi mollitia nam
                            numquam officiis perferendis quam quas qui quia quo
                            quod rem repudiandae sit temporibus unde voluptatum.
                            Accusantium aspernatur culpa deserunt expedita quia
                            quis quisquam saepe ut velit vitae! Commodi delectus
                            doloribus illum iure optio pariatur praesentium
                            voluptatibus! Accusamus alias aliquid asperiores
                            aspernatur, commodi cumque delectus deleniti,
                            distinctio dolore ea earum eos et eum eveniet
                            exercitationem fugiat ipsa iure labore libero magni
                            maxime minima molestiae necessitatibus odit officia
                            placeat provident, quae quibusdam rem repellat sit
                            sunt vitae voluptatem. A amet asperiores beatae
                            delectus distinctio doloremque error est id ipsum
                            iste itaque laboriosam nobis, non obcaecati odit
                            officiis praesentium quaerat quos sit totam. A
                            aliquid at beatae earum exercitationem expedita
                            laboriosam minus molestias placeat porro qui quod
                            similique sint, soluta voluptatem. Aperiam eveniet
                            optio voluptatum. Blanditiis consequatur
                            consequuntur corporis, deleniti eligendi iste iusto
                            labore molestias repellat temporibus vel voluptas,
                            voluptatem? Aliquam architecto asperiores assumenda
                            debitis, eum hic impedit laborum magnam magni
                            necessitatibus officiis omnis perferendis placeat
                            quam qui quos sed sint ullam vel voluptates! Autem
                            cum excepturi hic laudantium libero necessitatibus
                            praesentium quia quo repellendus, sint. Consequatur
                            cumque distinctio dolores doloribus, facere hic
                            ipsam iusto magni quae, repellat repudiandae
                            temporibus ut. Accusamus consequatur dolorum esse
                            eveniet in laudantium natus necessitatibus nisi
                            quidem repellendus reprehenderit voluptas,
                            voluptates.
                            <br />
                            <br />

                            <!-- on submit show loader -->
                            <button type="submit">Save</button>
                        </form>
                    </div>

                    <!-- loader -->
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
                </div>
            </div>
        </div>
```