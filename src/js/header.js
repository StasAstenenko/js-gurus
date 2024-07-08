const headerList = document.querySelector('.header-list');
const headerMenu = document.querySelector('.header-menu');
const headerContainer = document.querySelector('.header-menu-container');
const headerLink = document.querySelector('.header-link');

headerMenu.addEventListener('click', e => {
  e.preventDefault();

  headerList.classList.toggle('dropdown-menu');
});

headerLink.addEventListener('click', e => {
  headerList.classList.remove('dropdown-menu');
});

document.addEventListener('click', function (e) {
  if (
    !headerContainer.contains(e.target) &&
    headerList.classList.contains('dropdown-menu')
  ) {
    headerList.classList.remove('dropdown-menu');
  }
});
