/**
 * @file The entry point for the NUI app
 */
import { preloader } from './lib/modules/preloader';
import { initSwiper } from './lib/modules/videoSwiper';
import { initGestures } from './lib/modules/handSetup';
import { renderContent } from './lib/modules/renderContent';
import CMS from './lib/data/cms';

/** Immediately invoke the _init function */
const _init = () => {
  renderContent('#slide-template', '#slide-list', CMS);
  localStorage.setItem('page', 'home');
  localStorage.setItem('firstVisit', true);

  initSwiper();
  initGestures();
  preloader(1000);
};

_init();
