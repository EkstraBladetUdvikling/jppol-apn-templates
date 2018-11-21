import { styles } from './styles';

function init() {
  const swipeBannerUrl: string = '#{SWIPEBANNERURL}';
  const swipeBannerUrl_frontpage: string = `${swipeBannerUrl}/Image.ashx?PageNumber=1&ImageType=Normal`;
  const hasSecondFrontpage: string | boolean = '#{SECONDFRONTPAGE}';
  const swipeBannerUrl_frontpage_2: string =
    hasSecondFrontpage.indexOf('SECONDFRONTPAGE') !== -1 && hasSecondFrontpage
      ? `${swipeBannerUrl}/Image.ashx?PageNumber=2&ImageType=Normal`
      : '';

  const backgroundColor: string = '#{BACKGROUNDCOLOR}';
  const mediaUrl: string = '${MEDIA_URL}';
  const domainString: string = '#{DOMAIN}';
  const trackingPixel1: string = '#{TRACKINGPIXEL1}';
  const trackingPixel2: string = '#{TRACKINGPIXEL2}';
  const trackingPixel3: string = '#{TRACKINGPIXEL3}';

  let domainUrl: string = '';
  if (domainString.indexOf('DOMAIN') === -1) {
    switch (domainString) {
      case 'JP':
        domainUrl = 'https://jp.dk';
        break;
      case 'Politiken':
        domainUrl = 'https://politiken.dk';
        break;
      case 'Ekstra Bladet':
        domainUrl = 'https://ekstrabladet.dk';
        break;
    }
  }

  const getUrlParameter = sParam => {
    const sPageURL = window.location.search.substring(1);
    const sURLconstiables = sPageURL.split('&');
    let sParameterName: string[];

    for (let i = 0; i < sURLconstiables.length; i++) {
      sParameterName = sURLconstiables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1];
      }
    }
  };
  const getEpaperURL = getUrlParameter('src');
  const epaper_originurl = getEpaperURL
    ? decodeURIComponent(getEpaperURL)
    : domainUrl;

  const urlqueorand = swipeBannerUrl.indexOf('?') !== -1 ? '&' : '?';
  const theTarget =
    swipeBannerUrl +
    urlqueorand +
    't=' +
    encodeURIComponent(new Date().toString());

  const body = document.body;
  const container = document.createElement('div');
  container.id = 'epaper_eb_banner';
  const epaper_eb_banner_container = document.createElement('div');
  epaper_eb_banner_container.id = 'epaper_eb_banner_container';
  const htmlString = `<div id="epaper_eb_banner_logo"><div></div></div>`;
  epaper_eb_banner_container.innerHTML = htmlString;
  const epaper_eb_banner_content = document.createElement('div');
  epaper_eb_banner_content.id = 'epaper_eb_banner_content';
  const frontPage = `<img src='${swipeBannerUrl_frontpage}' />`;
  const frontPage2 =
    swipeBannerUrl_frontpage_2 !== ''
      ? `<img src='${swipeBannerUrl_frontpage_2}' />`
      : '';
  const content = `<div class="epaper_eb_banner_content_left"></div>
                            <div id="epaper_eb_cover" class="epaper_eb_banner_content_center">
                            ${frontPage}${frontPage2}
                            </div>
                            <div class="epaper_eb_banner_content_right">
                              <i class="material-icons lastpage_arrow">last_page</i>
                              <i class="material-icons nextpage_arrow">chevron_right</i>
                            </div>`;
  epaper_eb_banner_content.innerHTML = content;
  epaper_eb_banner_container.appendChild(epaper_eb_banner_content);
  const epaper_eb_banner_txt = document.createElement('div');
  epaper_eb_banner_txt.id = 'epaper_eb_banner_txt';
  epaper_eb_banner_container.appendChild(epaper_eb_banner_txt);
  const epaper_eb_banner_pointer = document.createElement('div');
  epaper_eb_banner_pointer.id = 'epaper_eb_banner_pointer';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23">
                <path class="pointer_stroke" d="M6 0h2v1H6V0zM0 8v3h1V9h2V8H0zM1 11h1v1H1V11zM3 9h1v1H3V9zM16 8h1v1h-1V8zM2 12h1v2H2V12zM3 14h1v2H3V14zM4 16h1v3H4V16zM16 17h1v3h-1V17zM12 7h2V6h-3v4h1V7zM14 7v4h1V8h1V7H14zM16 23v-3h-1v2H6v-3H5v4H16zM4 10v1h1v4h1V1H5v9H4zM9 6h2V5H9V1H8v9h1V6zM17 9h1v8h-1V9z"/>
                <polygon class="pointer_fill" points="6 1 6 15 5 15 5 11 4 11 4 10 3 10 3 9 1 9 1 11 2 11 2 12 3 12 3 14 4 14 4 16 5 16 5 19 6 19 6 22 15 22 15 20 16 20 16 17 17 17 17 9 16 9 16 8 15 8 15 11 14 11 14 7 12 7 12 10 11 10 11 6 9 6 9 10 8 10 8 1 " />
                <defs><linearGradient id="grad1" x1="65%" y1="20%" x2="45%" y2="90%"><stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(215,215,215); stop-opacity:1" /></linearGradient></defs>
                </svg>`;
  epaper_eb_banner_pointer.innerHTML = svg;
  epaper_eb_banner_container.appendChild(epaper_eb_banner_pointer);

  /**
   * Assemble banner element
   */
  container.appendChild(epaper_eb_banner_container);

  /**
   * Set up Event listeners
   */
  // $("#epaper_eb_banner_container").on("swipeleft", function() {
  //   openAdLayer("moveL");
  // });
  // $("#epaper_eb_banner_container").on("swiperight", function() {
  //   openAdLayer("moveR");
  // });

  epaper_eb_banner_container.addEventListener('click', () => {
    openAdLayer('moveL');
  });

  function openAdLayer(classArg) {
    if (!epaper_eb_banner_content.classList.contains(classArg)) {
      epaper_eb_banner_content.classList.add(classArg);
      epaper_eb_banner_txt.classList.add('fade');
      epaper_eb_banner_pointer.classList.add('fade');

      var getEpaperRandom = getUrlParameter('r');
      var pass_epaperframe_data = {
        epaperframe_ok: 'goframe',
        epaperframe_name: window.name.toString(),
        epaperframe_random: getEpaperRandom.toString(),
        epaperframe_bannercolor: backgroundColor.toString()
      };

      if (trackingPixel1.indexOf('TRACKINGPIXEL1') === -1) {
        const trackingImg1 = document.createElement('img');
        trackingImg1.src = trackingPixel1;
        body.appendChild(trackingImg1);
      }
      if (trackingPixel2.indexOf('TRACKINGPIXEL2') === -1) {
        const trackingImg2 = document.createElement('img');
        trackingImg2.src = trackingPixel2;
        body.appendChild(trackingImg2);
      }
      if (trackingPixel3.indexOf('TRACKINGPIXEL3') === -1) {
        const trackingImg3 = document.createElement('img');
        trackingImg3.src = trackingPixel3;
        body.appendChild(trackingImg3);
      }

      window.parent.postMessage(
        JSON.stringify(pass_epaperframe_data),
        epaper_originurl
      );
      setTimeout(function() {
        location.replace(theTarget);
      }, 800);
    }
  }

  /**
   * Add all styling options to head
   */
  const headFrag = document.createDocumentFragment();
  const linkTag = document.createElement('style');
  linkTag.innerHTML =
    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
  headFrag.appendChild(linkTag);
  const styleTag = document.createElement('style');

  const moreStyling = `#epaper_eb_banner_container { background-color: ${backgroundColor}; }
  #epaper_eb_banner_logo { background-color: ${backgroundColor}; }
  #epaper_eb_banner_logo > div { background: url(${mediaUrl}) left center no-repeat; background-size:contain; }`;

  styleTag.innerHTML = styles + moreStyling;
  headFrag.appendChild(styleTag);
  document.head.appendChild(headFrag);

  /**
   * Add banner to body
   */
  body.appendChild(container);
}

init();
