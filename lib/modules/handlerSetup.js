/** @file */

import { addRemoveClass } from '../utils/helpers';
import CMS from '../data/cms';

function initHandlers() {
  const modalClose = document.querySelector('.modal-close');
  const watchBtn = document.querySelector('.watch');
  const watchListBtn = document.querySelector('button.watch-list');
  const video = document.querySelector('#yt-container');

  modalClose.addEventListener('click', () => {
    addRemoveClass('.modal', 'is-active');
    if (!video.paused) video.pause();
  });
  watchBtn.addEventListener('click', () => {
    addRemoveClass('.modal', 'is-active');
    if (video.paused) video.play();
  });

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
}

export { initHandlers };
