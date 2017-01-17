var init;

$(document).ready(function() {
	$('.sidebar-toggle').click(function() {
		if(init) {
			$('body').toggleClass('sidebar-on sidebar-off');
		} else {
			$('body').addClass('sidebar-on');
			init = 1;
		}
	});
	
	$('.search-open').click(function() {
		$('.search-form').addClass('search-on');
		$('.search-form').children('input').focus();
	});
	$('.search-close').click(function() {
		$('.search-form').removeClass('search-on');
	});

	$('.dropdown').on('show.bs.dropdown', function() {
		$('.sidebar').css('height', '100%');
	});
	$('.dropdown').on('hide.bs.dropdown', function() {
		$('.sidebar').css('height', '50px');
	})

	$('.form-control').focus(function() {
		$(this).siblings('label').addClass('on');
	});
	$('.form-control').blur(function() {
		if( $(this).val().length < 1) {
			$(this).siblings('label').removeClass('on');
		} else {
			$(this).siblings('label').addClass('on');
		}
	});

	$('.item-more').click(function() {
		$(this).addClass('loading');
	});
});