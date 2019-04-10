<?php global $wp_query; if ( $wp_query->max_num_pages > 1 ) { ?>
<section class="post-navigation">
    <div class="container">
        <div class="columns">
            <div class="column has-text-left-desktop">
                <div class="nav-previous">
                <?php next_posts_link(sprintf( __( '%s older', 'wpgst' ), '<span class="icon-arrow-left"></span>' ) ) ?>
                </div>
            </div>
            <div class="column has-text-right-desktop">
                <div class="nav-next"><?php previous_posts_link(sprintf( __( 'newer %s', 'wpgst' ), '<span class="icon-arrow-right"></span>' ) ) ?></div>
            </div>
        </div>
    </div>
</section>
<?php } ?>