import { onSiteStyling } from './styles';

// <div class="epaper_banner_container"  style="position: relative; display: inline-block;">
//   <div id="handle_epaper_btn_holder_inframe" class="epaper_overlay_btn" style="display:none; position:absolute;">
//     <div id="toggle_epaper_inframe" class="handle_epaper_btn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg></div>
//   </div>
//     <div id="epaperframe_wrapper" style="width:930px; height:600px; overflow:hidden; ">
//       <iframe name="epaperframe" id="epaperframe" src="banner.html" allowfullscreen frameborder="0" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" style="overflow:visible;"></iframe>
//     </div>
// </div>

const parentDoc = window.parent.document;
const parentBody = parentDoc.body;
const receiver = parentDoc.getElementById(document.body.id);
const epaper_iframe_name = receiver.querySelector('iframe');
const bannerContainer = document.createElement('div');
const handle_epaper_btn_holder_inframe = document.createElement('div');
const toggle_epaper_inframe = document.createElement('div');
const epaperframe_wrapper = document.createElement('div');
const epaperframe = document.createElement('div');
const toggle_epaper = document.createElement('div');
const epaper_overlay = document.createElement('div');
const handle_epaper_btn_holder = document.createElement('div');
const randomNum = new Date().getTime();
const theClass = navigator.userAgent.match(/(iPod|iPhone|iPad)/)
  ? 'epaperframe_expanded_ios'
  : 'epaperframe_expanded';

export function bannerOnSite() {
  console.log('PARENT!!!', window.parent.document);
  console.log('PARENT!!!', parentDoc, receiver);
  console.log('PARENT!!!', onSiteStyling);
  bannerContainer.className = 'epaper_banner_container';
  handle_epaper_btn_holder_inframe.id = `handle_epaper_btn_holder_inframe${randomNum}`;

  handle_epaper_btn_holder_inframe.id = `toggle_epaper_inframe${randomNum}`;
  handle_epaper_btn_holder_inframe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg>`;
  handle_epaper_btn_holder_inframe.appendChild(toggle_epaper_inframe);
  bannerContainer.appendChild(handle_epaper_btn_holder_inframe);

  epaperframe_wrapper.id = `epaperframe_wrapper${randomNum}`;
  epaperframe_wrapper.setAttribute(
    'style',
    'height:600px;overflow:hidden;width:930px;'
  );
  epaperframe.id = `epaperframe${randomNum}`;
  epaperframe_wrapper.appendChild(epaperframe);

  bannerContainer.appendChild(epaperframe_wrapper);

  const overlayFrag = document.createDocumentFragment();

  overlayFrag.appendChild(epaper_overlay);
  overlayFrag.appendChild(bannerContainer);
  overlayFrag.appendChild(handle_epaper_btn_holder);
  receiver.appendChild(overlayFrag);
}

function toggleAdLayerOverlay() {
  console.log('Toggle epaper_overlay');
  const theClass = navigator.userAgent.match(/(iPod|iPhone|iPad)/)
    ? 'epaperframe_expanded_ios'
    : 'epaperframe_expanded';

  epaperframe_wrapper.classList.toggle(theClass);

  //if (epaper_iframe_name.hasClass("epaperframe_expanded")) {
  if (epaperframe_wrapper.classList.contains(theClass)) {
    console.log('vis luk knap');
    //alert("YES "+ theClass);

    /**
     * pol.dk
     */
    // $bContainPar.classList.add("epaperframe_expanded");
    // $bContain.classList.add("pol_expanded");
    // $bContainAd.classList.add("pol_expanded");

    epaper_overlay.style.display = 'block';
    handle_epaper_btn_holder.style.display = 'block';
    handle_epaper_btn_holder_inframe.style.display = 'none';

    //$("body").css( {"overflow": "hidden" } );
    parentBody.classList.add('epaperframe_expanded_body');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      epaperframe_wrapper.classList.add('epaperframe_wrapper_ios_height');
    }
  } else {
    //alert("No "+ theClass);
    console.log('vis åbn knap');
    epaper_overlay.style.display = 'none';

    /**
     * pol.dk
     */
    // $bContainPar.removeClass("epaperframe_expanded");
    // $bContain.removeClass("pol_expanded");
    // $bContainAd.removeClass("pol_expanded");

    handle_epaper_btn_holder.style.display = 'none';
    handle_epaper_btn_holder_inframe.style.display = 'block';

    //$("body").css( {"overflow": "scroll" } );
    parentBody.classList.remove('epaperframe_expanded_body');
    epaperframe_wrapper.classList.remove('epaperframe_wrapper_ios_height');
  }

  calculateFontsize('toggle layer');
}

function getContrast50(hexcolor) {
  return parseInt(hexcolor, 16) > 0xffffff / 1.25 ? '333333' : 'ffffff';
}

function calculateFontsize(arg) {
  const newFontSize = (toggle_epaper.clientWidth * 0.27).toString();
  toggle_epaper.style.fontSize = newFontSize;
  toggle_epaper_inframe.style.fontSize = newFontSize;
  console.log(arg + ': recalculating toggle button font size');
}

export function openOverlay(pass_data) {
  console.log(pass_data);
  var epaperframe_id = pass_data.epaperframe_name;
  var random_from_banner = pass_data.epaperframe_random;
  var color_from_banner = pass_data.epaperframe_bannercolor;
  var color_from_banner =
    color_from_banner.indexOf('#') !== -1
      ? color_from_banner.substring(1)
      : color_from_banner;

  console.log(
    'Message received: ##' +
      color_from_banner +
      ' - ' +
      epaperframe_id +
      ', random: ' +
      random_from_banner
  );
  //var epaper_iframe_name = $("iframe[name="+ epaperframe_id +"]")
  epaper_iframe_name.classList.add('epaperframe_expanded');

  /**
   * pol.dk -->
   */
  // var $bContain = $("#epaperframe_wrapper"+ epaper_banner_random).closest(".adtech-container");
  // var $bContainAd = $bContain.closest(".ad");
  // var $bContainPar = $bContain.closest("section");
  // $bContainPar.css( {"z-index":"80990"} );
  // $bContainPar.classList.add("epaperframe_expanded");
  // $bContain.classList.add("pol_expanded");
  // $bContainAd.classList.add("pol_expanded");

  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    epaperframe_wrapper.classList.add('epaperframe_wrapper_ios');
    epaperframe_wrapper.classList.add('epaperframe_wrapper_ios_height');
  }

  epaperframe_wrapper.classList.add(theClass);

  epaper_overlay.id = 'epaper_overlay' + randomNum;
  epaper_overlay.className = 'epaper_overlay_expanded';

  handle_epaper_btn_holder.id = 'handle_epaper_btn_holder' + randomNum;

  toggle_epaper.id = 'toggle_epaper' + randomNum;
  toggle_epaper.innerHTML = 'luk&nbsp;&times;';
  toggle_epaper.appendChild(toggle_epaper);

  handle_epaper_btn_holder.className = 'epaper_overlay_btn epaper_handle_btn';
  handle_epaper_btn_holder.style.backgroundColor = `#${color_from_banner}`;
  toggle_epaper.classList.add('handle_epaper_btn');
  parentBody.classList.add('epaperframe_expanded_body');

  const contrast = `#${getContrast50(color_from_banner)}`;
  toggle_epaper_inframe.style.color = contrast;
  const svgBtn = toggle_epaper_inframe.querySelector(
    '.epaper_layer_expand'
  ) as SVGAElement;
  svgBtn.style.fill = contrast;

  console.log('Button text color: ' + contrast);

  calculateFontsize('init');

  //Toggle layer
  handle_epaper_btn_holder.addEventListener('click', toggleAdLayerOverlay);
  epaper_overlay.addEventListener('click', toggleAdLayerOverlay);
  handle_epaper_btn_holder_inframe.addEventListener(
    'click',
    toggleAdLayerOverlay
  );
}
