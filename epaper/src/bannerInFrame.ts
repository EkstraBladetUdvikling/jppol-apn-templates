import { closeOverlay, openOverlay } from './bannerOnSite';
import { styles } from './styles';

declare global {
  interface Window {
    apnOptions: any;
  }
}

export function bannerInFrame() {
  const options = window.apnOptions;
  const swipeBannerUrl: string = options.swipeBannerUrl;
  const hasSecondFrontpage: boolean = options.hasSecondFrontpage === 'true';
  const backgroundColorTop: string = options.backgroundColorTop;
  const backgroundColor: string = options.backgroundColor;
  const mediaUrl: string = options.mediaUrl;
  const trackingPixel1: string = options.trackingPixel1;
  const trackingPixel2: string = options.trackingPixel2;
  const trackingPixel3: string = options.trackingPixel3;

  const urlqueorand = swipeBannerUrl.indexOf('?') !== -1 ? '&' : '?';
  const theTarget =
    swipeBannerUrl +
    urlqueorand +
    't=' +
    encodeURIComponent(new Date().toString());

  const body = document.body;
  const container = document.createElement('div');
  container.id = 'epaper_eb_banner';
  const epaperBannerContainer = document.createElement('div');
  epaperBannerContainer.id = 'epaperBannerContainer';
  const htmlString = `<div id="epaper_eb_banner_logo"><div></div></div>`;
  epaperBannerContainer.innerHTML = htmlString;
  const epaperBannerContent = document.createElement('div');
  epaperBannerContent.id = 'epaperBannerContent';
  let imgCSSClass = 'frontpage';
  if (hasSecondFrontpage) {
    imgCSSClass = `${imgCSSClass} opslag`;
  }
  const frontPage = `<img src='${swipeBannerUrl}Image.ashx?PageNumber=1&ImageType=Normal' class="${imgCSSClass}" />`;
  const frontPage2 = hasSecondFrontpage
    ? `<img src='${swipeBannerUrl}/Image.ashx?PageNumber=2&ImageType=Normal' class="${imgCSSClass} frontpage2" />`
    : '';
  const content = `<div class="epaperBannerContent_left"></div>
                    <div id="epaper_eb_cover" class="epaperBannerContent_center">
                    ${frontPage}${frontPage2}
                    </div>
                    <div class="epaperBannerContent_right">
                      <i class="material-icons lastpage_arrow">last_page</i>
                      <i class="material-icons nextpage_arrow">chevron_right</i>
                    </div>`;
  epaperBannerContent.innerHTML = content;
  epaperBannerContainer.appendChild(epaperBannerContent);
  const epaperBannerTxt = document.createElement('div');
  epaperBannerTxt.id = 'epaperBannerTxt';
  epaperBannerContainer.appendChild(epaperBannerTxt);
  const epaperBannerPointer = document.createElement('div');
  epaperBannerPointer.id = 'epaperBannerPointer';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23">
                <path class="pointer_stroke" d="M6 0h2v1H6V0zM0 8v3h1V9h2V8H0zM1 11h1v1H1V11zM3 9h1v1H3V9zM16 8h1v1h-1V8zM2 12h1v2H2V12zM3 14h1v2H3V14zM4 16h1v3H4V16zM16 17h1v3h-1V17zM12 7h2V6h-3v4h1V7zM14 7v4h1V8h1V7H14zM16 23v-3h-1v2H6v-3H5v4H16zM4 10v1h1v4h1V1H5v9H4zM9 6h2V5H9V1H8v9h1V6zM17 9h1v8h-1V9z"/>
                <polygon class="pointer_fill" points="6 1 6 15 5 15 5 11 4 11 4 10 3 10 3 9 1 9 1 11 2 11 2 12 3 12 3 14 4 14 4 16 5 16 5 19 6 19 6 22 15 22 15 20 16 20 16 17 17 17 17 9 16 9 16 8 15 8 15 11 14 11 14 7 12 7 12 10 11 10 11 6 9 6 9 10 8 10 8 1 " />
                <defs><linearGradient id="grad1" x1="65%" y1="20%" x2="45%" y2="90%"><stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(215,215,215); stop-opacity:1" /></linearGradient></defs>
                </svg>`;
  epaperBannerPointer.innerHTML = svg;
  epaperBannerContainer.appendChild(epaperBannerPointer);

  /**
   * Assemble banner element
   */
  container.appendChild(epaperBannerContainer);

  const fullScreenContainer = document.createElement('div');
  fullScreenContainer.setAttribute('style', `display:none;`);
  const fullScreenIframe = document.createElement('iframe');
  fullScreenIframe.className = 'fullScreenIframe';

  const fullScreenCloser = document.createElement('div');
  fullScreenCloser.innerHTML = 'luk&nbsp;&times;';
  const reOpener = document.createElement('div');
  reOpener.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120" class="reopenerSvg"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg>';
  reOpener.style.display = 'none';
  fullScreenCloser.className = 'closerButton';
  fullScreenCloser.addEventListener('click', () => {
    closeOverlay();
    fullScreenCloser.style.display = 'none;';
    reOpener.style.display = 'flex';
  });
  reOpener.addEventListener('click', () => {
    openOverlay();
    fullScreenCloser.style.display = 'flex;';
    reOpener.style.display = 'none';
  });
  reOpener.className = 'closerButton';

  fullScreenContainer.appendChild(fullScreenIframe);
  fullScreenContainer.appendChild(fullScreenCloser);
  fullScreenContainer.appendChild(reOpener);
  container.appendChild(fullScreenContainer);
  /**
   * Set up Event listeners
   */
  epaperBannerContainer.addEventListener('click', () => {
    openAdLayer('moveL');
  });

  function openAdLayer(classArg) {
    if (!epaperBannerContent.classList.contains(classArg)) {
      epaperBannerContent.classList.add(classArg);
      epaperBannerTxt.style.display = 'none';
      epaperBannerPointer.style.display = 'none';

      if (
        trackingPixel1.indexOf('TRACKINGURL1') === -1 &&
        trackingPixel1.indexOf('ebimg.dk') === -1
      ) {
        const trackingImg1 = document.createElement('img');
        trackingImg1.src = trackingPixel1;
        body.appendChild(trackingImg1);
      }
      if (
        trackingPixel2.indexOf('TRACKINGURL2') === -1 &&
        trackingPixel2.indexOf('ebimg.dk') === -1
      ) {
        const trackingImg2 = document.createElement('img');
        trackingImg2.src = trackingPixel2;
        body.appendChild(trackingImg2);
      }
      if (
        trackingPixel3.indexOf('TRACKINGURL3') === -1 &&
        trackingPixel3.indexOf('ebimg.dk') === -1
      ) {
        const trackingImg3 = document.createElement('img');
        trackingImg3.src = trackingPixel3;
        body.appendChild(trackingImg3);
      }

      openOverlay();

      // window.parent.postMessage(
      //   JSON.stringify(pass_epaperframe_data),
      //   epaper_originurl
      // );

      setTimeout(() => {
        fullScreenIframe.src = theTarget;
        fullScreenContainer.style.display = 'block';
        epaperBannerContainer.style.display = 'none';
        // location.replace(theTarget);
      }, 800);
    }
  }

  /**
   * Add all styling options to head
   */
  const headFrag = document.createDocumentFragment();
  const linkTag = document.createElement('link');
  linkTag.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  linkTag.rel = 'stylesheet';
  headFrag.appendChild(linkTag);
  const styleTag = document.createElement('style');
  const bgStyling =
    backgroundColor.indexOf('BACKGROUNDCOLOR') === -1
      ? `#epaperBannerContainer { background-color: ${backgroundColor}; }`
      : '';
  const moreStyling = `${bgStyling}
  #epaper_eb_banner_logo { background-color: ${backgroundColorTop}; }
  #epaper_eb_banner_logo > div { background: url(${mediaUrl}) left center no-repeat; background-size:contain; }`;

  styleTag.innerHTML = styles + moreStyling;
  headFrag.appendChild(styleTag);
  document.head.appendChild(headFrag);

  /**
   * Add banner to body
   */
  body.appendChild(container);
}
