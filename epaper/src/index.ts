import { bannerInFrame } from './bannerInFrame';
import { initOverlay } from './bannerOnSite';

window.addEventListener('load', () => {
  bannerInFrame();
  initOverlay();
  console.log('oooh ${CLICK_URL}');
});
