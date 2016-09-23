$(document).ready(function(){
	
	// Fit Text
	$(".responsive_headline").fitText();
	$(".casestudy_headline").fitText(.8);
	
	// Navigation Overlay
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass('nav-open');
	});
	
	//Industries
	$('.grid li .open').on('click', function() {
		event.preventDefault();
		$('.grid').addClass('industry-expanded');
   		$(this).parent().addClass('expanded').siblings().removeClass('expanded');
   		$('body').bind('touchmove', function(e){e.preventDefault()});
   		$('html, body').animate({
            scrollTop: $(".grid").offset().top
        }, 500);
	});
	$('.grid li .close').on('click', function() {
		event.preventDefault();
   		$('.grid li').removeClass('expanded');
   		$('.grid').removeClass('industry-expanded');
   		$('body').unbind('touchmove');
	});
	
	// Parallax
	$(window).scroll( function() {
		var fromtheTop = $(this).scrollTop();
		var newTop = (12.5 + fromtheTop * .025)+'%';
		var newBottom = (90 + fromtheTop * .025)+'%';
		//$('.hero').css({top: (fromtheTop * .4)});
		$('.hero').css({'transform': 'translate3d( 0px, ' + fromtheTop * .4 + 'px, 0px)'});
		$('.hero-solutions').css({top: (fromtheTop * .4)});
		$('.block h4').css({top: newTop});
		$('.home .purple').css('backgroundPosition', 'center ' + (90 + fromtheTop * .015)+'%');
	});
	
	// Slideshows
	$('.quotes').cycle({
		slides: '.quote',
		fx: 'fade',
		timeout: 8000,
		speed: 1200,
		pauseOnHover: true,
		pager: '.pager',
	});
	
	// Bios
	$(window).on('resize load', function() {
		if ($(window).width() < 767) {
		   $('.bios').cycle({
				slides: '.bio',
				fx: 'fade',
				swipe: true,
				next: '.next',
				prev: '.prev',
				timeout: 0,
				autoHeight: 'container',
			});
		} else {
			$('.bios').cycle('destroy');
		}
	});

	
	// Waypoints
	var waypoints = $('.waypoint').waypoint(function(direction) {
		$(this).toggleClass('active'); 
		$(this).trigger('classChange');
	}, {
		triggerOnce: true,
        offset: '75%'
	});	
	
	var waypoints = $('footer').waypoint(function(direction) {
		$(this).toggleClass('active'); 
		$(this).trigger('classChange');
	}, {
		triggerOnce: true,
        offset: '100%'
	});	
	
	// Anystretch
	$('.hero').anystretch('',{elPosition: 'absolute'});
	$('.colimg').anystretch();
			
});

$(window).load(function() {
    $('body').addClass('loaded');
});