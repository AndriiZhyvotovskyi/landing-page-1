$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    initialSlide: 0,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    waitForAnimate: false,
  });
});
