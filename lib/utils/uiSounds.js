/**
 * @file Create sound object for sound effects
 */

import { Howl, Howler } from 'howler';

/**
 * Get correct sound file and preload into a new Howler instance
 * will be module:playUISound
 * @param {string} key - the key for sound effect matched to object key
 * @function
 */

function playUISound(key) {
  /** @type {string} baseUrl - the url minus file name */
  const baseUrl = 'https://media.publit.io/file/signal/';

  /** @type {object} allSounds - key/pair values for loading sound src */
  const sounds = {
    select: `${baseUrl}select-t.mp3`,
    back: `${baseUrl}back.mp3`,
    forward: `${baseUrl}forward.mp3`,
    info: `${baseUrl}info-f.mp3`,
    cancel: `${baseUrl}cancel.mp3`,
    error: `${baseUrl}error-a.mp3`,
    success: `${baseUrl}success-p.mp3`,
  };

  /** @type {object} sound - create new instance of Howler with selected sound */
  const sound = new Howl({
    src: sounds[key],
    volume: 0.2,
  });

  // console.log(sound);

  sound.play();
}

/** @export sound fx object available in other scripts */
export { playUISound };
