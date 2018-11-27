(function () {
  'use strict';

  var doTakeover = (function () {
      var AdserverMediaUrl = '${MEDIA_URL}';
      var AdserverClickUrl = '${CLICK_URL}';
      var containerStyling = "\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image:url(" + AdserverMediaUrl + ");\n  background-repeat:no-repeat;\n  background-position:center top;\n  background-color:black;\n  background-size:cover;\n  ";
      var stylingContainer = document.createElement('style');
      stylingContainer.innerHTML = "\n  html {\n    height: 100%\n  }\n  body{\n    margin:0px;\n    padding:0px;\n  }";
      var bannerContainer = document.createElement('div');
      bannerContainer.setAttribute('style', containerStyling);
      bannerContainer.addEventListener('click', function () {
          window.open(AdserverClickUrl, '_blank');
      });
      var docFrag = document.createDocumentFragment();
      docFrag.appendChild(stylingContainer);
      docFrag.appendChild(bannerContainer);
      document.body.appendChild(docFrag);
      var parentDoc = window.parent.document;
      var receiver = parentDoc.getElementById(document.body.id);
      if (receiver === null) {
          return;
      }
      var epaperIframe = receiver.querySelector('iframe');
      epaperIframe.setAttribute('style', 'height: 100%;width: 100%;');
  })();

}());
