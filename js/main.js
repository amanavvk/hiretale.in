(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });




})(jQuery);




$(document).ready(function(){


    // slick slider
    
    $('.testimonial-slider-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      autoplay: true,
      arrows:true,
      fade: false,
      infinite: true,
      asNavFor: '.testimonial-nav-slider-active',
      
      autoplaySpeed: 2000,
      touchThreshold: 1000,
      centerMode:true,
      
      // prevArrow: '<button  aria-label="Previous" type="button">Previous</button>',

      
     
      
      // prevArrow:".arrow_prev",
      
      
    });
    $('.testimonial-nav-slider-active').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-slider-active',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      arrows: true,

      // nextArrow: '<button type="button" class="btn btn-primary">next</button>',
      // prevArrow: '<button type="button" class="btn btn-primary">prev</button>'
      
      // nextArrow: '<button  aria-label="Next" type="button">Next</button>',


    });
   

//     $('#carousel').slick({
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       arrows: true,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       responsive: [
//             {
//               breakpoint: 1200,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1008,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 800,
//               settings: "unslick"
//             }

//           ]
// });
    // $('.fade').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear'
    // });

    // (function() {
    //   var $slides = document.querySelectorAll('.slide');
    //   var $controls = document.querySelectorAll('.slider__control');
    //   var numOfSlides = $slides.length;
    //   var slidingAT = 1300; // sync this with scss variable
    //   var slidingBlocked = false;
    
    //   [].slice.call($slides).forEach(function($el, index) {
    //     var i = index + 1;
    //     $el.classList.add('slide-' + i);
    //     $el.dataset.slide = i;
    //   });
    
    //   [].slice.call($controls).forEach(function($el) {
    //     $el.addEventListener('click', controlClickHandler);
    //   });
    
    //   function controlClickHandler() {
    //     if (slidingBlocked) return;
    //     slidingBlocked = true;
    
    //     var $control = this;
    //     var isRight = $control.classList.contains('m--right');
    //     var $curActive = document.querySelector('.slide.s--active');
    //     var index = +$curActive.dataset.slide;
    //     (isRight) ? index++ : index--;
    //     if (index < 1) index = numOfSlides;
    //     if (index > numOfSlides) index = 1;
    //     var $newActive = document.querySelector('.slide-' + index);
    
    //     $control.classList.add('a--rotation');
    //     $curActive.classList.remove('s--active', 's--active-prev');
    //     document.querySelector('.slide.s--prev').classList.remove('s--prev');
        
    //     $newActive.classList.add('s--active');
    //     if (!isRight) $newActive.classList.add('s--active-prev');
        
    
    //     var prevIndex = index - 1;
    //     if (prevIndex < 1) prevIndex = numOfSlides;
    
    //     document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
    
    //     setTimeout(function() {
    //       $control.classList.remove('a--rotation');
    //       slidingBlocked = false;
    //     }, slidingAT*0.75);
    //   };
    // }());


  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})



jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time:5000
  });
});









