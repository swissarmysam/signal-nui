/** @file handlers for content page - modal and buttons */

import { addRemoveClass } from '../utils/helpers';
import { playUISound } from '../utils/uiSounds';
import CMS from '../data/cms';

function initHandlers() {
  // handlers
  const modalClose = document.querySelector('.modal-close');
  const watchBtn = document.querySelector('.watch');
  const watchListBtn = document.querySelector('button.watch-list');
  const video = document.querySelector('#yt-container');

  // create event listeners to handle modal and toggle video
  modalClose.addEventListener('click', () => {
    addRemoveClass('.modal', 'is-active');
    if (!video.paused) video.pause();
  });
  watchBtn.addEventListener('click', () => {
    addRemoveClass('.modal', 'is-active');
    if (video.paused) video.play();
  });

  // handler for watch later button
  watchListBtn.addEventListener('click', e => {
    const obj = CMS[e.target.dataset.id];
    if (obj.onWatchlist) {
      obj.onWatchlist = false;
      watchListBtn.classList.add('is-danger');
      watchListBtn.classList.remove('is-success');
      watchListBtn.innerHTML = `➖ Remove from Watch Later`;
    } else {
      obj.onWatchlist = true;
      watchListBtn.classList.add('is-success');
      watchListBtn.classList.remove('is-danger');
      watchListBtn.innerHTML = `➕ Add to Watch Later`;
    }
  });

  console.log(
    '%c %c Handlers Ready',
    'font-size: 12px;background: orange; color: white',
    'font-size: 12px; background: white; color: black;'
  );
}

export { initHandlers };
