$(document).ready(function(){
			var link = $(".menu-link");
			var link_active = $(".menu-link_active");
			var menu = $(".menu");

			link.click(function(){
			  link.toggleClass("menu-link_active");
			  menu.toggleClass("menu_active");

			});
			link_active.click(function(){
				link.removeClass("menu-link_active");
			});
		});


$(document).ready(function(){
	$("#phone").mask("+7-(999)-999-99-99");
});


$(document).ready(function(){
	$('.slider').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

	});

});

