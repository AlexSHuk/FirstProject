$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(1000);
		get_current.show(1000);
	});

	$('#show_all').click(function() {
		$('.post').show(1000);
	});
})



$(document).ready(function(){
    
	var slider = $(".owl-carousel");
		slider.owlCarousel({
  		items:8,
  		loop:true,
  	});

$('#owl-next').click(function() {
    slider.trigger('next.owl.carousel');
})

$('#owl-prev').click(function() {
    slider.trigger('prev.owl.carousel');
})

});

if($(window).width() < 415){
	$(".owl-carousel").owlCarousel({
		items:3,
		loop:true,
	});
}