import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const accordion = new Accordion('.ac-container-about', {
  showMultiple: true,
  onOpen: function (currentElement) {
    currentElement.querySelector('.ac-about-svg').style.transform =
      'rotate(180deg)';
  },
  onClose: function (currentElement) {
    currentElement.querySelector('.ac-about-svg').style.transform =
      'rotate(0deg)';
  },
});
accordion.open(0);

const swiper = new Swiper('.about-swiper', {
  slidesPerView: 6,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 6,
    },
  },
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
  },
  direction: 'horizontal',
});
