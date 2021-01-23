/**
 * @file used for both voice and hand gestures
 * */

import displayToast from './displayToast';
import { playUISound } from './uiSounds';
import wait from './wait';

/**
 * @async wait for displayToast to finish displaying
 * @param evt{Event} - required - will take any standard event type such as click, mouseup, mousedown etc
 * @param parent{String} - required - the selector you want the event to occur on
 * @param child{String} - optional - if a child needs to be targeted - separate handling for anchor elements
 * @param sound{String} - optional - give key to play sound if wanted
 */
async function triggerEvent(evt, parent, child = '', sound = '') {
  // create el selector for event dispatch
  let el = document.querySelector(parent);
  // if child element exists
  if (child) {
    // check if the child is a anchor tag - this is needed to load content page as you cannot dispatch events on links
    if (el.querySelector(child) instanceof HTMLAnchorElement) {
      el = el.querySelector(child);
      // if it is a show link then show title
      if (el.dataset.title !== undefined) {
        displayToast(1750, `Loading ${el.dataset.title} ...`, 'is-success');
      } else {
        displayToast(1750, `Loading page ...`, 'is-success');
      }
      await wait(2000);
      // load page with query string to render content
      window.location.href = el.href;
      return;
    }
    // otherwise fall through to default and fire event ...
    el = el.querySelector(child);
  }
  const event = new Event(evt);
  // play sound if it exists
  if (sound) playUISound(sound);
  // dispatch the event
  return el.dispatchEvent(event);
}

export default triggerEvent;
