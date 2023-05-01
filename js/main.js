// с сайта копируем код owlcarousel2.github.io
//  код из доков event

const owl = $('.owl-carousel');
owl.owlCarousel({
      // из доков options вставляем
      center: true,
      loop: true,
      margin: 30,
      startPosition: 1,
      items: 3,
});
// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.slider__btn--prev').click(function() {
    // with optional speed parameter
    // parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

