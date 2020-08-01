$(function () {
  //slider
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

  //specialists

  //check label
  $(".aside__label").click(function () {
    $(this).toggleClass("active");
    $(this).children(" input").attr("checked", "checked");
  });

  //sort
  $(".sort__btn").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });

  //like
  $(".advert__like").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });

  //show more info user ads

  $(".advert__more-url").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this)
      .parents(".advert")
      .children(".advert__more-info")
      .toggleClass("active");
  });

  //show filter mobile
  $(".specialists-inner__btn").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".aside").toggleClass("active");
    $(".specialists-ads__sort").toggleClass("active");
  });

  // reviews active
  $(".reviews-page__sort-btn").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });

  //input mask phone
  $("input[name*='phone']").inputmask("+7 (999) 999-99-99");

  //input image profile lk

  $(".form-data__file-btn>input").change(function () {
    if ($(this).val() != "") $(this).prev().text("Загружено");
    else $(this).prev().text("Загрузить фото");
  });

  //inputs lk advert field bad

  $("#bad").click(function () {
    $("#bad2").val("");
  });
  $("#bad2").click(function () {
    $("#bad").prop("checked", false);
  });

  //like lk message
  $(".message__like").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });
});
