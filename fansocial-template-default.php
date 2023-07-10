<?php
/**
 * Template: Default
 */

get_header();
?>

   <!-- entry -->
   <div class="MfdVP">

      <!-- outer-container -->
      <div class="pZBLj">

         <!-- inner-container & box-width -->
         <div class="ifugj <?php echo apply_filters( 'fansocial_boxed_width_class', 'bx_1200' ); ?>">

            <!-- the title -->
            <div class="ScBED">
               <h1><?php _e( apply_filters( 'the_title', 'The title' ) ) ?></h1>
            </div>

            <!-- custom html element container -->
            <div class="unq_">
               
               <p>Hello World</p>

            </div><!-- end custom html element container -->

         </div><!-- end inner-container -->

      </div><!-- end outer-container -->

   </div><!-- end entry -->

<?php get_footer(); ?>


