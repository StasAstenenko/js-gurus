
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    breakpoints: {
        320: {
             slidesPerView: 1,   
        },
        768: {
           slidesPerView: 1, 
        },
        1440: {
            slidesPerView: 1,
        }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        mousewheel: {
            invert: true,
        },
    loop: true,
        modules: [Navigation, Keyboard, Mousewheel],
        navigation: {
            nextEl: '.btn-for-swiper-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        
    });

    const projectBtn = document.querySelector('.prj-btn');

    projectBtn.addEventListener('click', function () {
        const githubProjectUrl = 'https://stasastenenko.github.io/js-gurus/';
        window.open(githubProjectUrl, '_blank');
    });
