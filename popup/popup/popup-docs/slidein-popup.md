# Slidein Popup Documentation

## Usage && elements

Can be used for sidebars that slides in from left in desktop and slides up from bottom in mobile

It containes no special elements

## special classes

`AYaOY`: Add this class to any element inside the popup. On click of that/those elment the popup will be closed.

`gsCWf`: Add this class to the popup's outer wrapper/loader, to show them intially on page load.

## How to add slidein popup

First select a target elment which will toggle the visibility of the popup. It can be any elements (button, div, image etc.). Add a function `initiate_popup()` on click. The function takes an object as argument. Set an unique id as the value of the object's target property.  Here is an example:

```html
<button onclick="initiate_popup({'target': '#example id', 'overlay_color': 'rgb(0 170 255 / 58%)'});">Show/Hide Popup</button>
```

Then add the markup for the popup inside the body. Add the same unique id on the popup's outer wrapper. Also add the `slidein-popup` class to activate the slide in effect. Like this:

```html
<div class="DuKSh EJVsl OtrSK cNGwx slidein-popup" id="#example id">
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

## complete markup

Here is the full markup for slidein popup:

*Note: The first class of each element is a unique class to target the specific element. The rest are for style purpose*

```html
    <!-- outer wrapper -->
    <div class="DuKSh EJVsl OtrSK cNGwx slidein-popup" id="slidein-popup">
            <!-- inner wrapper -->
            <div class="GodhZ gsCWf EJVsl CzomY">
                <!-- container -->
                <div class="ExGby HruDj">
                    <!-- header -->
                    <div class="tSrNa gsCWf EJVsl zsSLy">
                        <h1 class="USKIn">Slide In!</h1>

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
                        <div class="main-section">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quod assumenda nulla quis fugit mollitia esse
                            architecto, omnis in, minima nihil magnam sequi
                            asperiores, possimus beatae voluptates? Iusto,
                            distinctio placeat dolore iste, atque temporibus
                            iure labore deleniti ad, corporis eveniet sunt
                            magnam neque quod ab necessitatibus. Ipsam animi
                            corporis vel ducimus expedita tempora nemo eius
                            consectetur assumenda praesentium excepturi, vitae
                            delectus, autem tenetur blanditiis asperiores veniam
                            possimus magni suscipit, debitis laborum nulla quos
                            id labore! Molestias culpa neque voluptate vero
                            maxime rerum quibusdam dicta omnis. Quas, maiores
                            iste! Rerum fuga vitae ex aut reiciendis magnam
                            architecto. Error dolor alias atque. In suscipit
                            laudantium expedita beatae dicta consequuntur
                            laboriosam eius pariatur tenetur! Eos maxime labore
                            laudantium provident unde est, vel minima quisquam
                            tempore alias rerum aliquid numquam quos molestias
                            nihil pariatur cupiditate accusamus! Dolores, nobis
                            magnam. Dignissimos, quaerat, consequatur numquam
                            recusandae tempore ad a quo ipsam totam, placeat sit
                            voluptatem sint temporibus. Hic enim asperiores
                            repellat iste temporibus rem. Ullam perferendis
                            sequi ex porro, dolore optio fugiat deleniti saepe
                            iure minima, adipisci quidem autem eum veniam enim,
                            quas hic quam fuga veritatis mollitia totam eos
                            cupiditate? Obcaecati, aliquam! Provident quod
                            obcaecati libero ipsam, nesciunt dolores? Ea
                            architecto doloribus aut omnis nihil laudantium illo
                            impedit? Maxime ad quia impedit fugiat iusto magnam
                            nobis, neque deleniti sint fuga quos quam, maiores
                            veritatis culpa minima itaque dolore necessitatibus
                            sed ex. Eum eos consectetur nostrum commodi et
                            libero doloribus dignissimos nemo possimus, totam
                            nulla molestias iusto id minima ab laboriosam
                            quaerat modi natus quia facere aut alias quos nam
                            perspiciatis? Atque, magnam dignissimos odio
                            mollitia dolore laboriosam? Aperiam maiores labore
                            consectetur recusandae, rem quod, alias nemo
                            eligendi, nobis aspernatur totam. Optio quia
                            repudiandae delectus ut suscipit laborum, laboriosam
                            ipsam doloremque quod natus, doloribus, at sed
                            commodi enim aperiam vero itaque vel voluptatem
                            corrupti! Commodi, corrupti iusto!
                        </div>

                        <!-- close button -->
                        <button class="AYaOY">OK</button>
                    </div>
                </div>
            </div>
        </div>
```