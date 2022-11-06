// // $(document).ready(function () {
// //    $('.carousel__inner').slick({
// //       // dots: true,
// //       speed: 1000,
// //       adaptiveHeight: true,
// //       autoplay: true,
// //       autoplaySpeed: 3000,
// //       prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left"></button>',
// //       nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="right"></button>',
// //       responsive: [{
// //          breakpoint: 768,
// //          settings: {
// //             dots: true,
// //             arrows: false
// //          }
// //       },]
// //    }
// //    );
// // });



// const slider = tns({
//    container: '.carousel__inner',
//    items: 1,
//    slideBy: 'page',
//    autoplay: false,
//    controls: false,
//    nav: false,
//    // autoWidth: true,
//    // center: true,
//    // lazyload: true,
//    // mouseDrag: true,
//    // touch: true,
//    swipeAngle: false,



//    // responsive: {
//    //    600: {

//    //    },
//    // }


// });


// document.querySelector('.prev').addEventListener('click', function () {
//    slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
//    slider.goTo('next');
// });

const swiper = new Swiper('.swiper', {
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true,
   },



   // // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});