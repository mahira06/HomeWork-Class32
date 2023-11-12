// Nav-Search Button JS
function myFunction() {
    let element = document.getElementById("search");
    element.classList.toggle("show");
  }

// Banner Slider JS - slick
$(function (){
  $(".banner_slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass:'slick-dots',
    swipe: false,
    fade:true,
    prevArrow:'<i class="fa-solid fa-chevron-left"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right"></i>'
  
  });
});
