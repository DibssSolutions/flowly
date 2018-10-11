import { buildIcon } from './_utils';
import slick from 'slick-carousel';

var prev = buildIcon('chevron-left-1');
var next = buildIcon('chevron-right-1');

$(document).ready(function() {
  /* MAIN SLIDER */
  var slider = $('.js-slider');

  $(slider).on('init', function(event, slick) {
    $(slider).css({ opacity: '1', visibility: 'visible' });
  });

  $(slider).slick({
    slidesToShow: 1,
    centerMode: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    centerPadding: '1px',
    variableWidth: true,
    prevArrow: `<button class="btn-slider btn-slider_prev" type="button">${prev}</button>`,
    nextArrow: `<button class="btn-slider btn-slider_next" type="button">${next}</button>`,
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    responsive: [
      {
        breakpoint: 1022,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          arrows: false
        }
      }
    ]
  });

  // /* MOBILE ONLY SLIDER ON MAIN PAGE */

  // var mobSlider = $('.js-mobile-slider');

  // /* Initialisation */
  // function mobileOnlySlider() {
  //   $(mobSlider).slick({
  //     variableWidth: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     mobileFirst: true,
  //     arrows: false,
  //     responsive: [
  //       {
  //         breakpoint: 1022,
  //         settings: 'unslick'
  //       }
  //     ]
  //   });
  // }

  // $(window).on('load resize orientationchange', function(e) {
  //   if (window.innerWidth < 1022) {
  //     if (!$(mobSlider).hasClass('slick-initialized')) {
  //       mobileOnlySlider();
  //     }
  //   } else {
  //     if ($(mobSlider).hasClass('slick-initialized')) {
  //       $(mobSlider).removeClass('slick-initialized');
  //     }
  //   }
  // });

  /* SINGLE IMAGE SLIDER */

  var singleSlider = $('.js-slider-single');

  $(singleSlider).on('init', function(event, slick) {
    $(singleSlider).css({ opacity: '1', visibility: 'visible' });
    $('.btn-single-slider_prev').hide();
  });

  $(singleSlider).slick({
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    infinite: false,
    prevArrow: `<button class="btn-slider btn-slider_prev btn-single-slider_prev" type="button">${prev}</button>`,
    nextArrow: `<button class="btn-slider btn-slider_next btn-single-slider_next" type="button">${next}</button>`,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          arrows: false,
          fade: false,
          infinite: true,
          centerMode: false
        }
      }
    ]
  });

  /* SINGLE IMAGE SLIDER CHANGING VISIBILITY OF PREV/NEXT BUTTONS */
  $(singleSlider).on('beforeChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    nextSlide === slick.$slides.length - 1
      ? $('.btn-single-slider_next').hide(400)
      : $('.btn-single-slider_next').show(400);
    nextSlide === 0
      ? $('.btn-single-slider_prev').hide(400)
      : $('.btn-single-slider_prev').show(400);
  });
});
