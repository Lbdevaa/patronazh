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

  ////specialists

  //check label
  $(".aside__label").click(function () {
    $(this).toggleClass("active");
    $(this).children(" input").attr("checked", "checked");
  });

  //sort
  $(".sort__btn").change(function (event) {
    $(this).addClass("active");
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
  $(".reviews-page__sort-btn").change(function (event) {
    $(this).addClass("active");
  });

  //input mask phone
  $("input[name*='phone']").inputmask("+7 (999) 999-99-99");

  ////lk
  //input image profile lk

  $(".form-data__file-input").change(function () {
    if ($(this).val() != "") $(this).prev().text("Загружено");
    else $(this).prev().text("Загрузить фото");
  });

  //inputs lk advert fields

  $("#bad").click(function () {
    $("#bad2").val("");
  });
  $("#bad2").click(function () {
    $("#bad").prop("checked", false);
  });

  $(".form-advert__radio-btns label").click(function () {
    if ($(this).prop("checked", true)) {
      $(this)
        .parent(".form-advert__radio-btns")
        .children("input:radio")
        .prop("checked", false);
    } else {
    }
  });

  // lk message like
  $(".message__like").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
  });

  // lk message more
  $(".message__more").click(function (event) {
    event.preventDefault();
    $(this)
      .parents(".message__more-block")
      .children(".message__settings")
      .toggleClass("active");
  });

  // lk message filter
  $(".messages-filter__mobile-select").change(function (event) {
    top.location = this.value;
  });

  // lk chat
  $(".form-chat__input").on("keyup", function (event) {
    var lengthTextChat = $(this).val().length;
    if (lengthTextChat < 1) {
      $(".form-chat__btn").removeClass("active");
    } else {
      $(".form-chat__btn").addClass("active");
    }
  });
  if ($(window).width() < 768) {
    $(".form-chat__btn").html("");
  }
  $(".chat__more-link").click(function (event) {
    event.preventDefault();
    $(".chat__settings").toggleClass("active");
  });

  $(".form-chat__file-input").change(function () {
    if ($(this).val() != "") {
      var numChatFiles = $(this)
        .parents(".form-chat__file-btn")
        .children(".form-chat__file-label")
        .children(".form-chat__num-files");
      numChatFiles.addClass("active");
      numChatFiles.children("span").text("" + $(this)[0].files.length);
    } else numChatFiles.children("span").text("0");
  });
});
