import { onSiteStyling } from './styles';

// <div class="epaper_banner_container"  style="position: relative; display: inline-block;">
//   <div id="handle_epaper_btn_holder_inframe" class="epaper_overlay_btn" style="display:none; position:absolute;">
//     <div id="toggle_epaper_inframe" class="handle_epaper_btn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg></div>
//   </div>
//     <div id="epaperframe_wrapper" style="width:930px; height:600px; overflow:hidden; ">
//       <iframe name="epaperframe" id="epaperframe" src="banner.html" allowfullscreen frameborder="0" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" style="overflow:visible;"></iframe>
//     </div>
// </div>

export function bannerOnSite() {
  console.log('PARENT!!!', window.parent.document);
  const parentDoc = window.parent.document;
  const reciever = parentDoc.getElementById(document.body.id);
  console.log('PARENT!!!', parentDoc, reciever);
  console.log('PARENT!!!', onSiteStyling);
  const bannerContainer = document.createElement('div');
  bannerContainer.className = 'epaper_banner_container';

  const handle_epaper_btn_holder_inframe = document.createElement('div');
  handle_epaper_btn_holder_inframe.id = `handle_epaper_btn_holder_inframe${new Date().getTime()}`;

  const toggle_epaper_inframe = document.createElement('div');
  handle_epaper_btn_holder_inframe.id = `toggle_epaper_inframe${new Date().getTime()}`;
  handle_epaper_btn_holder_inframe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg>`;
  handle_epaper_btn_holder_inframe.appendChild(
    handle_epaper_btn_holder_inframe
  );
  handle_epaper_btn_holder_inframe.appendChild(toggle_epaper_inframe);
  bannerContainer.appendChild(handle_epaper_btn_holder_inframe);

  const epaperframe_wrapper = document.createElement('div');
  epaperframe_wrapper.id = `epaperframe_wrapper${new Date().getTime()}`;
  epaperframe_wrapper.setAttribute(
    'style',
    `width:930px; height:600px; overflow:hidden;`
  );

  const epaperframe = document.createElement('div');
  epaperframe.id = `epaperframe${new Date().getTime()}`;
  epaperframe_wrapper.appendChild(epaperframe);

  bannerContainer.appendChild(epaperframe_wrapper);
  reciever.appendChild(bannerContainer);
}
