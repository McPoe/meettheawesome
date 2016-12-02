$(document).ready(function(){

	$('span').click(function(event){
		$(this).addClass('star');
		$('.star').addClass('star-new-one');
		$(this).prevAll().addClass('star-new-one');
	});

	$('span').click(function(event){
		$(this).nextAll().removeClass('star-new-one');
	});

});
