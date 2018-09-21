import { buildIcon } from './_utils';
import slick from 'slick-carousel';

var prev = buildIcon('chevron-left');
var next = buildIcon('chevron-right');

$(document).ready(function() {
  var slider = document.querySelector('.js-slider');

  if (slider !== null) {
    $('.js-slider').on('init', function(event, slick) {
      $('.js-slider').css({ opacity: '1', visibility: 'visible' });
    });

    $('.js-slider').slick({
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
          breakpoint: 768,
          settings: {
            centerMode: false,
            arrows: false
          }
        }
      ]
    });
  }

  var singleSlider = document.querySelector('.js-slider-single');

  $(singleSlider).slick({
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    infinite: false,
    prevArrow: `<button class="btn-slider btn-single-slider_prev is-hidden" type="button">${prev}</button>`,
    nextArrow: `<button class="btn-slider btn-single-slider_next" type="button">${next}</button>`,
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

  $(singleSlider).on('beforeChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    nextSlide === slick.$slides.length - 1
      ? $('.btn-single-slider_next').addClass('is-hidden')
      : $('.btn-single-slider_next').removeClass('is-hidden');
    nextSlide === 0
      ? $('.btn-single-slider_prev').addClass('is-hidden')
      : $('.btn-single-slider_prev').removeClass('is-hidden');
  });
});
