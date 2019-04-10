<?php
    $featured_img_url =  get_field('events_hero_image', 'option');
    if ($featured_img_url) { ?>
            <div class="hero image-cover lazy" data-src="<?=$featured_img_url; ?>"></div>
    <?php } ?>