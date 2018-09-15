var Masonry = require('masonry-layout');
// import Masonry from 'masonry-layout';

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.card',
  columnWidth: 220, 
  gutter: 24, 
  horizontalOrder: true
});

// $('.grid').masonry({
//   // options
//   itemSelector: '.card',
//   columnWidth: 200
// });
