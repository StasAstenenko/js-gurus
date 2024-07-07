import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const benMenu = document.querySelector('.benefits-list');
let currentInstance = null;

benMenu.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.closest('li') === null) return;

    const liElem = e.target.closest('li');
    const content = liElem.innerHTML;

    if (currentInstance) {
      currentInstance.close();
    }
    
    currentInstance = basicLightbox.create(`<div class="modal-content">${content}</div>`);
    currentInstance.show();
});

