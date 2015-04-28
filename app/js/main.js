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
}
});
$(':input').focus(function() {
$(this)
.removeClass('error')
.next('span')
.remove();
	});
	$('#link, #up, #log').bind('submit', function(event) {
  $('[type=text], [type="password]').each(function() {
    if(!$(this).val().length) {
      event.preventDefault();
      $(this).addClass('error');
    }
  });	
});
	$('#link, #up, #log').bind('reset', function(event){	$('[type=text], [type=submit]').removeClass('error');
	});
});