<?php
$images = get_field('slider_images');
$size = 'wpgst-hero';
if( $images ): ?>

<div id="newhero">
  <div class="ct-header ct-header--slider ct-slick-custom-dots" id="home">
    <div class="ct-slick-homepage" data-arrows="true" data-autoplay="true">
    <?php $i=0;
    foreach( $images as $image ): ?>
        <div class="ct-header tablex item" data-background="<?=$image['sizes']['wpgst-hero']?>" data-id="<?=$i;?>">
          <div class="ct-u-display-tablex"></div>
        </div>
    <?php $i++;
    endforeach; ?>
    </div><!-- .ct-slick-homepage -->
  </div><!-- .ct-header -->
</div>
<?php endif; ?>