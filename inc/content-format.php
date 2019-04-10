<?php
$default_img_url =  get_field('blog_default_image', 'option');
$usedefault = get_field('event_blog_default'); ?>

<div class="content">
    <?php the_title('<h1 class="h2 blog-post__title">', '</h1>'); ?>
        <div class="blog-post__author">
            <span><?php esc_html_e('by', 'wpgst'); ?></span>
            <span class="h6"><?php the_author(); ?></span>
        </div>
        <?php if ( has_post_thumbnail() ) : ?>
        <a href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail('full'); ?>
       </a>
       <?php elseif ($usedefault && $default_img_url) : ?>
       <a href="<?php the_permalink(); ?>">
            <img src="<?=$default_img_url?>"/>
       </a>
    <?php endif; ?>
</div>