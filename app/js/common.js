$(function () {
  // Custom JS
  $(".reviews-slider").slick({
    dots: true,
    slidesToShow: 1,
    nextArrow:
      "<button type='button' class='reviews-slider__arrow reviews-slider__arrow--next'>Следующий </button>",
    prevArrow:
      "<button type='button' class='reviews-slider__arrow reviews-slider__arrow--prev'>Предыдущий</button>",
  });
  $(".services__items").slick({
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          // infinite: false,
          arrows: false,
        },
      },
    ],
  });

  //mobile menu
  $(".burger-menu").click(function () {
    $(".mobile-menu").fadeToggle();
    $(this).toggleClass("active");
  });

  //login popup
  $(".open-popup").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});
