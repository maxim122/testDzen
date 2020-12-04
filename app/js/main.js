$(document).ready(function() {


  $('#about-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText : ["<img src='images/arrow-left.svg'>","<img src='images/arrow-right.svg'>"],
      autoplay: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
$('#slider-comment').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      navText : ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
      autoplay: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
// Menu Mobile 
$('.burger__btn').click(function(event) {
  $(this).toggleClass('active');
  $('.menu-mobile').fadeIn(400);
  
  if($(this).hasClass('active') == false) {
    $('.menu-mobile').fadeOut(400);
  }
});


  // image zoom
    $(".practice__blackout").click(function() {
      let srcLightBox = $(this).prev().attr('src');
      $('.lightbox').fadeIn(600);
      $('.overlay').fadeIn(600);
      $('.lightbox img').attr('src', srcLightBox);
      console.log();
     
    });
    $('.close__btn').click(function(event) {
      $('.lightbox').fadeOut(300);
      $('.overlay').fadeOut(300);
    });
});