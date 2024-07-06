// show elements with tiny animation (it might be in general.js)
const options = { threshold: [0.1] };
const observer = new IntersectionObserver(onEntry, options);
document
  .querySelectorAll('section')
  .forEach(section => observer.observe(section));
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) change.target.classList.add('in-view');
    else change.target.classList.remove('in-view');
  });
}

// rendering with options
const retinaORnot = window.devicePixelRatio >= 2 ? 2 : 1;
const webpORjpg = document.body.classList.contains('nowebp') ? 'jpg' : 'webp';
window.addEventListener('resize', () => renderAccodingToWidth());

const proudOfProjectsLarge = [
  { id: 11 },
  { id: 12 },
  { id: 9 },
  { id: 5 },
  { id: 10 },
  { id: 7 },
  { id: 6 },
  { id: 11 },
  { id: 1 },
  { id: 8 },
  { id: 2 },
  { id: 9 },
  { id: 4 },
  { id: 5 },
  { id: 12 },
  { id: 6 },
  { id: 11 },
];
const proudOfProjectsStandart = proudOfProjectsLarge.slice(3, 17);

async function renderCoverCards(device, productsList) {
  document.querySelector('.covers-ul').innerHTML = productsList.reduce(
    (acc, { id }) =>
      (acc += `<li class="card-of-project"><img src="../img/covers/project${id
        .toString()
        .padStart(
          2,
          '0'
        )}${device}@${retinaORnot}.${webpORjpg}" alt="project"></li>`),
    ''
  );
}
function renderAccodingToWidth() {
  if (window.innerWidth < 768) renderCoverCards('m', proudOfProjectsStandart); // mobile
  if (window.innerWidth > 1439)
    renderCoverCards('pc', proudOfProjectsLarge); // pc
  else if (window.innerWidth > 767)
    renderCoverCards('t', proudOfProjectsStandart); // tablet
}
renderAccodingToWidth();
