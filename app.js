document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

var main = function() {

	$('#nav-toggle').click(function() {
		$('nav').animate({
			left: '0px'
			}, 200);
	$('body').animate({
			left: '285px'
		}, 200);

	});

$('.menu-close').click(function() {
		$('nav').animate({
			left: '-285px'
			}, 200);
	$('body').animate({
			left: '0px'
		}, 200);

	});



};

$(document).ready(main);





