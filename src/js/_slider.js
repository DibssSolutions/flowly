import { buildIcon } from './_utils';
import slick from 'slick-carousel';
import Swiper from 'swiper';

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

  var mobSlider = $('.js-mobile-slider');

  var mySwiper = undefined;

  function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth < 1022 && mySwiper === undefined) {
      mySwiper = new Swiper(mobSlider, {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true
      });
    } else if (screenWidth > 1023 && mySwiper !== undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
      jQuery('.swiper-wrapper').removeAttr('style');
      jQuery('.swiper-slide').removeAttr('style');
    }
  }

  //Swiper plugin initialization
  initSwiper();

  //Swiper plugin initialization on window resize
  $(window).on('load resize orientationchange', function() {
    initSwiper();
  });

  var singleSlider = $('.js-slider-single');
  var singleSwiper = undefined;

  singleSwiper = new Swiper(singleSlider, {
    slidesPerView: 1,
    navigation: {
      nextEl:
        '.btn-slider.btn-slider_next.btn-single-slider.btn-single-slider_next',
      prevEl:
        '.btn-slider.btn-slider_prev.btn-single-slider.btn-single-slider_prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init: function() {
        $(singleSlider).css({ opacity: '1', visibility: 'visible' });
        $('.btn-single-slider_prev').hide();
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        navigation: false,
        spaceBetween: 10,
        freeMode: true,
        pagination: false
      }
    }
  });

  singleSwiper.on('slideChange', function() {
    singleSwiper.activeIndex === 0
      ? $('.btn-single-slider_prev').hide(200)
      : $('.btn-single-slider_prev').show(200);

    singleSwiper.activeIndex === singleSwiper.slides.length - 1
      ? $('.btn-single-slider_next').hide(200)
      : $('.btn-single-slider_next').show(200);
  });
});
