import { bannerInFrame } from './bannerInFrame';
import { bannerOnSite } from './bannerOnSite';

window.addEventListener('load', () => {
  bannerInFrame();
  bannerOnSite();
  console.log('oooh ${CLICK_URL}');
});
