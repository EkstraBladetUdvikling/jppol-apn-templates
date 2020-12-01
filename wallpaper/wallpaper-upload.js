// AppNexus Console variables
var mediaUrl = '${MEDIA_URL}';
var creativeWidth = '${CREATIVE_WIDTH}';
var creativeHeight = '${CREATIVE_HEIGHT}';
var clickUrl = '${CLICK_URL}';

// Custom variables
var wallpaperUrl = '#{WALLPAPER_FILE}';

// tracking pixels
var defaultPixelUrl = 'https://www.url.com'; // this is set as default value in AppNexus Console.
var pixelUrl1 = '#{PIXEL_URL1}' === defaultPixelUrl ? '' : '#{PIXEL_URL1}';

try {
  // create top-banner, if mediaUrl is defined
  if (mediaUrl) {
    // create a-tag
    var aTag = document.createElement('a');
    aTag.setAttribute('href', clickUrl);
    aTag.setAttribute('target', '_blank');

    // create  image
    var img = document.createElement('img');
    img.setAttribute('style', 'border-style:none');
    img.src = mediaUrl;
    img.width = creativeWidth;
    img.height = creativeHeight;

    // appned a-tag and image
    aTag.appendChild(img);
    document.body.appendChild(aTag);
  }

  // find wallpaper element
  var element = window.top.document.getElementById('wallpaperBackground');
  if (element && wallpaperUrl) {
    element.dataset.wallpaper = 'true';
    element.setAttribute(
      'style',
      'display:block;background-color:transparent;background-image:url(' +
        wallpaperUrl +
        ');background-position:center top;background-repeat:no-repeat;background-attachment:scroll;z-index:0;cursor:pointer;'
    );
    if (window.top.jppolWallpaper) {
      window.top.jppolWallpaper('template');
    }

    // click event on wallpaper
    if (element.addEventListener) {
      element.addEventListener('click', function () {
        window.top.open(clickUrl, '_blank');
      });
    } else if (element.attachEvent) {
      element.attachEvent('click', function () {
        window.top.open(clickUrl, '_blank');
      });
    }
  }

  // append tracking pixels
  if (pixelUrl1.length) {
    var pixel1 = document.createElement('img');
    pixel1.src = pixelUrl1;
    pixel1.style.display = 'none';
    document.body.appendChild(pixel1);
  }
} catch (error) {
  document.write('<img src="' + wallpaperUrl + '" style="width: 100%;" />');
}
