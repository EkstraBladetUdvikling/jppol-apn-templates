// AppNexus console variables
var mediaUrl = '${MEDIA_URL}';
var clickUrl = '${CLICK_URL}';

// custom AppNexus variables
var arrowColor = '#{ARROW_COLOR}' || 'FFF';

// tracking pixels
var defaultPixelUrl = 'https://www.url.com'; // this is set as default value in AppNexus Console.
var pixelUrl1 = '#{PIXEL_URL1}' === defaultPixelUrl ? '' : '#{PIXEL_URL1}';
var pixelUrl2 = '#{PIXEL_URL2}' === defaultPixelUrl ? '' : '#{PIXEL_URL2}';
var pixelUrl3 = '#{PIXEL_URL3}' === defaultPixelUrl ? '' : '#{PIXEL_URL3}';
try {
  var receiver = window.parent.document.getElementById(document.body.id);
  if (receiver) {
    // calculate height
    // if an offsetElement is found it will be used instead of the menu height.
    // TODO: don't rely on access to native DOM-elements
    var offsetElements = window.top.document.querySelector('#fnTicker');
    var menuElements = window.top.document.querySelector(
      '.topbar, #sitehead, .jp-header, .navmenu, .masthead, .globalHeader, #wrapHeader'
    );
    var whitespace = 185;

    if (offsetElements) {
      whitespace = offsetElements.offsetTop;

      if (receiver.parentElement.offsetHeight > 0) {
        whitespace = whitespace - receiver.parentElement.offsetHeight;
      }
    } else if (menuElements) {
      var whitespace = menuElements.offsetHeight;
    }

    var creativeHeight =
      window.parent.document.documentElement.clientHeight - whitespace;

    // TODO: fix this, don't style native DOM-elements? Use class like in interscroller-template
    receiver.parentElement.className += ' interscrollerAd';
    receiver.parentElement.setAttribute(
      'style',
      'height:' + creativeHeight + 'px;max-height:' + creativeHeight + 'px;'
    );

    //
    receiver.setAttribute(
      'style',
      'position:absolute;top:0;left:0;width:100%;height:' +
        creativeHeight +
        'px;clip:rect(auto, auto, auto, auto);z-index:1;'
    );

    //
    // create image div, for containing image
    //
    var imageDiv = document.createElement('div');
    imageDiv.setAttribute(
      'style',
      'position:fixed;width:100%;height:' +
        creativeHeight +
        'px;background-image:url("' +
        mediaUrl +
        '");background-position:center;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;cursor:pointer;z-index:1000'
    );
    imageDiv.addEventListener('click', function () {
      clickUrl.length ? window.top.open(clickUrl, '_blank') : null;
    });

    //
    // overwrite default creative iframe values
    //
    var iframe = receiver.getElementsByTagName('iframe');
    if (iframe) {
      iframe[0].setAttribute('width', '100%;');
      iframe[0].setAttribute('height', creativeHeight + 'px;');
      iframe[0].setAttribute(
        'style',
        'position:fixed;width:100%;height:100vh;top:0;left:0;vertical-align:initial;border:0;'
      );
    }

    //
    // create svg arrow
    //
    var svgDiv = document.createElement('div');
    svgDiv.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#' +
      arrowColor +
      '"><path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.4 21.4L24 34.8 10.6 21.4c-.8-.8-.8-2 0-2.8s2-.8 2.8 0L24 29.2l10.6-10.6c.8-.7 2.1-.6 2.8.2.7.8.7 1.9 0 2.6z"></path></svg>';
    // create scroll target, used for smooth scrolling
    var scrolToDiv = document.createElement('div');
    scrolToDiv.setAttribute('style', 'position:absolute;bottom:0');
    // create animation
    var animation = document.createElement('style');
    animation.innerHTML =
      '@keyframes fadeOutDown{0%{opacity:1}75%{opacity:0.8;transform:translate3d(0,10%,0)}100%{opacity:0;transform:translate3d(0,15%,0)}}';
    // style and click event
    svgDiv.setAttribute(
      'style',
      'position:absolute;bottom:30px;left:0;right:0;width:6%;min-width:25px;max-width:90px;height:auto;margin-left:auto;margin-right:auto;cursor:pointer;transform:translate3d(0,-15%,0);animation:fadeOutDown ease 2s infinite'
    );
    svgDiv.addEventListener('click', function (e) {
      // scroll to content
      e.stopPropagation();

      if ('scrollBehavior' in document.documentElement.style) {
        scrolToDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else {
        // fallback without animation
        window.top.scrollTo(0, creativeHeight);
      }
    });

    // append elements
    document.body.appendChild(imageDiv);
    receiver.appendChild(animation);
    receiver.appendChild(svgDiv);
    receiver.appendChild(scrolToDiv);
  }

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
} catch (error) {
  document.write('<img src="' + mediaUrl + '" style="width: 100%;" />');
}
