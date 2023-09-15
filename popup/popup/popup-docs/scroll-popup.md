# Scroll Popup Documentation

## Usage && elements

Can be used for popup with large number of elements that will cause overflow.

It containes `simplebar` scroll library and various form-elements.

## special classes and attribute

`AYaOY`: Add this class to any element inside the popup. On click of that/those elment the popup will be closed.

`gsCWf`: Add this class to the popup's outer wrapper/loader, to show them intially on page load.

`data-simplebar`: Add this attribute to the any wrapper to initiate simplebar scroll library. Ex: `<div data-simplebar class="elements-container">`

## How to add scroll popup

First select a target elment which will toggle the visibility of the popup. It can be any elements (button, div, image etc.). Add a function `initiate_popup()` on click. The function takes an object as argument. Set an unique id as the value of the object's target property.  Here is an example:

```html
<button onclick="initiate_popup({'target': '#example id', 'overlay_color': 'rgb(0 170 255 / 58%)'});">Show/Hide Popup</button>
```

Then add the markup for the popup inside the body. Add the same unique id on the popup's outer wrapper. Also add the `scroll-popup` class to activate the element's style. Like this:

```html
<div class="DuKSh EJVsl OtrSK cNGwx scroll-popup" id="#example id">
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

Here is the full markup for scroll popup:

*Note: The first class of each element is a unique class to target the specific element. The rest are for style purpose*

```html
    <!-- outer wrapper -->
    <div class="DuKSh EJVsl OtrSK cNGwx scroll-popup" id="scroll-popup">
            <!-- inner wrapper -->
            <div class="GodhZ gsCWf EJVsl OtrSK CzomY">
                <!-- container -->
                <div class="ExGby HruDj">
                    <!-- header -->
                    <div class="tSrNa gsCWf EJVsl zsSLy">
                        <h1 class="USKIn">Scroll!</h1>

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
                        <!-- form elements-container -->
                        <!-- add the 'data-simplebar' attribute to initiate simplebar scroll library -->
                        <div data-simplebar class="elements-container">
                            <form
                                method="post"
                                action=""
                                id="my_contact_form"
                                autocomplete="on"
                            >
                                <input
                                    type="hidden"
                                    id="my_contact_form_nonce"
                                    name="my_contact_form_nonce"
                                    value="a79e74871f"
                                />
                                <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/master-plugin-development/?example"
                                />
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="full_name">Full Name</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        required=""
                                        placeholder="Enter your full name"
                                        value="DONE"
                                    />
                                    <div
                                        data-lastpass-icon-root="true"
                                        style="
                                            position: relative !important;
                                            height: 0px !important;
                                            width: 0px !important;
                                            float: left !important;
                                        "
                                    ></div>
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="email_address"
                                        >Email Address</label
                                    >
                                    <input
                                        type="email"
                                        name="email_address"
                                        id="email_address"
                                        required=""
                                        placeholder="Enter your email address"
                                        value=""
                                        autocomplete="email"
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="phone_number"
                                        >Phone Number</label
                                    >
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        id="phone_number"
                                        required=""
                                        placeholder="Enter your phone number"
                                        value=""
                                        autocomplete="phone"
                                    />
                                </div>
                                <div class="form-field" id="app">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="favorite_color"
                                        >Favorite Color</label
                                    >
                                    <input
                                        type="color"
                                        name="favorite_color"
                                        id="favorite_color"
                                        required=""
                                        value=""
                                    />
                                </div>
                                <div class="form-field" id="app">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="favorite_color"
                                        >Select Date</label
                                    >
                                    <input
                                        type="text"
                                        class="duDatepicker-input"
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="product_quantity"
                                        >Product Quantity</label
                                    >
                                    <input
                                        type="number"
                                        name="product_quantity"
                                        id="product_quantity"
                                        required=""
                                        placeholder="Enter the quantity of the product"
                                        min="0"
                                        max="10"
                                        value=""
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="website_url">Website URL</label>
                                    <input
                                        type="url"
                                        name="website_url"
                                        id="website_url"
                                        required=""
                                        placeholder="Enter the URL of your website"
                                        value=""
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        aria-label="Message"
                                        aria-describedby="message-description"
                                    >
                    Hello world</textarea
                                    >
                                </div>
                                <div class="emoji-container">
                                    <svg
                                        class="HNdzs DeYlt select-emoji"
                                        id="emoji-button"
                                        width="24px"
                                        height="24px"
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
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M16 14.5005C15.0878 15.7146 13.6356 16.5 12 16.5C10.3642 16.5 8.91221 15.7143 8 14.5M15 9V10M9 9V10M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke="#6c757d"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                    <textarea
                                        class="emoji-input"
                                        name="emoji"
                                        id="emoji"
                                        aria-label="emoji"
                                    >
                    Enter emoji here!</textarea
                                    >
                                </div>
                                <div class="form-field full-width">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="product_type"
                                        >Product Type</label
                                    >
                                    <select
                                        name="product_type"
                                        id="product_type"
                                        required=""
                                    >
                                        <option value="book">Book</option>
                                        <option value="movie">Movie</option>
                                        <option value="music">Music</option>
                                        <option value="" disabled="">
                                            Select a product type
                                        </option>
                                    </select>
                                </div>
                                <div class="form-field video-upload">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="form_abc[video]"
                                        >Upload a video</label
                                    >
                                    <input
                                        type="file"
                                        name="form_abc[video][]"
                                        id="form_abc[video]"
                                        required=""
                                        accept="video/*"
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <fieldset class="flex-container">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="product_categories[]"
                                                value="fiction"
                                            />Fiction
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="product_categories[]"
                                                value="nonfiction"
                                            />Non-Fiction
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="product_categories[]"
                                                value="romance"
                                            />Romance
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="product_categories[]"
                                                value="horror"
                                            />Horror
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="product_categories[]"
                                                required=""
                                                value="comedy"
                                            />Comedy
                                        </label>
                                    </fieldset>
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <fieldset class="flex-container">
                                        <label>
                                            <input
                                                type="radio"
                                                name="preferred_color"
                                                required=""
                                                value="red"
                                            />Red
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="preferred_color"
                                                required=""
                                                value="green"
                                            />Green
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="preferred_color"
                                                required=""
                                                value="blue"
                                                checked=""
                                            />Blue
                                        </label>
                                    </fieldset>
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="profile_picture"
                                        >Profile Picture</label
                                    >
                                    <input
                                        type="file"
                                        name="profile_picture[]"
                                        id="profile_picture"
                                        required=""
                                        accept="image/*"
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <label for="supporting_documents"
                                        >Supporting Documents</label
                                    >
                                    <input
                                        type="file"
                                        name="supporting_documents[]"
                                        id="supporting_documents"
                                        required=""
                                        accept="application/pdf"
                                    />
                                </div>
                                <div class="form-field">
                                    <input
                                        type="hidden"
                                        name="form_my_contact_form"
                                        value="1"
                                    />
                                    <input
                                        type="hidden"
                                        name="user_id"
                                        id="user_id"
                                        value="12345"
                                    />
                                </div>
                                <button type="submit">Submit</button>
                            </form>

                            <!-- table -->
                            <table>
                                <tr>
                                    <th>Column 1</th>
                                    <th>Column 2</th>
                                    <th>Column 3</th>
                                </tr>
                                <tr>
                                    <td>Row 1, Cell 1</td>
                                    <td>Row 1, Cell 2</td>
                                    <td>Row 1, Cell 3</td>
                                </tr>
                                <tr>
                                    <td>Row 2, Cell 1</td>
                                    <td>Row 2, Cell 2</td>
                                    <td>Row 2, Cell 3</td>
                                </tr>
                                <tr>
                                    <td>Row 3, Cell 1</td>
                                    <td>Row 3, Cell 2</td>
                                    <td>Row 3, Cell 3</td>
                                </tr>
                            </table>
                        </div>

                        <!-- close button -->
                        <button class="AYaOY">OK</button>
                    </div>
                </div>
            </div>
        </div>
```