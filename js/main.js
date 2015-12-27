$('.bxslider').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true
});

$(function() {
	$("#tabs").tabs();
});

$(document).ready(function(){
  $('.slider').bxSlider({
    slideWidth: 1100 / 5,
    minSlides: 2,
    maxSlides: 5,
    moveSlides: 1,
    // slideMargin: 10
  });
});