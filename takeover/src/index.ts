const doTakeover = (() => {
  const AdserverMediaUrl = '${MEDIA_URL}';
  const AdserverClickUrl = '${CLICK_URL}';

  const containerStyling = `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image:url(${AdserverMediaUrl});
  background-repeat:no-repeat;
  background-position:center top;
  background-color:black;
  background-size:cover;
  `;

  const stylingContainer = document.createElement('style');
  stylingContainer.innerHTML = `
  html {
    height: 100%
  }
  body{
    margin:0px;
    padding:0px;
  }`;

  const bannerContainer = document.createElement('div');
  bannerContainer.setAttribute('style', containerStyling);
  bannerContainer.addEventListener('click', () => {
    window.open(AdserverClickUrl, '_blank');
  });
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(stylingContainer);
  docFrag.appendChild(bannerContainer);

  document.body.appendChild(docFrag);
  const parentDoc = window.parent.document;
  const container = parentDoc.getElementById(document.body.id);
  if (container === null) {
    return;
  }
  const epaperIframe = container.querySelector('iframe');
  epaperIframe.setAttribute('style', 'height: 100%;width: 100%;');
})();
