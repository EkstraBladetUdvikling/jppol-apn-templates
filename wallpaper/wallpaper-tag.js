${CONTENT}
(function () {
  'use strict';
  // AppNexus Console variables
  var clickUrl = '${CLICK_URL}';

  // Custom variables
  var wallpaperUrl = '#{WALLPAPER_FILE}';
  var defaultClickTracker = 'https://www.url.com'; // this is set as default value in AppNexus Console.
  var clickTracker = ('#{CLICK_TRACKER}' === defaultClickTracker) ? '' : '#{CLICK_TRACKER}';

  // tracking pixels
  var defaultPixelUrl = 'https://www.url.com'; // this is set as default value in AppNexus Console.
  var pixelUrl1 = ('#{PIXEL_URL1}' === defaultPixelUrl) ? '' : '#{PIXEL_URL1}';

  // find wallpaper element
  var element = window.top.document.getElementById('wallpaperBackground');
  if (element && wallpaperUrl) {
    element.setAttribute('style', 'display:block;background-color:transparent;background-image:url('+ wallpaperUrl +');background-position:center top;background-repeat:no-repeat;background-attachment:scroll;z-index:0;cursor:pointer;');

    // click event on wallpaper
    if (clickTracker) {
      if (element.addEventListener) {
        element.addEventListener('click', function() {
          clickUrl ? window.top.open(clickUrl + clickTracker, '_blank') : window.top.open(clickTracker, '_blank');
        });
      } else if (element.attachEvent) {
        element.attachEvent('click', function() {
          clickUrl ? window.top.open(clickUrl + clickTracker, '_blank') : window.top.open(clickTracker, '_blank');
        });
      }
    }

  }

  // append tracking pixels
  if (pixelUrl1.length) {
    var pixel1 = document.createElement('img');
    pixel1.src = pixelUrl1;
    pixel1.style.display = 'none';
    document.body.appendChild(pixel1);
  }
}());
