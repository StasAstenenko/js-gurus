const headerList = document.querySelector('.header-list');
const headerMenu = document.querySelector('.header-menu');

headerMenu.addEventListener('click', e => {
  const list = e.currentTarget;
  console.log(list);
  console.log(headerList);
  if (!e.target) {
    return;
  } else {
    headerList.classList.remove('display: none');
  }
});
