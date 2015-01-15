var main = function() {

<<<<<<< HEAD
	$('.menu-open').click(function() {
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
=======
	$('.icon-menu').click(function() {
		$('.menu').animate({
			left: '0px'
		}, 200);

		$('body').animate({
			left: '285px'
		}, 200);
	});

	$('.icon-close').click(function() {
		$('.menu').animate({
			left: '-285px'
		}, 200);

		$('body').animate({
>>>>>>> dddda802730c86213eb6ea96fff9cc85b268ef9a
			left: '0px'
		}, 200);

	});


<<<<<<< HEAD

};

$(document).ready(main);





=======
};

$(document).ready(main);
>>>>>>> dddda802730c86213eb6ea96fff9cc85b268ef9a
