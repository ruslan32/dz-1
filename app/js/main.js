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
	$(':input').blur(function() {
if ($(this).val().length == 0) {
$(this)
.addClass('error');
//.after('<span class="error">This field must ... </span>');
}
});
$(':input').focus(function() {
$(this)
.removeClass('error')
.next('span')
.remove();
	});
});