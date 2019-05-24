$(function(){
	var $window = $(window);
	//返回顶部
	var onScroll = function () {
		var wtop = $window.scrollTop();
		if (wtop > 1200) {
	   		$('.top').show();
		}
		else {
	    	$('.top').hide();
		}
	}
	$window.scroll(onScroll);
    onScroll();
	$('.top').click(function(){document.documentElement.scrollTop=0;document.body.scrollTop=0;return false});
})