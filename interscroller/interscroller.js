// AppNexus console variables
var mediaUrl = '${MEDIA_URL}';
var clickUrl = '${CLICK_URL}';

// tracking pixels
var defaultPixelUrl = 'https://www.url.com'; // this is set as default value in AppNexus Console.
var pixelUrl1 = ('#{PIXEL_URL1}' === defaultPixelUrl) ? '' : '#{PIXEL_URL1}';
var pixelUrl2 = ('#{PIXEL_URL2}' === defaultPixelUrl) ? '' : '#{PIXEL_URL2}';
var pixelUrl3 = ('#{PIXEL_URL3}' === defaultPixelUrl) ? '' : '#{PIXEL_URL3}';

// create styles and divs
var receiver = window.parent.document.getElementById(document.body.id);
if (receiver) {
  receiver.parentElement.className += " interscrollerAd";

  //receiver.setAttribute('style', 'position:relative;width:100%;height:100vh;');
  receiver.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100vh;clip:rect(auto, auto, auto, auto);z-index:1');

  // this style gets overwritten with "display: inline", for some reason
  //var childDiv = receiver.getElementsByTagName('div');
  //childDiv ? childDiv[0].setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100vh;clip:rect(auto, auto, auto, auto);') : null;

  var iframe = receiver.getElementsByTagName('iframe');
  iframe ? iframe[0].setAttribute('style', 'position:fixed;width:100%;height:100vh;top:0;left:0;vertical-align:initial;border:0;') : null;
}

var imageDiv = document.createElement('div')
imageDiv.setAttribute('style', 'position:fixed;width:100%;height:100vh;top:0;left:0;vertical-align:initial;background-image:url("' + mediaUrl + '");background-size:cover;background-repeat:no-repeat;background-position:center center;transform:translateZ(0px);cursor:pointer;');
imageDiv.addEventListener('click', function() {
  clickUrl.length ? window.open(clickUrl, '_blank') : null;
});
document.body.appendChild(imageDiv);

// append tracking pixels
if (pixelUrl1.length) {
  var pixel1 = document.createElement('img');
  pixel1.src = pixelUrl1;
  pixel1.style.display = 'none';
  document.body.appendChild(pixel1);
}
if (pixelUrl2.length) {
  var pixel2 = document.createElement('img');
  pixel2.src = pixelUrl2;
  pixel2.style.display = 'none';
  document.body.appendChild(pixel2);
}
if (pixelUrl3.length) {
  var pixel3 = document.createElement('img');
  pixel3.src = pixelUrl3;
  pixel3.style.display = 'none';
  document.body.appendChild(pixel3);
}
