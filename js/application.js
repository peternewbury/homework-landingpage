$(document).ready(function() {
	// on click of .readmore
	$('.readmore a').on('click', function() {
		event.preventDefault();

		// a) add .hide to .readmore
		$(this).parent().addClass('hide');

		// b) remove .hide from other elements within article
		$(this).parent().siblings('.readless, .show-this-on-click').removeClass('hide');
	});

	// on click of readless
	$('.readless a').on('click', function() {
		event.preventDefault();

		// add .hide to .readless
		$(this).parent().addClass('hide');

		// add .hide to .show-this-on-click
		$(this).parent().siblings('.show-this-on-click').addClass('hide');

		// remove .hide from .readmore
		$(this).parent().siblings('.readmore').removeClass('hide');
	});

	// on click of .learnmore
	$('.learnmore').on('click', function() {
		event.preventDefault();

		// a) hide .learnmore
		$(this).addClass('hide');

		// b) remove .hide from #learnmoretext
		$('#learnmoretext').removeClass('hide');
	});
});