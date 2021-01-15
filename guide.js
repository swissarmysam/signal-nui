/**
 * @file The init script for guide page
 */
import { preloader } from './lib/modules/preloader';
import { initGestures } from './lib/modules/handSetup';
import { initVoice } from './lib/modules/voiceSetup';

/** Immediately invoke the _init function */
const _init = () => {
  // set page to guide to limit gestures
  localStorage.setItem('page', 'guide');

  initVoice();
  initGestures();
  preloader(500);
};

_init();
