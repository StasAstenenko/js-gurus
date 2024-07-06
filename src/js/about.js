import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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
