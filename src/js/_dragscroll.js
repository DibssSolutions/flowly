var Draggabilly = require('draggabilly');

function draggable() {
  var draggie = new Draggabilly('.js-draggable', {
    axis: 'x'
    //   containment: '.image-cards-wrapper'
  });
}

// var draggie = new Draggabilly('.js-mobile-slider', {
//   axis: 'x'
//   //   containment: '.image-cards-wrapper'
// });

const drag = document.querySelector('.image-cards');

$(window).on('load resize orientationchange', function(e) {
  if (window.innerWidth < 1022) {
    if (!$(drag).hasClass('js-draggable')) {
      $(drag).addClass('js-draggable');
      draggable();
    }
  } else {
    $(drag).removeClass('js-draggable');
  }
});
