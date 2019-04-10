<?php ?>

<section class="post-navigation">
    <div class="container">
        <div class="columns">
            <div class="column has-text-left-desktop">
                <?php previous_post_link('%link', '<span class="h5"><span class="icon-arrow-left"></span> '. esc_html__('Previous Post', 'wpgst') .'</span>'); ?>
            </div>
            <div class="column has-text-centered-desktop">
                <a href="<?php echo esc_url(get_permalink(get_option( 'page_for_posts' ))); ?>">
                    <span class="h5"><?php esc_html_e('All Posts', 'wpgst'); ?></span>
                </a>
            </div>
            <div class="column has-text-right-desktop">
                <?php next_post_link('%link', '<span class="h5">'. esc_html__('Next Post', 'wpgst') .' <span class="icon-arrow-right"></span></span>' ); ?>
            </div>
        </div>
    </div>
</section>