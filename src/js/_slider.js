import { buildIcon } from './_utils';
import slick from 'slick-carousel';

var prev = buildIcon('chevron-left');
var next = buildIcon('chevron-right');

$(document).ready(function() {
  var sliderTrigger = document.querySelector('.js-slider');

  if (sliderTrigger !== null) {
    $('.js-slider').on('init', function(event, slick) {
      $('.js-slider').css({ opacity: '1', visibility: 'visible' });
    });

    $('.js-slider').slick({
      slidesToShow: 1,
      // adaptiveHeight: true,
      centerMode: true,
      arrows: true,
      autoplay: true,
      speed: 1000,
      centerPadding: '1px',
      variableWidth: true,
      prevArrow: `<button class="btn-slider btn-slider_prev" type="button">${prev}</button>`,
      nextArrow: `<button class="btn-slider btn-slider_next" type="button">${next}</button>`,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
    });
  }
});
