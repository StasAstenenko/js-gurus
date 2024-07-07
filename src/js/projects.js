
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const btnPrev = document.querySelector(".btn-for-swiper-prev");
const btnNext = document.querySelector(".btn-for-swiper-next");
const projectBtn = document.querySelector('.prj-btn');

    projectBtn.addEventListener('click', function () {
        const githubProjectUrl = 'https://stasastenenko.github.io/js-gurus/';
        window.open(githubProjectUrl, '_blank');
    });

    function checkNavButtons(swiper) {
    if (swiper.isBeginning) {
        btnPrev.disabled = true;
        btnPrev.classList.add('disabled');
        
    }
    else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('disabled');
    

    }
    if (swiper.isEnd) {
        btnNext.disabled = true;
        btnNext.classList.add('disabled');
    
    } else {
        btnNext.disabled = false;
        btnNext.classList.remove('disabled');

    }
}


const swiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        mousewheel: {
            invert: true,
        },
        modules: [Navigation, Keyboard, Mousewheel],
        navigation: {
            nextEl: '.btn-for-swiper-next',
            prevEl: '.btn-for-swiper-prev',
        },
    on: {
        init: function () {
            checkNavButtons(this);
        },
        slideChange: function () {
            checkNavButtons(this);
        }
        }
});


    
