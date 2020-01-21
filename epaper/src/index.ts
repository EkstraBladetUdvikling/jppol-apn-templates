import { bannerInFrame } from './bannerInFrame';
import { initOverlay } from './bannerOnSite';

window.addEventListener('load', () => {
  bannerInFrame();
  initOverlay();
});
