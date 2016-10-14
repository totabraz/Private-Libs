/*Scroll transition to anchor*/
$(".toScroll").on('click',function(e) {
	var url = e.target.href;
	var hash = url.substring(url.indexOf("#")+1);
  var height = $('#'+hash).offset().top;
	var duration =  height/10;
  $('html, body').animate({
		scrollTop: height;
  }, duration);
  return false;
});
