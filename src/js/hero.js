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

let colorTheme = 0;
const heroBG = document.querySelector('.hero').style;
document.querySelector('.header-logo').addEventListener('click', e => {
  e.preventDefault();
  console.log(`Changing color theme to ${++colorTheme}`);
  switchColors(colorTheme, heroBG);
});

function switchColors(currentColorTheme, heroBG) {
  switch (currentColorTheme) {
    case 1: {
      whiteTheme();
      // 2 - green
      heroBG.backgroundImage =
        'linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(59, 59, 59, 0.2) 16.67%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(270deg, #fafafa 49.68%, #596808 67.73%, rgba(198, 227, 39, 0.76) 100%)';
      break;
    }
    case 2: {
      blackTheme();
      // 3 - blue
      heroBG.backgroundImage =
        'linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(59, 59, 59, 0.2) 16.67%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(270deg, #1c1d20 49.68%, #001958 67.73%, #0041e8 100%)';
      break;
    }
    case 3: {
      whiteTheme();
      // 4 - red-orange
      heroBG.backgroundImage =
        'linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(59, 59, 59, 0.2) 16.67%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(270deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)';
      break;
    }
    case 4: {
      blackTheme();
      // 5 - deep green
      heroBG.backgroundImage =
        'linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(59, 59, 59, 0.2) 16.67%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(270deg, #fafafa 49.68%, #1e3633 67.73%, #2b4441 100%)';
      break;
    }
    case 5: {
      whiteTheme();
      // 6 - orange
      heroBG.backgroundImage =
        'linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(59, 59, 59, 0.2) 16.67%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%, #ff7f08 100%)';
      break;
    }
    default: {
      console.log(`Default theme`);
      blackTheme();
      // 1 - red
      heroBG.backgroundImage =
        'linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(59, 59, 59, 0.2) 16.67%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(270deg, #1c1d20 49.68%, #69292d 67.73%, #ed3b44 100%)';
      colorTheme = 0;
    }
  }
}
function whiteTheme() {
  document.body.style.backgroundColor = '#fafafa';
  document.body.style.color = '#1c1d20';
}
function blackTheme() {
  document.body.style.backgroundColor = '#1c1d20';
  document.body.style.color = '#fafafa';
}
