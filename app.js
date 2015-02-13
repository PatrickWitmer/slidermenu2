document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );

  	$('nav').animate({
			left: '0px'
			}, 200);
	$('body').animate({
			left: '285px'
		}, 200);

});

var main = function() {



	$('.menu-close').click(function() {
		$('nav').animate({
			left: '-285px'
			}, 200);
	$('body').animate({
			left: '0px'
		}, 200);

	$("#nav-toggle").toggleClass( "active" );
	});



};

$(document).ready(main);





