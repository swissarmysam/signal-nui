/**
 * @file The entry point for the NUI app
 */

//  Import required modules for script
import { preloader } from './lib/modules/preloader';
import { initSwiper } from './lib/modules/videoSwiper';
import { initGestures } from './lib/modules/handSetup';
import { initVoice } from './lib/modules/voiceSetup';
import { renderContent } from './lib/modules/renderContent';
import CMS from './lib/data/cms';

/** Immediately invoke the _init function */
const _init = () => {
  // grab containers for rendering home page content
  renderContent('#slide-template', '#slide-list', CMS);
  // set page to home for limiting gestures
  localStorage.setItem('page', 'home');

  initSwiper();
  initVoice();
  initGestures();
  preloader();
};

_init();
