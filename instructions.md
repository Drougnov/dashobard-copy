# Instruction

## How to add/remove red-dot notification icon

To add the red dot notification to a icon, we need to add this line `<span class="bPLpQ tRLtc fZEgl vzHJK"></span>`.

Suppose, you want to add the red dot notification to this message-icon container:

```html
<div class="gmOiP DeYlt HruDj">
    <svg
        class="HNdzs icon-message"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <g fill="#000000">
            <path
                d="M4 7.75A.75.75 0 014.75 7h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 014 7.75zM4.75 4.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                class="tRLtc"
            />
            <path
                fill-rule="evenodd"
                d="M15 3.25A2.25 2.25 0 0012.75 1h-9.5A2.25 2.25 0 001 3.25v11a.75.75 0 001.26.55l2.801-2.6a.75.75 0 01.51-.2h7.179A2.25 2.25 0 0015 9.75v-6.5zm-2.25-.75a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H5.572a2.25 2.25 0 00-1.531.6L2.5 12.53V3.25a.75.75 0 01.75-.75h9.5z"
                clip-rule="evenodd"
                class="tRLtc"
            />
        </g>
    </svg>
</div>
```

simply just add the line `<span class="bPLpQ tRLtc fZEgl vzHJK"></span>` after the 'svg'. Make sure the container's position is relative or has the class 'HruDj', as the red-dot is absolute. The updated code will look like this:

```html
<div class="gmOiP DeYlt HruDj">
    <svg
        class="HNdzs icon-message"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <g fill="#000000">
            <path
                d="M4 7.75A.75.75 0 014.75 7h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 014 7.75zM4.75 4.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                class="tRLtc"
            />
            <path
                fill-rule="evenodd"
                d="M15 3.25A2.25 2.25 0 0012.75 1h-9.5A2.25 2.25 0 001 3.25v11a.75.75 0 001.26.55l2.801-2.6a.75.75 0 01.51-.2h7.179A2.25 2.25 0 0015 9.75v-6.5zm-2.25-.75a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H5.572a2.25 2.25 0 00-1.531.6L2.5 12.53V3.25a.75.75 0 01.75-.75h9.5z"
                clip-rule="evenodd"
                class="tRLtc"
            />
        </g>
    </svg>
    <span class="bPLpQ tRLtc fZEgl vzHJK"></span>
</div>
```

## How to add single menu dropdown

To add dropdown to a div, for example this div:

```html
<div>
    <p>text</p>
</div>
```

we'd have to add a class 'target_id' and a id 'target_id(number)' to the div. Like this:

```html
<div class="target_id" id="target_id1">
    <p>text</p>
</div>
```

Then we need to add the dropdown-menu container inside the div. It will have a class 'menu-id' and a id 'menu-id(number)'. The number have to be same as target_id's number. The complete code will look like this:

```html
<div class="target-id DeYlt" id="target_id1">
    <!-- this <p> will be the toggle button for the dropdown-menu -->
    <p>text</p>
    <!-- add dropdown-menu container with a class 'menu-id' and id 'menu-id(same-number)' -->
    <div id="menu_id4" class="menu-id">
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

Then we'll have to call the function in the script with those specific ids. We can initially toggle the visibility of the dropdown menu by changing the 3rd argument. True = show dropdown initially, false = hide dropdown initially:

`singleMenu("target_id1", "menu_id1", false);`
