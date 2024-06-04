var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      1000: {
          slidesPerView: 4,
      },
  },
});
// FAQ JS 
$(function() {

	"use strict";

	$("#section-faq .questions .active .answer").slideDown();

	$("#section-faq .questions .single-question > div").on("click", function() {
		$("#section-faq .questions .single-question .answer").slideUp();
		if($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
		}
		else {
			$("#section-faq .questions .single-question").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next(".answer").slideDown();
		}
	});

});
// CUSTOMER REVIEWS
(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  