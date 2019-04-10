<?php
    $featured_img_url =  get_field('blog_hero_image', 'option');
    if ($featured_img_url) { ?>
            <div class="hero image-cover" style="background-image: url(<?php echo $featured_img_url; ?>);"></div>
    <?php } ?>