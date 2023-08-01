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

1. Identify the `div` where you want to add the dropdown. For example:

```html
<div>
    <p>text</p>
</div>
```

2. Add the class `target_id` to the `div`. And add an id `target_id(number)` to the `div`'s child which will be the dropdown/menu toggle button. The `number` should be unique and can be any value. Here's an example:

```html
<div class="target_id">
    <p id="target_id1">text</p>
</div>
```

3. Inside the `div`, add a `dropdown-menu container`. It should have the class `menu-id` and an id `menu-id(number)`. The `number` should match the `target_id`'s number. Here's the complete code:

```html
<div class="target-id DeYlt">
    <!-- this <p> will be the toggle button for the dropdown-menu -->
    <p id="target_id1">text</p>
    <!-- add dropdown-menu container with a class 'menu-id' and id 'menu-id(same-number)' -->
    <div id="menu_id1" class="menu-id">
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

4. Call the function in the script with the specific ids. You can toggle the visibility of the dropdown menu by modifying the 3rd argument. Use `true` to show the dropdown initially, and `false` to hide it initially. For example:

`singleMenu("target_id1", "menu_id1", false);`

Remember to include the `single-menu-dropdown.js` script file in your HTML document.
