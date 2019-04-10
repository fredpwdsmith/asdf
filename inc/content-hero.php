<?php
    $featured_img_url = get_the_post_thumbnail_url( get_the_ID(), 'wpgst-hero' );
    $default_img_url = get_field('general_hero_image', 'option');
    $usedefault = get_field('hero_image_default');
    if ($featured_img_url) { ?>
            <div class="hero image-cover lazy" data-src="<?php echo $featured_img_url; ?>"></div>
    <?php } elseif
        ($usedefault && $default_img_url) { ?>
            <div class="hero image-cover lazy" data-src="<?php echo $default_img_url; ?>"></div>
    <?php } else {

    }
 ?>
