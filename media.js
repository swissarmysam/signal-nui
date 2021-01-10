/**
 * @file The entry point for the NUI app
 */
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { preloader } from './lib/modules/preloader';
import { initGestures } from './lib/modules/handSetup';
import { renderContent } from './lib/modules/renderContent';
import { initHandlers } from './lib/modules/handlerSetup';
import { initPlayer } from './lib/modules/videoControl';

import CMS from './lib/data/cms';

/** Immediately invoke the _init function */
const _init = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('id')) {
    const id = params.get('id');
    localStorage.setItem('page', 'content');
    renderContent('#media-template', '#media-container', CMS, id);
    new YouTubeToHtml5();
  } else {
    window.location = 'index.html?error=cnf';
  }
  initHandlers();
  initPlayer();
  initGestures();
  preloader(1000);
};

_init();
