# Instruction

## How to add/remove red-dot notification icon

To add the `red dot notification` to an icon, follow these steps:

1. Locate the container where you want to add the `red dot notification`. For example, let's use the `message-icon container`:

```html
<div class="gmOiP DeYlt HruDj">
    <svg
        class="HNdzs icon-message"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <!-- SVG paths and other elements -->
    </svg>
</div>
```

2. After the `svg` tag, insert the following line of code: `<span class="bPLpQ tRLtc fZEgl vzHJK"></span>`. Ensure that the container has a relative position or the class `HruDj`, as the red dot is positioned absolutely. The updated code will be as follows:

```html
<div class="gmOiP DeYlt HruDj">
    <svg
        class="HNdzs icon-message"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <!-- SVG paths and other elements -->
    </svg>
    <span class="bPLpQ tRLtc fZEgl vzHJK"></span>
</div>
```

## How to add single menu dropdown

1. Identify the div and add the class `target_id` to the dropdown menu's parent element`. Here's an example:

```html
<div class="target_id">
    
</div>
```

2. Add a data-attribute `data-target="menu-(number)"` and a class `target-id-button` to the element which will be the dropdown/menu toggle button. The `number` should be unique and can be any value. *The toggle button will also work even if it is outside the `target-id` container*. Like this:

```html
<div class="target_id">
    <p data-target="menu-1" class="target-id-button">text</p>
</div>
```

3. Inside the `target-id` container, add a `dropdown-menu container`. It should have the class `menu-id` and a data-attribute `data-menu="menu-(number)"` that has the same value as the toggle button. The `number` should match with the toggle button data-attribute's number. Here's the complete code:

```html
<div class="target-id DeYlt">
    <!-- this <p> will be the toggle button for the dropdown-menu -->
    <p data-target="menu-1" class="target-id-button">text</p>
    <!-- add dropdown-menu container with a class 'menu-id' and attribute 'data-menu="menu-(number)' -->
    <div data-menu="menu-1" class="menu-id">
        <!-- dropdown menu item -->
        <div class="menu-item menu-item-active">
            <!-- dropdown menu item left side (icon-container) -->
            <div class="menu-item-icon">left side (icon)</div>
            <!-- dropdown menu item right side (text-container) -->
            <span>Right side (text)</span>
        </div>
    </div>
</div>
```

Thats it. We are done.

*Remember to include the `popup-styles.css` stylesheet and `popup-scripts.js` script file in your HTML document*.

## Speciality

You can put the toggle button anywhere on the webpage; it doesn't have to be next to the menu it opens. Plus, you can use multiple buttons with the same identifier to control the same menu.
