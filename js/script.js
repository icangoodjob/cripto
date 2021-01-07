$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		slidesToScroll:2,
		speed:300,
		easing:'ease',
		infinite:false,
		autoplay:false,
		adaptiveHeight:true,
		autoplaySpeed:0,
		draggable:false,
		vertical:false,
	});
});
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

