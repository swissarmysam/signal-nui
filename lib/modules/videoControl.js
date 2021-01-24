/** @file custom video player code - based on Bos (2018) https://github.com/wesbos/JavaScript30/tree/master/11%20-%20Custom%20Video%20Player */

/** @function initPlayer - code for loaded video content in media page */
function initPlayer() {
  // Selectors
  const player = document.querySelector('.player');
  const video = player.querySelector('#yt-container');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const viewMode = player.querySelector('[data-view]');
  const skipButtons = player.querySelectorAll('[data-skip]');

  // if video is paused then play else pause
  const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  };

  const updateButton = e => {
    const icon = e.target.paused ? '►' : '❚❚';
    // console.log(icon);
    toggle.textContent = icon;
  };

  // convert and add to time to move progress bar and video forward
  const skip = e => {
    video.currentTime += parseFloat(e.target.dataset.skip);
  };

  // update progress bar
  const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  // display correct view mode icon
  const updateViewIcon = () => {
    if (document.fullscreenElement) {
      viewMode.textContent = '🡴🡵';
    } else {
      viewMode.textContent = '🡶🡷';
    }
  };

  // toggle view mode
  const toggleFullscreen = () => {
    // console.log(document.fullscreenElement);
    if (!document.fullscreenElement) {
      if (player.requestFullScreen) {
        player.requestFullScreen();
      } else if (player.webkitRequestFullScreen) {
        player.webkitRequestFullScreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      }
    } else {
      document.exitFullscreen();
    }
    updateViewIcon();
  };

  // create listeners
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);

  toggle.addEventListener('click', togglePlay);
  skipButtons.forEach(button => button.addEventListener('click', skip));
  viewMode.addEventListener('click', toggleFullscreen);

  console.log(
    '%c %c Video Ready',
    'font-size: 12px;background: green; color: white',
    'font-size: 12px; background: white; color: black;'
  );
}

export { initPlayer };
