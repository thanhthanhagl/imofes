jQuery(function($) {
//
// 変数を定義
//------------------------------------
	var $body = $('body'),
		$header = $('.l-header'),
		$menuButton = $('.l-menu'),
		$headerNav = $('.l-header__nav'),
		desktopMode = ($menuButton.css('display') != 'none');
		function headerHeight() {
			$headerHeight = $header.outerHeight();
		}
		headerHeight();

//
// viewport resize
//------------------------------------
$(window).on('resize orientationchange', function() {
	if ($menuButton.css('display') == 'none') {
		if (!desktopMode) {
			desktopMode = true;
			$('head').find('meta[name="viewport"]').attr('content', 'width=1240');
		}
	} else {
		if (desktopMode) {
			desktopMode = false;
			$('head').find('meta[name="viewport"]').attr('content', 'width=device-width,initial-scale=1,user-scalable=yes');
		}
	}
	$(this).trigger('scroll');
}).trigger('resize');

//
// スムーススクロール関係js ここから
//------------------------------------
	$(window).on('resize orientationchange', function() {
		// ページ外リンクで#の位置へ飛ぶ
		if (location.hash) {
			var targetOffset = $(location.hash).offset().top - $headerHeight;
			$('body,html').stop().animate({
				scrollTop: targetOffset
			}, 0);
		}
	})


});
