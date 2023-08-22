<?php
get_header();

$args        = array(
	'per_page' => '12',
    'order_by' => 'popularity'
);
$query = search_users( $args );
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
                        <h1><?php _e( apply_filters( 'the_title', 'Creators' ) ) ?></h1>
                        <p id="post-count">
                            <?php
                            echo 'Showing ' . ( ( 1 - 1 ) * $args['per_page'] + 1 ) . '-' . ( ( 1 - 1 ) * $args['per_page'] + count( $query->results ) ) . ' of ' . $query->total_results . ' results by Popularity';
                            ?>
                        </p>
                        <!-- button-container -->
                        <div class="filter-button-container vEpUv gsCWf">
                            <button class="filter DeYlt" onclick="initiate_slidein({
                             'target': '#off-canvas-filters'
                            });">
                                <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z" fill="#000000" class="tRLtc"></path>
                                </svg>
                                <span>Filter</span>
                            </button>
                            <button class="reset DeYlt reset-ajax-filter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                    <path fill="#000000" fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
                                    <path fill="#000000" d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
                                </svg>
                                <span>Reset</span>
                            </button>
                            <div class="active-filter-container">
                                <button class="tag filter active-class filter-template" data-targetId="">
                                    <span></span>
                                    <div class="cross-container remove-filter">
                                        <svg fill="#000000" width="18px" height="18px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" class="tRLtc"></path>
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
                            if ( $query->have_results ) {
	                            // Loop through the posts and generate the HTML
	                            foreach ( $query->results as $result ) {
		                            // $user_ID          = $result['user_ID'];
		                            // $profile_headshot = $result['profile_headshot'];
		                            // $profile_tags     = $result['profile_tags'];
		                            $profile_username = $result['profile_username'];
		                            $profile_image    = $result['profile_feature_URL'];
		                            $image_url        = get_media_item_image( $profile_image, 300 );
		                            $image_url        = $image_url[ 'image_url' ] ?? '';
		                            ?>
                                    <div class="grid-item">
                                        <div class="grid-absolute-wrapper">
                                            <section class="DuPTe zaSgn">
                                                <h2>Creator Name</h2>
                                                <span><?php echo esc_html( $profile_username ); ?></span>
                                            </section>
                                        </div>
                                        <img src="" data-src="<?php echo esc_url( $image_url ); ?>" alt="Image" class="tRLtc lazyload xyz"/>
                                    </div>
		                            <?php
	                            }
                            }
                            ?>
                        </div>
                        <div class="iDzey GHuNS">
                            <svg width="100" height="100" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18" stroke="lightgrey"></circle><path stroke="grey" d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g>
                            </svg>
                        </div>
                    </div>

                    <!-- Pagination container -->
                    <div id="pagination">
                        <?php
                        $post_count    = $query->total_results;
                        $page_count    = ceil( $post_count / $args['per_page'] );
                        echo paginate_links( array(
	                        'base'      => '%_%',
	                        'format'    => '?page=%#%',
	                        'prev_next' => false,
	                        'current'   => 1,
	                        'total'     => $page_count
                        ) );
                        ?>
                    </div>

                    <!-- Off Canvas Filters -->
                    <div id="off-canvas-filters" class="fsImK">
                        <div class="ORyHK SVfWr"></div>
                        <div class="gsCWf EJVsl zsSLy cZDiW">
                            <h3>Creators</h3>
                            <svg class="SVfWr ZAGSL UeEsp OtrSK EJVsl" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <form id="ajax-filters">
                            <input type="hidden" id="page_num" name="ajax_filter[page]" value="1">
                            <div class="sort-filter rAHnB">
                                <h5>Sort by</h5>
                                <label class="filter-container">
                                    <select class="ajax-filter-trigger-change nice-select" name="ajax_filter[sort]" id="ajax_filter_field_sort">
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
                                            <svg class="icon-search" alt="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
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
                                    foreach ( $tags as $tag => $label ) {
                                        ?>
                                        <label class="filter-container">
                                            <input type="checkbox"
                                                   class="ajax-filter-trigger-input"
                                                   name="ajax_filter[tags][]"
                                                   id="ajax_filter_field_tag_<?php echo esc_attr( $tag ); ?>"
                                                   value="<?php echo esc_attr( $tag ); ?>">
                                            <?php echo esc_html( $label ); ?>
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
                                            <input type="range" min="0" max="100" value="0" id="slider-1" oninput="slideOne()" class="filter-age">
                                            <input type="range" min="0" max="100" value="100" id="slider-2" oninput="slideTwo()" class="filter-age">
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div class="gender-filter rAHnB">
                                <h5>Search by Gender</h5>
                                <label class="filter-container">
                                    <select class="ajax-filter-trigger-change nice-select" name="ajax_filter[gender]" id="ajax_filter_field_gender">
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
                                    <select class="ajax-filter-trigger-change nice-select" name="ajax_filter[country]" id="ajax_filter_field_country">
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
                                <input class="ajax-filter-trigger-delayed-input" name="ajax_search" id="ajax_search">
                            </label>
                        </div>
                    </div>

                    <!-- load-more-button -->
                    <button class="KRaVJ UJQCM DeYlt HruDj">
                        <span>Load more</span>
                    </button>
                </div>


            </div><!-- end inner-container -->
        </div><!-- end outer-container -->
    </div><!-- end entry -->
<?php
get_footer();