function initPlayer() {
  const player = document.querySelector('.player');
  const video = player.querySelector('#yt-container');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const viewMode = player.querySelector('[data-view]');
  const skipButtons = player.querySelectorAll('[data-skip]');

  const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  };

  const updateButton = e => {
    const icon = e.target.paused ? '►' : '❚❚';
    console.log(icon);
    toggle.textContent = icon;
  };

  const skip = e => {
    video.currentTime += parseFloat(e.target.dataset.skip);
  };

  const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  const updateViewIcon = () => {
    if (document.fullscreenElement) {
      viewMode.textContent = '🡴🡵';
    } else {
      viewMode.textContent = '🡶🡷';
    }
  };

  const toggleFullscreen = () => {
    console.log(document.fullscreenElement);
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

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);

  toggle.addEventListener('click', togglePlay);
  skipButtons.forEach(button => button.addEventListener('click', skip));
  viewMode.addEventListener('click', toggleFullscreen);
}

export { initPlayer };
