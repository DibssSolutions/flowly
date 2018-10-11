var Masonry = require('masonry-layout');
// import Masonry from 'masonry-layout';

$(document).ready(function() {
  var elem = document.querySelector('.grid');
  var collections = document.querySelector('.js-collections-masonry');

  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.js-masonry',
    columnWidth: '.card',
    gutter: '.gutter-sizer',
    horizontalOrder: true
  });

  var msnry_2 = new Masonry(collections, {
    // options
    itemSelector: '.company-page__col',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer-wide',
    horizontalOrder: true, 
    percentPosition: true
  });
});
