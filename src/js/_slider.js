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

  var mySwiper = undefined;

  function initSwiper() {
    var screenWidth = $(window).width();
    var mobSlider = document.querySelector('.js-mobile-slider');
    if (!mobSlider) return;
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
    initThumbsSwiper();
  });

  var singleSlider = $('.js-slider-single');
  var thumbsSlider = $('.js-slider-single-thumbs');
  var singleSwiper = undefined;
  var thumbsSwiper = undefined;

  function initThumbsSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth > 768 && thumbsSwiper === undefined) {
      console.log(333);
      thumbsSwiper = new Swiper(thumbsSlider, {
        slidesPerView: 5,
        // centeredSlides: true,
        navigation: {
          nextEl:
            '.btn-slider-thumbs.btn-slider-thumbs_next.js-single-slider-next.js-thumb-next',
          prevEl:
            '.btn-slider-thumbs.btn-slider-thumbs_prev.js-single-slider-prev.js-thumb-prev'
        },
        on: {
          init: function() {
            $(singleSlider).css({ opacity: '1', visibility: 'visible' });
            $('.btn-slider-thumbs_prev').hide();
          }
        },
        spaceBetween: 14,
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            navigation: false,
            spaceBetween: 3,
            freeMode: true
          }
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
      // $('.js-slider-single').params.thumbs = thumbsSwiper;
      initThumbsButtonsEvents();
    } else if (screenWidth < 768 && thumbsSwiper !== undefined) {
      console.log(222);
      singleSwiper.params.thumbs = null;
      console.log(singleSwiper.params.thumbs);
      thumbsSwiper.destroy();
      thumbsSwiper = undefined;
      // jQuery('.slider-single-thumbs .swiper-wrapper').removeAttr('style');
      // jQuery('.slider-single-thumbs .swiper-slide').removeAttr('style');
    }
    initSingleSlider();
  }

  function initSingleSlider() {
    if (singleSwiper === undefined) {
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
            pagination: false,
            thumbs: false
          }
        },
        thumbs: {
          swiper: thumbsSwiper || null
        }
      });
      singleSwiper.on('slideChange', function() {
        singleSwiper.activeIndex === 0
          ? $('.js-single-slider-prev').hide(100)
          : $('.js-single-slider-prev').show(100);

        singleSwiper.activeIndex === singleSwiper.slides.length - 1
          ? $('.js-single-slider-next').hide(100)
          : $('.js-single-slider-next').show(100);
      });
    }
  }

  function initThumbsButtonsEvents() {
    $('.js-thumb-next').on('click', function() {
      singleSwiper.slideNext();
    });

    $('.js-thumb-prev').on('click', function() {
      singleSwiper.slidePrev();
    });
  }
});
