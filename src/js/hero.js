let currentDevice;
let span_width;
checkDevice();
let device = currentDevice;
const GLASS_SPAN = '<span class="glass-edge"></span>';
let glassSpans = '';

function renderGlassEffect() {
  glassSpans = '';
  for (let x = window.innerWidth; x > 0; x -= span_width)
    glassSpans += GLASS_SPAN;
  document.querySelector('.glass-effect').innerHTML = glassSpans;
}
renderGlassEffect();

window.addEventListener('resize', () => {
  checkDevice();
  if (device !== currentDevice) renderGlassEffect();
});

function checkDevice() {
  if (window.innerWidth < 768) {
    currentDevice = 'm';
    span_width = 57;
  } else if (window.innerWidth > 1439) {
    currentDevice = 'pc';
    span_width = window.innerWidth / 20;
  } else {
    currentDevice = 't';
    span_width = 70;
  }
}
