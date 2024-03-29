//slider
$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1.3,
          slidesToScroll:1,
          arrows: false,
          infinite: false,
        }
      }
    ]
  });
$(".slider__text").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          arrows: false,
          infinite: false,
        }
      }
    ]
  });

  $( ".hamburger" ).click(function() {
    if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $("body").removeClass('overflow-hidden');
        $(".menu").removeClass( "right-0" );
    } else {
        $(this).addClass('is-active');
        $("body").addClass('overflow-hidden');
        $(".menu").addClass( "right-0" );
    }
  });

   // smooth goto
   $(".btnGoTo").click(function(e) {
    var getId = $(this).attr('data-id');
    var btnGoTo = $(this).parent().parent().find("li a");
    $(btnGoTo).removeClass('active');
    $('.hamburger').removeClass('is-active');
    $("body").removeClass('overflow-hidden');
    $(".menu").removeClass( "right-0" );
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $(getId).offset().top - 0
    }, 1000);

  });

  //gallery
  $('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			// tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
	});