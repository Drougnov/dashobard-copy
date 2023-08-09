<?php
/**
 * Template: Default
 */

// Instantiate auth class
$fansocial_auth = FanSocial_Auth::get_instance();

// Set no cache header
$fansocial_auth->fansocial_set_no_cache_headers();

// Require login to access, if not logged in
$fansocial_auth->fansocial_login_required();

// User ID
$user_id = get_current_user_id();

// User role
$fansocial_role = user_has_role($user_id, 'creator') ? 'creator' : (user_has_role($user_id, 'audience') ? 'audience' : null);


$page = get_query_var( 'pagename' );
var_dump( $page );

if( empty( $fansocial_role ) ) {
    //die( 'You must be a creator or viewer to access this page' );
}

get_header();
?>
   <!-- entry -->
   <div class="MfdVP">

      <!-- outer-container -->
     <div class="CaDJv gsCWf zaSgn">
            <!-- -------top bar / nav------- -->

            <div class="ZJtVQ gsCWf zsSLy">
                <a href="#" class="tCmWA DeYlt target-id" id="target_id3">
                    <img
                        src="https://ui8-core.herokuapp.com/img/logo-dark.png"
                        alt="logo"
                        class="tRLtc"
                    />
                    <div id="menu_id3" class="menu-id">
                        <div class="menu-item menu-item-active">
                            <div class="menu-item-icon">
                                <svg
                                    class="HNdzs"
                                    id="icon-diamond"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.009,7.956C2.008,7.971,2,7.984,2,8l0,.013c.009.721.677,1.107,9.175,13.556a1,1,0,0,0,1.644,0C22.167,7.967,21.99,8.563,22,8.013L22,8c0-.016-.008-.029-.009-.044-.025-.563-.474-.906-3.134-5.471A1,1,0,0,0,18,2H6a1,1,0,0,0-.857.485C2.363,7.256,2.032,7.423,2.009,7.956ZM12,19.243,4.908,9H19.092ZM6.566,4H17.434l1.8,3H4.766Z"
                                        class="tRLtc"
                                    />
                                </svg>
                            </div>
                            <span>Products</span>
                        </div>
                        <div class="menu-item menu-item-active">
                            <div class="menu-item-icon">
                                <svg
                                    class="HNdzs profile-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                                        stroke="#292D32"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="tRLtc"
                                    />
                                    <path
                                        d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                                        stroke="#292D32"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="tRLtc"
                                    />
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#292D32"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="tRLtc"
                                    />
                                </svg>
                            </div>
                            <span>Customers</span>
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-icon">
                                <svg
                                    class="HNdzs shop-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M20.485 3H16.4933L16.9933 8C16.9933 8 17.9933 9 19.4933 9C20.5703 9 21.3036 8.48445 21.6316 8.1937C21.7623 8.07782 21.8101 7.90091 21.7814 7.72861L21.0768 3.50136C21.0286 3.21205 20.7783 3 20.485 3Z"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        class="tRLtc"
                                    />
                                    <path
                                        d="M16.4933 3L16.9933 8C16.9933 8 15.9933 9 14.4933 9C12.9933 9 11.9933 8 11.9933 8V3H16.4933Z"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M11.9933 3V8C11.9933 8 10.9933 9 9.49329 9C7.99329 9 6.99329 8 6.99329 8L7.49329 3H11.9933Z"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        class="tRLtc"
                                    />
                                    <path
                                        d="M7.49331 3H3.50158C3.20828 3 2.95797 3.21205 2.90975 3.50136L2.2052 7.72862C2.17649 7.90091 2.22432 8.07782 2.35502 8.1937C2.68294 8.48445 3.41626 9 4.49329 9C5.99329 9 6.99331 8 6.99331 8L7.49331 3Z"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        class="tRLtc"
                                    />
                                    <path
                                        d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        class="tRLtc"
                                    />
                                    <path
                                        d="M14.8333 21V15C14.8333 13.8954 13.9379 13 12.8333 13H10.8333C9.72874 13 8.83331 13.8954 8.83331 15V21"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        stroke-miterlimit="16"
                                        class="tRLtc"
                                    />
                                </svg>
                            </div>
                            <span>Shop</span>
                        </div>
                    </div>
                </a>
                <div class="NBQVu gsCWf">
                    <button
                        type="button"
                        aria-label="messages"
                        class="gmOiP DeYlt HruDj"
                    >
                        <svg
                            class="HNdzs"
                            width="800px"
                            height="800px"
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
                    </button>
                    <button
                        type="button"
                        aria-label="notifications"
                        class="gmOiP DeYlt HruDj target-id"
                        id="target_id2"
                    >
                        <svg
                            class="HNdzs"
                            id="icon-notification"
                            width="24px"
                            height="24px"
                            viewBox="-1.5 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <title>notification_bell [#1397]</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-181.000000, -720.000000)"
                                >
                                    <g
                                        id="icons"
                                        transform="translate(56.000000, 160.000000)"
                                    >
                                        <path
                                            d="M137.75,574 L129.25,574 L129.25,568 C129.25,565.334 131.375,564 133.498937,564 L133.501063,564 C135.625,564 137.75,565.334 137.75,568 L137.75,574 Z M134.5625,577 C134.5625,577.552 134.0865,578 133.5,578 C132.9135,578 132.4375,577.552 132.4375,577 L132.4375,576 L134.5625,576 L134.5625,577 Z M140.9375,574 C140.351,574 139.875,573.552 139.875,573 L139.875,568 C139.875,564.447 137.359,562.475 134.5625,562.079 L134.5625,561 C134.5625,560.448 134.0865,560 133.5,560 C132.9135,560 132.4375,560.448 132.4375,561 L132.4375,562.079 C129.641,562.475 127.125,564.447 127.125,568 L127.125,573 C127.125,573.552 126.649,574 126.0625,574 C125.476,574 125,574.448 125,575 C125,575.552 125.476,576 126.0625,576 L130.3125,576 L130.3125,577 C130.3125,578.657 131.739438,580 133.5,580 C135.260563,580 136.6875,578.657 136.6875,577 L136.6875,576 L140.9375,576 C141.524,576 142,575.552 142,575 C142,574.448 141.524,574 140.9375,574 L140.9375,574 Z"
                                            id="notification_bell-[#1397]"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="bPLpQ tRLtc fZEgl vzHJK"></span>
                        <div id="menu_id2" class="menu-id">
                            <div class="menu-item menu-item-active">
                                <div class="menu-item-icon">
                                    <svg
                                        class="HNdzs"
                                        id="icon-diamond"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.009,7.956C2.008,7.971,2,7.984,2,8l0,.013c.009.721.677,1.107,9.175,13.556a1,1,0,0,0,1.644,0C22.167,7.967,21.99,8.563,22,8.013L22,8c0-.016-.008-.029-.009-.044-.025-.563-.474-.906-3.134-5.471A1,1,0,0,0,18,2H6a1,1,0,0,0-.857.485C2.363,7.256,2.032,7.423,2.009,7.956ZM12,19.243,4.908,9H19.092ZM6.566,4H17.434l1.8,3H4.766Z"
                                            class="tRLtc"
                                        />
                                    </svg>
                                </div>
                                <span>Products</span>
                            </div>
                            <div class="menu-item menu-item-active">
                                <div class="menu-item-icon">
                                    <svg
                                        class="HNdzs profile-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="800px"
                                        height="800px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="tRLtc"
                                        />
                                    </svg>
                                </div>
                                <span>Customers</span>
                            </div>
                            <div class="menu-item">
                                <div class="menu-item-icon">
                                    <svg
                                        class="HNdzs shop-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="800px"
                                        height="800px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.485 3H16.4933L16.9933 8C16.9933 8 17.9933 9 19.4933 9C20.5703 9 21.3036 8.48445 21.6316 8.1937C21.7623 8.07782 21.8101 7.90091 21.7814 7.72861L21.0768 3.50136C21.0286 3.21205 20.7783 3 20.485 3Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M16.4933 3L16.9933 8C16.9933 8 15.9933 9 14.4933 9C12.9933 9 11.9933 8 11.9933 8V3H16.4933Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M11.9933 3V8C11.9933 8 10.9933 9 9.49329 9C7.99329 9 6.99329 8 6.99329 8L7.49329 3H11.9933Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M7.49331 3H3.50158C3.20828 3 2.95797 3.21205 2.90975 3.50136L2.2052 7.72862C2.17649 7.90091 2.22432 8.07782 2.35502 8.1937C2.68294 8.48445 3.41626 9 4.49329 9C5.99329 9 6.99331 8 6.99331 8L7.49331 3Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M14.8333 21V15C14.8333 13.8954 13.9379 13 12.8333 13H10.8333C9.72874 13 8.83331 13.8954 8.83331 15V21"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            stroke-miterlimit="16"
                                            class="tRLtc"
                                        />
                                    </svg>
                                </div>
                                <span>Shop</span>
                            </div>
                        </div>
                    </button>
                    <div id="target_id1" class="target-id">
                        <img
                            src="https://ui8-core.herokuapp.com/img/content/avatar.jpg"
                            alt="user"
                            class="ZgQHk DeYlt tRLtc fZEgl"
                        />
                        <div id="menu_id1" class="menu-id">
                            <div class="menu-item menu-item-active">
                                <div class="menu-item-icon">
                                    <svg
                                        class="HNdzs"
                                        id="icon-diamond"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.009,7.956C2.008,7.971,2,7.984,2,8l0,.013c.009.721.677,1.107,9.175,13.556a1,1,0,0,0,1.644,0C22.167,7.967,21.99,8.563,22,8.013L22,8c0-.016-.008-.029-.009-.044-.025-.563-.474-.906-3.134-5.471A1,1,0,0,0,18,2H6a1,1,0,0,0-.857.485C2.363,7.256,2.032,7.423,2.009,7.956ZM12,19.243,4.908,9H19.092ZM6.566,4H17.434l1.8,3H4.766Z"
                                            class="tRLtc"
                                        />
                                    </svg>
                                </div>
                                <span>Products</span>
                            </div>
                            <div class="menu-item menu-item-active">
                                <div class="menu-item-icon">
                                    <svg
                                        class="HNdzs profile-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="800px"
                                        height="800px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#292D32"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="tRLtc"
                                        />
                                    </svg>
                                </div>
                                <span>Customers</span>
                            </div>
                            <div class="menu-item">
                                <div class="menu-item-icon">
                                    <svg
                                        class="HNdzs shop-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="800px"
                                        height="800px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.485 3H16.4933L16.9933 8C16.9933 8 17.9933 9 19.4933 9C20.5703 9 21.3036 8.48445 21.6316 8.1937C21.7623 8.07782 21.8101 7.90091 21.7814 7.72861L21.0768 3.50136C21.0286 3.21205 20.7783 3 20.485 3Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M16.4933 3L16.9933 8C16.9933 8 15.9933 9 14.4933 9C12.9933 9 11.9933 8 11.9933 8V3H16.4933Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M11.9933 3V8C11.9933 8 10.9933 9 9.49329 9C7.99329 9 6.99329 8 6.99329 8L7.49329 3H11.9933Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M7.49331 3H3.50158C3.20828 3 2.95797 3.21205 2.90975 3.50136L2.2052 7.72862C2.17649 7.90091 2.22432 8.07782 2.35502 8.1937C2.68294 8.48445 3.41626 9 4.49329 9C5.99329 9 6.99331 8 6.99331 8L7.49331 3Z"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            class="tRLtc"
                                        />
                                        <path
                                            d="M14.8333 21V15C14.8333 13.8954 13.9379 13 12.8333 13H10.8333C9.72874 13 8.83331 13.8954 8.83331 15V21"
                                            stroke="#000000"
                                            stroke-width="1.5"
                                            stroke-miterlimit="16"
                                            class="tRLtc"
                                        />
                                    </svg>
                                </div>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ------main------ -->

            <div class="gsCWf KIZab">
               
                <!-- Sidebar menu -->
                <?php include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-sidebar-menu.php'; ?>
                
                <!-- Page content wrapper -->
                <section class="YEFiA gsCWf zaSgn KIZab">

                    <?php
                    switch ( $page ) {

                        // Dashboard
                        case 'dashboard':
                            include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-home.php';
                            break;
                        
                        // Notifications
                        case 'dashboard-notifications':
                            include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-notifications.php';
                            break;

                        // Profile
                        case 'dashboard-profile':
                            include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-profile-details.php';
                            break;

                        // Account
                        case 'dashboard-account':
                            include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-account.php';
                            break;

                        // Newsletter
                        case 'dashboard-newsletter':
                            include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-newsletter.php';
                            break;

						// Billing/Shipping
						case 'dashboard-account-billing':
							include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-billing.php';							
							break;

                        // Default case for all other pages
                        default:
                            // Code to be executed when $page doesn't match any previous cases
                            include_once $GLOBALS[ 'fansocial_settings' ][ 'FANSOCIAL_DIR_PATH' ] . 'templates/template-parts/template-part-dashboard-home.php';
                            break;
                    }
                    ?>
                </section>
            </div>
        </div><!-- end outer-container -->

   </div><!-- end entry -->
<?php get_footer(); ?>


<?php

/*
account-dashboard-page-account.php
account-dashboard-page-analytics.php
account-dashboard-page-blog.php
account-dashboard-page-commissions.php
account-dashboard-page-community.php
account-dashboard-page-newsletter.php
account-dashboard-page-notifications.php
account-dashboard-page-overview.php
account-dashboard-page-profile.php
account-dashboard-page-your-shop-coupons.php
account-dashboard-page-your-shop-orders.php
account-dashboard-page-your-shop-products.php
account-dashboard-page-your-shop-tip-settings.php
account-dashboard-page-your-shop-overview.php
account-dashboard.php
*/

/*
step 1 update user database for both OR creator only database
step 2 create form
- username check
- gender
- age
- billing
- shipping

- profile
- profile backgrounf
- profile colour scheme
- profile bio
- profile wishlist
- profile urls - onlyfans
- social urls - twitter and cx    
- email
- password
- 

- newsletter

- coupon

- post to twitter
- profile tags
- 

- referral URL
- 
*/ 
?>