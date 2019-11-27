// <div class="epaper_banner_container"  style="position: relative; display: inline-block;">
//   <div id="handle_epaper_btn_holder_inframe" class="epaper_overlay_btn" style="display:none; position:absolute;">
//     <div id="toggle_epaper_inframe" class="handle_epaper_btn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg></div>
//   </div>
//     <div id="epaperframe_wrapper" style="width:930px; height:600px; overflow:hidden; ">
//       <iframe name="epaperframe" id="epaperframe" src="banner.html" allowfullscreen frameborder="0" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" style="overflow:visible;"></iframe>
//     </div>
// </div>
const bannerOnSite = {
  container: null,
  domainString: '',
  epaperIframe: null,
  sectionParent: null,
  topBody: null
};
const sizeStyling = `
  height: 100%;
  width: 100%;
  `;
export function initOverlay() {
  const options = window.apnOptions;
  bannerOnSite.domainString = options.domainString || '';
  const topDoc = window.top.document;
  bannerOnSite.topBody = topDoc.body;
  console.log('initOverlay', topDoc, bannerOnSite.topBody);
  console.log('initOverlay', window.top !== window.parent);
  let containerId = document.body.id;
  if (window.top !== window.parent) {
    const parent = window.parent;
    const parentHead = parent.document.head;
    containerId = parent.document.body.id;
    const cssEl = document.createElement('style') as HTMLStyleElement;
    cssEl.type = 'text/css';
    const styles = `
    html, body, iframe, div {
      ${sizeStyling}
    }
    `;

    cssEl.appendChild(document.createTextNode(styles));

    parentHead.appendChild(cssEl);
  }

  bannerOnSite.container = topDoc.getElementById(containerId);
  if (bannerOnSite.container === null) {
    throw new Error('TILBUDSAVIS no container!');
    return;
  }
  bannerOnSite.epaperIframe = bannerOnSite.container.querySelector('iframe');
}
export function openOverlay() {
  initOverlay();
  let containerPadding = '0';
  if (window.innerWidth > 640) {
    containerPadding = '20px';
  }
  const containerStyling = `
  background: rgba( 0, 0, 0, .8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${containerPadding};
  z-index: ${9999 * 9999};
  `;
  console.log('openOverlay', bannerOnSite.container);
  bannerOnSite.container.setAttribute('style', containerStyling);

  bannerOnSite.epaperIframe.setAttribute('style', sizeStyling);
  bannerOnSite.epaperIframe.parentNode.setAttribute('style', sizeStyling);
  if (
    bannerOnSite.sectionParent === null &&
    bannerOnSite.domainString.toLowerCase() === 'politiken'
  ) {
    let parent = bannerOnSite.container.parentNode;
    while (parent) {
      if (parent.nodeName === 'body') {
        break;
      }
      if (
        parent.nodeName === 'SECTION' &&
        parent.classList.contains('container')
      ) {
        bannerOnSite.sectionParent = parent;
        break;
      } else {
        parent = parent.parentNode;
      }
    }
  }

  if (bannerOnSite.sectionParent !== null) {
    bannerOnSite.sectionParent.style.position = 'static';
  }
  bannerOnSite.topBody.style.overflow = 'hidden';
}

export function closeOverlay() {
  const containerStyling = '';
  bannerOnSite.container.setAttribute('style', containerStyling);
  const closerStyling = '';
  bannerOnSite.epaperIframe.setAttribute('style', closerStyling);
  if (bannerOnSite.sectionParent !== null) {
    bannerOnSite.sectionParent.style.position = 'relative';
  }
  bannerOnSite.topBody.style.overflow = '';
}
