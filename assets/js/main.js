/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center'
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Events Slideshow Gallery.
	var $slideshow = $('#events-slideshow');

	if ($slideshow.length > 0) {
		var images = [
			'images/SAS Club members.png',
			'images/Party E.png',

			'images/Party E.png'
		];

		var current = 0;

		setInterval(function () {
			current = (current + 1) % images.length;

			// Using template literals to safely wrap paths with spaces
			//var imageUrl = images[current];
			//$slideshow.css('background-image', 'url("' + imageUrl + '")');
			// Correctly using template literals to safely wrap paths with spaces
			const imageUrl = images[current];
			$slideshow.css('background-image', `url("${imageUrl}")`);
		}, 3000); // Changes every 3 seconds
	}

	// This Month Showcase Carousel (Glide.js)
	if ($('#showcase-glide').length > 0) {
		var glide = new Glide('#showcase-glide', {
			type: 'carousel',
			perView: 4,
			focusAt: 'center',
			autoplay: 3500,
			animationDuration: 800,
			hoverpause: true,
			breakpoints: {
				800: { perView: 2 },
				480: { perView: 1 }
			}
		});

		glide.mount();
	}

})(jQuery);