var Masonry = require('masonry-layout');
// import Masonry from 'masonry-layout';

$(document).ready(function() {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.js-masonry',
    columnWidth: '.card',
    gutter: '.gutter-sizer',
    horizontalOrder: true
  });
});
