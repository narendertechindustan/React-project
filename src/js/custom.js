
   jQuery('.carousel').carousel({
        interval: 5000 //changes the speed
    })
 
		$(document).ready(function(){
			var devident='';
			var ww = $(window).width();
			if(ww>=1200){devident=4;}
			else if(ww<=1199 && ww>=992){devident=4;}
			else if(ww<=991 && ww>=768){devident=3;}
			else if(ww<=767 && ww>=481){devident=2;}
			else if(ww<=480){devident=1;}
			var width_container = $(".slider_test").width()/devident;
			jQuery('.slider4').bxSlider({
				auto: true,
				slideWidth: width_container,
				minSlides: 1,
				maxSlides:devident,
				moveSlides: 1,
				slideMargin: 0
			});
		});
		
$(document).ready(function(){
 $('.cust-title').each(function() {
    var newText = ($(this).text()).substr(0, 18);
    $(this).text(newText+"...");       
});
});