const headerList = document.querySelector('.header-list');
const headerMenu = document.querySelector('.header-menu');
const headerContainer = document.querySelector('.header-menu-container');

headerMenu.addEventListener('click', e => {
  e.preventDefault();

  headerList.classList.toggle('dropdown-menu');
});

headerList.addEventListener('click', e => {
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
