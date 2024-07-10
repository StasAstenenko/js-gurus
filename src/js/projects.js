
import Swiper from 'swiper';
import { Keyboard } from 'swiper/modules';


const btnPrev = document.querySelector(".btn-for-swiper-prev");
const btnNext = document.querySelector(".btn-for-swiper-next");
const projectButtons = document.querySelectorAll('.prj-btn');
projectButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const githubProjectUrl = 'https://github.com/StasAstenenko/js-gurus';
        window.open(githubProjectUrl, '_blank');
    });
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
    slidesPerGroup: 1,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        modules: [Keyboard],
    on: {
        init: function () {
            checkNavButtons(this);
        },
        slideChange: function () {
            checkNavButtons(this);
        }
        }
});
btnPrev.addEventListener('click', () => swiper.slidePrev());
btnNext.addEventListener('click', () => swiper.slideNext());


    
