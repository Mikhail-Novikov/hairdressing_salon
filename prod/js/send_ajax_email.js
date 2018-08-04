$(document).ready(function() {
	$(".js-ajax-form").submit(function() {
		var form = $(this);
		var error = false;
		form.find('input').each(function() {
			if ($(this).hasClass('error')) {
				error = true;
			} else if ($("#regl").attr("checked") != 'checked') {
				error = true;
			}
		});
		if (!error) {
			var data = form.serialize();
			$.ajax({
				type: 'POST',
				url: form.attr('action'),// данные с формы забираются и отправляются по адресу action из формы аяксом
				dataType: 'json',
				data: data,
				beforeSend: function(data) {
					form.find('input[type="submit"]').attr('disabled', 'disabled');
				},
				success: function(data) {
					$(".js-send-ok").fadeIn();
					$(".js-btn-form").fadeOut();
					$('.js-ajax-form').trigger('reset').find('input:not(.checkbox)').attr('class', '');
				},
				complete: function(data) {
					form.find('input[type="submit"]').prop('disabled', false);
				}
			});
		}
		return false;
	});
});