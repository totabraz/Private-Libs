/*Scroll transition to anchor*/

$(".toScroll").on('click',function(e) {
	var url = e.target.href;
	var hash = url.substring(url.indexOf("#")+1);
	
	//The divisor'll make the scrolling faster (number + X) or slower (number-X).. 
	var height = ( $('#'+hash).offset().top/3);
	$('html, body').animate({
		scrollTop: $('#'+hash).offset().top
	}, height);
	return false;
});
