$(function(){
	//返回顶部
	var onScroll = function () {
		var wtop = $window.scrollTop();
		if (wtop > 1200) {
	   		$('#top').show();
		}
		else {
	    	$('#top').hide();
		}
	}
	$('#top').click(function(){document.documentElement.scrollTop=0;document.body.scrollTop=0;return false});
})