/**
 * @file used for both voice and hand gestures
 * */

import displayToast from './displayToast';
import wait from './wait';

/**
 * @async wait for displayToast to finish displaying
 * @param evt{Event} - required
 * @param parent{String} - required
 * @param child{String} - optional
 */
async function triggerEvent(evt, parent, child = '') {
  // create el selector for event dispatch
  let el = document.querySelector(parent);
  // if child element exists
  if (child) {
    // check if the child is a anchor tag - this is needed to load content page as you cannot dispatch events on links
    if (el.querySelector(child) instanceof HTMLAnchorElement) {
      el = el.querySelector(child);
      localStorage.setItem('page', 'media');
      displayToast(1750, `Loading ${el.dataset.title} ...`);
      await wait(2000);
      // load page with query string to render content
      window.location.href = el.href;
      return;
    }
    // otherwise fall through to default and fire event ...
    el = el.querySelector(child);
  }
  const event = new Event(evt);
  return el.dispatchEvent(event);
}

export default triggerEvent;
