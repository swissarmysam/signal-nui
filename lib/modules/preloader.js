/**
 * @file while scripts load show preload icon
 */

 /** @param {Number} sim - base amount of time to wait */
function preloader(sim = 3500) {
  const pageloader = document.querySelector('.pageloader');

  const loaded = window.addEventListener('load', () => {
    setInterval(() => pageloader.classList.remove('is-active'), sim);
    window.removeEventListener('load', loaded);
  });
}

export { preloader };
