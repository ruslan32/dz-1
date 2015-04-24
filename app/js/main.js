$(document).ready(function(){
$('.project').click(function(event) {
	event.preventDefault();
  $('.uploat').addClass('uploat-show');
  $('.saver').addClass('block');
});
$('.uploat-close').click(function(event) {
	event.preventDefault();
	$('.uploat').removeClass('uploat-show');
	$('.saver').removeClass('block');
});	
	});

