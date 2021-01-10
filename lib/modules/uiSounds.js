/**
 * @file Create sound object for sound effects and background music
 */

import { Howl, Howler } from 'howler';

/**
 * Get correct sound file and preload into a new Howler instance
 * will be module:selectAndPlaySound
 * @param {string} key - the key for sound effect matched to object key
 * @function
 */

function playUISound(key) {
  /** @type {string} baseUrl - the url minus file name */
  const baseUrl =
    'https://res.cloudinary.com/el1248e7h/video/upload/v1606657282/sudswerkz/';

  /** @type {object} allSounds - key/pair values for loading sound src */
  const sounds = {
    producer: `${baseUrl}coins-tinkle.mp3`,
  };

  /** @type {object} sound - create new instance of Howler with selected sound */
  const sound = new Howl({
    src: sounds[key],
    volume: 0.4,
  });

  sound.play();
}

/** @export sound fx object available in other scripts */
export { playUISound };
