$(document).ready(function () {
	$('.project').click(function (event) {
		event.preventDefault();
		$('.uploat').addClass('uploat-show');
		$('.saver').addClass('block');
	});
	$('.uploat-close').click(function (event) {
		event.preventDefault();
		$('.uploat').removeClass('uploat-show');
		$('.saver').removeClass('block');
		$('.upload-name, .upload-text').qtip('destroy', true);
	});
	$('input[type="text"], textarea[type="text"],[type="password"]').blur(function () {
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
	$('input[type="text"], textarea[type="text"],[type="password"]').focus(function () {
		$(this)
			.removeClass('error');
		$('input[type="text"], textarea[type="text"],[type="password"]').qtip('toggle', true);
	});
	$('button[type="submit"]').click(function (event) {
		//	event.preventDefault();
		if ($(".not-error").length == 3) {
			location.reload();
		} else {
			event.preventDefault();
			$('input[type="text"], textarea[type="text"],[type="password"]').addClass('error show');
			console.log("errore");
		}
	});
	$('input, textarea').placeholder();
});