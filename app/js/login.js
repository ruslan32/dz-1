$(document).ready(function(){
    $('#user, #password').blur(function () {
		if ($(this).val().length == 0) {
			$(this)
				.addClass('error show');
			$(this).qtip({
			
				content: {
					attr: 'qtip-content'
				},
				show: {
					event: 'show'
				},
				hide: {
					event: "keydown hideTooltip click"
				},
				position: {
					my:'right center',
					at: 'left center'
				},
				style: {
					classes: 'qtip-red',
					tip: {
						height: 10,
						width: 16
					  }
				}
			}).trigger('show');
		} else {
			$(this)
				.addClass('not-error');
			console.log("not-error");
		}
	});
	$('input[type="text"], textarea[type="password"]').focus(function () {
		$(this)
			.removeClass('error')
	});
	$('button[type="submit"]').click(function (event) {
		//	event.preventDefault();
		if ($(".not-error").length == 3) {
			location.reload();
		} else {
			event.preventDefault();
			$('input[type="text"], input[type="password"]').addClass('error show');
			console.log("errore");
		}
	});
	$('input, textarea').placeholder();
});	