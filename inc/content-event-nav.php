<?php ?>

<section class="post-navigation">
    <div class="container">
        <div class="columns">
            <div class="column has-text-left-desktop">
                <?php previous_post_link('%link', '<span class="h5"><span class="icon-arrow-left"></span> '. esc_html__('Previous Event', 'wpgst') .'</span>'); ?>
            </div>
            <div class="column has-text-centered-desktop">
                <a href="<?php bloginfo( 'url' ); ?>/events">
                    <span class="h5"><?php esc_html_e('All Events', 'wpgst'); ?></span>
                </a>
            </div>
            <div class="column has-text-right-desktop">
                <?php next_post_link('%link', '<span class="h5">'. esc_html__('Next Event', 'wpgst') .' <span class="icon-arrow-right"></span></span>' ); ?>
            </div>
        </div>
    </div>
</section>