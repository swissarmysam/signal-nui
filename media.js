/**
 * @file The loaded media content script
 */

// import required modules
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { preloader } from './lib/modules/preloader';
import { initGestures } from './lib/modules/handSetup';
import { renderContent } from './lib/modules/renderContent';
import { initHandlers } from './lib/modules/handlerSetup';
import { initPlayer } from './lib/modules/videoControl';
import { initVoice } from './lib/modules/voiceSetup';

import CMS from './lib/data/cms';

/** Immediately invoke the _init function */
const _init = () => {
  // check if query string exists ...
  const params = new URLSearchParams(window.location.search);
  if (params.has('id')) {
    // get the query id and update page to content
    const id = params.get('id');
    localStorage.setItem('page', 'content');
    // render content to container and use id to select correct content
    renderContent('#media-template', '#media-container', CMS, id);
    // create video instance
    new YouTubeToHtml5();
  } else {
    // go back home and throw an error
    window.location = 'index.html?error=cnf';
  }

  initHandlers();
  initVoice();
  initGestures();
  initPlayer();

  preloader(2000);
};

_init();
