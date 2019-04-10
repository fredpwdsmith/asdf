'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Custom JS.
 *
 * Custom JS scripts.
 *
 * @since 1.0.0
 */
document.addEventListener('DOMContentLoaded', function () {

	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if (0 < $navbarBurgers.length) {

		// Add a click event on each of them
		$navbarBurgers.forEach(function ($el) {
			$el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});

(function ($) {
	$(function () {
		$('.lazy').Lazy({

			// your configuration goes here
			scrollDirection: 'vertical',
			effect: 'fadeIn',
			visibleOnly: true,
			onError: function onError(element) {
				console.log('error loading ' + element.data('src'));
			},
			onFinishedAll: function onFinishedAll() {
				console.log('lazy load finished');
			}
		});

		//SMOOTH SCROLL TO LINKS
		var target = '';
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
				target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 60
					}, 1000);
					return false;
				}
			}
		});

		// Navbar Tweaks
		// add active class to parent menu items
		$('.navbar-dropdown a.is-active').closest('.has-dropdown').find('a:first').addClass('active');
		$('a.navbar-item:contains("Blog")').addClass('blog');
		$('a.navbar-item:contains("Events")').addClass('events');

		//Stop blog from showing active when on events pages
		$(function () {

			//add active class to main menu if product
			var events = $('a.navbar-item.events');
			var blog = $('a.navbar-item.blog');
			var loc = window.location.href;

			if (/events/.test(loc)) {
				events.addClass('active');
				blog.removeClass('is-active');
			}
		});

		// Search button open/close search modal
		$('a.search-toggle').click(function (e) {
			e.preventDefault();
			$('.search-wrapper').toggleClass('search--active');
			$('#s').focus();
		});

		$('a.search-close').click(function (e) {
			e.preventDefault();
			$('.search-wrapper').removeClass('search--active');
		});

		$('.event-image img').each(function () {
			$(this).parent().css('backgroundImage', 'url(' + $(this).attr('src') + ')');
			$(this).remove();
		});
		$('.card-image img').each(function () {
			$(this).parent().css('backgroundImage', 'url(' + $(this).attr('src') + ')');
			$(this).remove();
		});

		// $( '.hero' ).backstretch();

		$(function () {

			//add active class to main menu if product
			var events = $('a.navbar-item.events');
			var blog = $('a.navbar-item.blog');
			var loc = window.location.href;

			if (/events/.test(loc)) {
				events.addClass('active');
				blog.removeClass('is-active');
			}
		});

		//Gravity form Validation Div Hack
		$(function () {
			var verror = $('.validation_error');
			if (0 < verror.length) {
				$(verror).appendTo('.validation-message');
			}
		});
	});

	$(document).ready(function () {
		if (0 < $('[data-background]').length) {
			$('[data-background]').each(function () {
				var $background, $backgroundmobile, $this;

				$this = $(this);
				$background = $(this).attr('data-background');
				$backgroundmobile = $(this).attr('data-background-mobile');
				if ('#' === $this.attr('data-background').substr(0, 1)) {
					return $this.css('background-color', $background);
				} else if ($this.attr('data-background-mobile') && device.mobile()) {
					return $this.css('background-image', 'url(' + $backgroundmobile + ')');
				} else {
					return $this.css('background-image', 'url(' + $background + ')');
				}
			});
		}
	});
	$(document).ready(function () {
		$('.ct-slick-homepage').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
			infinite: true,
			cssEase: 'linear',
			prevArrow: '<button type="button" class="hslick-prev">Previous</button>',
			nextArrow: '<button type="button" class="hslick-next">Next</button>'
		});
	});
})(jQuery);

var wpgst = function ($, window, document) {
	'use strict';

	var wpgst = {},
	    components = { documentReady: [], windowLoad: [] };

	jQuery(document).ready(documentReady);
	jQuery(window).load(windowLoad);

	function documentReady(context) {
		context = (typeof context === 'undefined' ? 'undefined' : _typeof(context)) == (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) ? $ : context;
		components.documentReady.forEach(function (component) {
			component(context);
		});
	}

	function windowLoad(context) {
		context = 'object' == (typeof context === 'undefined' ? 'undefined' : _typeof(context)) ? $ : context;
		components.windowLoad.forEach(function (component) {
			component(context);
		});
	}

	wpgst.setContext = function (contextSelector) {
		var context = $;
		if ((typeof contextSelector === 'undefined' ? 'undefined' : _typeof(contextSelector)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
			return function (selector) {
				return jQuery(contextSelector).find(selector);
			};
		}
		return context;
	};

	wpgst.components = components;
	wpgst.documentReady = documentReady;
	wpgst.windowLoad = windowLoad;

	return wpgst;
}(jQuery, window, document);

//////////////// Masonry
wpgst = function (wpgst, $, window, document) {
	'use strict';

	var documentReady = function documentReady($) {
		jQuery('.masonry').each(function () {
			var masonry = jQuery(this);
			var masonryContainer = masonry.find('.masonry__container'),
			    filters = masonry.find('.masonry__filters'),


			// data-filter-all-text can be used to set the word for "all"
			filterAllText = _typeof(filters.attr('data-filter-all-text')) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) ? filters.attr('data-filter-all-text') : 'All',
			    filtersList;

			// If a filterable masonry item exists
			if (masonryContainer.find('.masonry__item[data-masonry-filter]').length) {

				// Create empty ul for filters
				filters.append('<ul></ul>');
				filtersList = filters.find('> ul');

				// Add a filter "all" option
				filtersList.append('<li class="active" data-masonry-filter="*">' + filterAllText + '</li>');

				// To avoid cases where user leave filter attribute blank
				// only take items that have filter attribute
				masonryContainer.find('.masonry__item[data-masonry-filter]').each(function () {
					var masonryItem = jQuery(this),
					    filterString = masonryItem.attr('data-masonry-filter'),
					    filtersArray = [];

					// If not undefined or empty
					if ((typeof filterString === 'undefined' ? 'undefined' : _typeof(filterString)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && '' !== filterString) {

						// Split tags from string into array
						filtersArray = filterString.split(',');
					}
					jQuery(filtersArray).each(function (index, tag) {

						// Slugify the tag

						var slug = wpgst.util.slugify(tag);

						// Add the filter class to the masonry item

						masonryItem.addClass('filter-' + slug);

						// If this tag does not appear in the list already, add it
						if (!filtersList.find('[data-masonry-filter="' + slug + '"]').length) {
							filtersList.append('<li data-masonry-filter="' + slug + '">' + tag + '</li>');
						}
					});
				});
			}

			//End of "if filterable masonry item exists"
		});
	};

	var windowLoad = function windowLoad() {
		jQuery('.masonry').each(function () {
			var masonry = jQuery(this).find('.masonry__container');

			masonry.on('layoutComplete', function () {
				masonry.addClass('masonry--active');
			});

			masonry.isotope({
				itemSelector: '.masonry__item',
				masonry: {
					columnWidth: '.masonry__item'
				}
			});
		});

		setInterval(function () {
			jQuery(window).trigger('resize');
		}, 1500);

		/**
   * Load more stuff
   */
		jQuery('.load-more').on('click', function (e) {
			e.preventDefault();

			var clicks,
			    me = jQuery(this),
			    oMsg;

			me.attr('disabled', true);

			// set loading status
			jQuery('span', me).text(me.attr('data-loading-text'));

			// perform ajax request
			jQuery.ajax({
				url: me.attr('href'),
				type: 'GET',
				dataType: 'HTML'
			}).done(function (result) {
				var items = jQuery(result).find('.masonry__container.blog-load-more > .masonry__item');
				items.imagesLoaded(function () {
					jQuery('.background-image-holder', items).each(function () {
						var imgSrc = jQuery(this).children('img').attr('src');
						jQuery(this).css('background', 'url("' + imgSrc + '")').css('background-position', 'initial').css('opacity', '1');
					});
					jQuery('.single p:has(iframe)', items).fitVids();
					jQuery('.masonry__container.blog-load-more').isotope('insert', items);
					me.remove();
					jQuery(window).trigger('resize');
				});
			}).fail(function () {
				alert('fail');
			});

			return false;
		});

		jQuery('.masonry__filters li').on('click', function () {
			var masonryFilter = jQuery(this);
			var masonryContainer = masonryFilter.closest('.masonry').find('.masonry__container');
			var filterValue = '*';
			if ('*' !== masonryFilter.attr('data-masonry-filter')) {
				filterValue = '.filter-' + masonryFilter.attr('data-masonry-filter');
			}
			jQuery('.masonry__filters li').removeClass('active');
			masonryFilter.addClass('active');
			masonryContainer.removeClass('masonry--animate');
			masonryContainer.isotope({ filter: filterValue });
		});
	};

	wpgst.masonry = {
		documentReady: documentReady,
		windowLoad: windowLoad
	};

	wpgst.components.documentReady.push(documentReady);
	wpgst.components.windowLoad.push(windowLoad);
	return wpgst;
}(wpgst, jQuery, window, document);