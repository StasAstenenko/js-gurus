// this script add "nowebp" to body (if on webp support)
var webp_support_level = 'lossy'; // Change this to "alpha" or "animation" if required.
// Quick detection (except Safari)
function check_webp_decoding() {
  return (
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') == 0
  );
}
// Long WebP detection (method used by Google)
function check_webp_feature(feature, callback) {
  var kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha:
      'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation:
      'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
  };
  var webpTestImg = new Image();
  webpTestImg.onload = function () {
    var result = webpTestImg.width > 0 && webpTestImg.height > 0;
    callback(feature, result);
  };
  webpTestImg.onerror = function () {
    callback(feature, false);
  };
  webpTestImg.src = 'data:image/webp;base64,' + kTestImages[feature];
}
if (!check_webp_decoding())
  check_webp_feature(webp_support_level, (feature, isSupported) => {
    if (!isSupported) document.body.classList.add('nowebp');
  }); (edited); 