// $(document).ready(function () {
//    $('.carousel__inner').slick({ 
//       // dots: true,
//       speed: 1000,
//       adaptiveHeight: true,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="right"></button>',
//       responsive: [{
//          breakpoint: 768,
//          settings: {
//             dots: true,
//             arrows: false
//          }
//       },]
//    }
//    );
// });



const slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   controls: false,
   nav: false,

   responsive: {
      600: {
         controls: false,
      },
   }


});


document.querySelector('.prev').addEventListener('click', function () {
   slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
   slider.goTo('next');
});