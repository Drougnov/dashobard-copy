<?php
get_header();

$args = array(
    'per_page' => '18',
    'order_by' => 'popularity'
);
$query = search_users($args);
?>
<!-- entry -->
<div class="MfdVP">
    <!-- outer-container -->
    <div class="pZBLj">
        <!-- inner-container & box-width -->
        <div class="ifugj">
            <div class="DsIwi">
                <!-- top-section -->
                <section class="VjPub">
                    <h1>
                        <?php _e(apply_filters('the_title', 'Creators')) ?>
                    </h1>
                    <br>
                    <p id="post-count">
                        <?php
                        echo 'Showing ' . ((1 - 1) * $args['per_page'] + 1) . '-' . ((1 - 1) * $args['per_page'] + count($query->results)) . ' of ' . $query->total_results . ' results by Popularity';
                        ?>
                    </p>
                    <!-- button-container -->
                    <div class="filter-button-container vEpUv gsCWf">
                        <button class="filter DeYlt"
                            onclick="initiate_popup({'target': '#slidein-popup', 'overlay_color': 'transparent'});">
                            <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
                                    fill="#000000" class="tRLtc"></path>
                            </svg>
                            <span>Filter</span>
                        </button>
                        <button class="reset DeYlt reset-ajax-filter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000"
                                class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill="#000000" fill-rule="evenodd"
                                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
                                <path fill="#000000"
                                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z">
                                </path>
                            </svg>
                            <span>Reset</span>
                        </button>
                        <div class="active-filter-container">
                            <button class="tag filter active-class filter-template" data-targetId="">
                                <span></span>
                                <div class="cross-container remove-filter">
                                    <svg fill="#000000" width="18px" height="18px" viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"
                                            class="tRLtc"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

                <!-- images-grid -->
                <div id="loop">
                    <div class="grid">
                        <?php

                        /**
                         * Check if a given file path does not point to a valid image file.
                         *
                         * @param string $filePath The file path to check.
                         * @return bool True if the file path is not a valid image file, false otherwise.
                         */
                        function is_not_valid_image_path($filePath)
                        {
                            $imageExtensions = array('jpg', 'jpeg', 'png', 'gif', 'bmp'); // Add more image extensions if needed
                        
                            $fileExtension = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));

                            if (!in_array($fileExtension, $imageExtensions)) {
                                return true;
                            } else {
                                return false;
                            }
                        }




                        if ($query->have_results) {
                            // Loop through the posts and generate the HTML
                            foreach ($query->results as $result) {
                                // $user_ID          = $result['user_ID'];
                                // $profile_headshot = $result['profile_headshot'];
                                // $profile_tags     = $result['profile_tags'];
                                $profile_username = $result['profile_username'];
                                $profile_image = $result['profile_feature_URL'];
                                $image_url = get_media_item_image($profile_image, 300);
                                $image_url = $image_url['image_url'] ?? '';

                                if (empty($image_url) || is_not_valid_image_path($image_url)) {
                                    continue;

                                }


                                ?>
                                <a href="example" class="grid-item"> <!-- update the link here -->
                                    <div class="grid-absolute-wrapper">
                                        <div class="grid-flex-wrapper">
                                            <div class="grid__text-container-left">
                                                <div class="grid__text-container--img-container">
                                                    <img src="" data-src="<?php echo esc_url($image_url); ?>" alt="Image"
                                                        class="tRLtc lazyload xyz" />
                                                </div>
                                                <div class="grid__text-container--user-info">
                                                    <span class="grid__text-container--name">Creator Name</span><span
                                                        class="grid__text-container--username">
                                                        <?php echo esc_html($profile_username); ?>
                                                    </span>
                                                    <div class="grid__text-container--followers">9999+ Followers</div>
                                                </div>
                                            </div>
                                            <div class="grid__text-container-right">
                                                <svg class="icon-arrow-forward" xmlns="http://www.w3.org/2000/svg" width="40"
                                                    height="41" viewBox="0 0 40 41" fill="none">
                                                    <path
                                                        d="M8.33268 21.7966H28.0994L22.0493 29.0633C21.9093 29.2318 21.8038 29.4263 21.7388 29.6356C21.6739 29.8449 21.6509 30.0649 21.671 30.2831C21.7116 30.7238 21.9257 31.1304 22.266 31.4133C22.6064 31.6962 23.0452 31.8323 23.4859 31.7916C23.9266 31.751 24.3331 31.537 24.616 31.1966L32.9494 21.1966C33.0054 21.1171 33.0556 21.0335 33.0994 20.9466C33.0994 20.8633 33.1827 20.8133 33.216 20.7299C33.2916 20.5388 33.3311 20.3354 33.3327 20.1299C33.3311 19.9244 33.2916 19.721 33.216 19.5299C33.216 19.4466 33.1327 19.3966 33.0994 19.3133C33.0556 19.2264 33.0054 19.1428 32.9494 19.0633L24.616 9.06326C24.4593 8.87512 24.2631 8.72382 24.0413 8.62012C23.8195 8.51642 23.5775 8.46286 23.3327 8.46326C22.9433 8.4625 22.5659 8.59812 22.266 8.84659C22.0973 8.98651 21.9577 9.15834 21.8555 9.35225C21.7532 9.54617 21.6902 9.75835 21.6701 9.97664C21.65 10.1949 21.6731 10.4151 21.7382 10.6244C21.8033 10.8337 21.909 11.0282 22.0493 11.1966L28.0994 18.4633H8.33268C7.89065 18.4633 7.46673 18.6389 7.15417 18.9514C6.84161 19.264 6.66602 19.6879 6.66602 20.1299C6.66602 20.572 6.84161 20.9959 7.15417 21.3084C7.46673 21.621 7.89065 21.7966 8.33268 21.7966Z"
                                                        fill="white"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid-image-wrapper">
                                        <img src="" data-src="<?php echo esc_url($image_url); ?>" alt="Image"
                                            class="tRLtc lazyload xyz" />
                                    </div>
                                </a>
                                <?php
                            }
                        }
                        ?>
                    </div>
                    <div class="iDzey GHuNS">
                        <!-- <svg width="100" height="100" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                            stroke="#000000">
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(1 1)" stroke-width="2">
                                    <circle stroke-opacity=".5" cx="18" cy="18" r="18" stroke="lightgrey"></circle>
                                    <path stroke="grey" d="M36 18c0-9.94-8.06-18-18-18">
                                        <animateTransform attributeName="transform" type="rotate" from="0 18 18"
                                            to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                                    </path>
                                </g>
                            </g>
                        </svg> -->
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="101px" height="101px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" r="30" stroke="#f8f8f8" stroke-width="2" fill="none"/>
                            <circle cx="50" cy="50" r="30" stroke="#ff8bfe" stroke-width="2" stroke-linecap="round" fill="none">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.4925373134328357s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"/>
                                <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.4925373134328357s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"/>
                            </circle>
                        </svg>
                    </div>
                </div>

                <?php
                $post_count = $query->total_results;
                $page_count = ceil($post_count / $args['per_page']);

                $template_args['pagination'] = [
                    'pages_id' => 'pagination',
                    'load_more' => true,
                    'options' => [
                        'base' => '%_%',
                        'format' => '?page=%#%',
                        'prev_next' => false,
                        'current' => 1,
                        'total' => $page_count,
                    ],
                ];
                require $GLOBALS['fansocial_settings']['FANSOCIAL_DIR_PATH'] . 'templates/template-parts/template-part-page-navigation.php';
                ?>

                <!-- Off Canvas Filters -->
                <div class="DuKSh EJVsl OtrSK cNGwx slidein-popup" id="slidein-popup">
                    <!-- wrapper -->
                    <div class="GodhZ gsCWf EJVsl CzomY">
                        <!-- container -->
                        <div class="ExGby HruDj">
                            <!-- header -->
                            <div class="tSrNa gsCWf EJVsl zsSLy">
                                <h1 class="USKIn">Creators</h1>

                                <!-- buttons -->
                                <div class="wcrwV gsCWf EJVsl">
                                    <div class="AYaOY TNIio UYvZu gsCWf EJVsl OtrSK DeYlt">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- main-section -->
                            <div class="TImJU">
                                <form id="ajax-filters">
                                    <input type="hidden" id="page_num" name="ajax_filter[page]" value="1">
                                    <div class="sort-filter rAHnB">
                                        <h5>Sort by</h5>
                                        <label class="filter-container">
                                            <select class="ajax-filter-trigger-change nice-select"
                                                name="ajax_filter[sort]" id="ajax_filter_field_sort">
                                                <option value="">Popularity</option>
                                                <option value="newest">Newest</option>
                                                <option value="oldest">Oldest</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="tags-filter rAHnB">
                                        <h5>Search by Tags</h5>
                                        <label class="filter-container">
                                            <input placeholder="Search tags" class="search-tags">
                                            <div type="submit" class="icon-container" id="search-icon-container">
                                                <div class="svg-wrapper">
                                                    <svg class="icon-search" alt="Search"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path
                                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </label>
                                        <?php
                                        $tags = array(
                                            'taga' => 'TagA',
                                            'tagb' => 'TagB',
                                            'tagc' => 'TagC',
                                            'tagd' => 'TagD',
                                            'tage' => 'TagE',
                                            'tagf' => 'TagF',
                                            'tagg' => 'TagG',
                                            'tagh' => 'TagH',
                                            'tagi' => 'TagI',
                                            'tagj' => 'TagJ',
                                            'tagk' => 'TagK',
                                            'tagl' => 'TagL',
                                            'tagm' => 'TagM',
                                            'tagn' => 'TagN',
                                            'tago' => 'TagO',
                                            'tagp' => 'TagP',
                                            'tagq' => 'TagQ',
                                            'tagr' => 'TagR',
                                            'tags' => 'TagS',
                                            'tagt' => 'TagT',
                                            'tagu' => 'TagU',
                                            'tagv' => 'TagV',
                                            'tagw' => 'TagW',
                                            'tagx' => 'TagX',
                                            'tagy' => 'TagY',
                                            'tagz' => 'TagZ',
                                        );
                                        ?>
                                        <div class="filter-tag-container" data-simplebar>
                                            <?php
                                            foreach ($tags as $tag => $label) {
                                                ?>
                                                <label class="filter-container">
                                                    <input type="checkbox" class="ajax-filter-trigger-input"
                                                        name="ajax_filter[tags][]"
                                                        id="ajax_filter_field_tag_<?php echo esc_attr($tag); ?>"
                                                        value="<?php echo esc_attr($tag); ?>">
                                                    <?php echo esc_html($label); ?>
                                                </label>
                                                <?php
                                            }
                                            ?>
                                        </div>
                                    </div>
                                    <div class="price-filter rAHnB">
                                        <h5>Filter by Age</h5>
                                        <label class="filter-container">
                                            <div class="filter-wrapper">
                                                <div class="values">
                                                    <span id="range1">
                                                        0
                                                    </span>
                                                    <span> &dash; </span>
                                                    <span id="range2">
                                                        100
                                                    </span>
                                                </div>
                                                <div class="filter-input-container">
                                                    <div class="slider-track tRLtc"></div>
                                                    <input type="range" min="0" max="100" value="0" id="slider-1"
                                                        oninput="slideOne()" class="filter-age">
                                                    <input type="range" min="0" max="100" value="100" id="slider-2"
                                                        oninput="slideTwo()" class="filter-age">
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="gender-filter rAHnB">
                                        <h5>Search by Gender</h5>
                                        <label class="filter-container">
                                            <select class="ajax-filter-trigger-change nice-select"
                                                name="ajax_filter[gender]" id="ajax_filter_field_gender">
                                                <option value="">Select Option</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="notsay">Not To Say</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="country-filter rAHnB">
                                        <h5>Search by Country</h5>
                                        <label class="filter-container">
                                            <select class="ajax-filter-trigger-change nice-select"
                                                name="ajax_filter[country]" id="ajax_filter_field_country">
                                                <option value="">Select Option</option>
                                                <option value="pakistan">Pakistan</option>
                                                <option value="australia">Australia</option>
                                                <option value="india">India</option>
                                            </select>
                                        </label>
                                    </div>
                                    <!-- <button type="submit" class="apply">Apply Selection</button>-->
                                </form>
                                <br>
                                <hr>
                                <p style="text-align: center;margin: 0">OR</p>
                                <hr>
                                <br>
                                <div class="search-filter rAHnB">
                                    <h5>Search by</h5>
                                    <label class="filter-container">
                                        <input class="ajax-filter-trigger-delayed-input" name="ajax_search"
                                            id="ajax_search">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div><!-- end inner-container -->
    </div><!-- end outer-container -->
</div><!-- end entry -->
<?php
get_footer();