/** @file a wrapper for bulmaToast module - allows easier customisation */

import * as bulmaToast from 'bulma-toast';

/**
 * @param {Number} duration - default is 2 seconds - often needs to be used with wait util to stop message overlaying each other
 * @param {String} message - message to be displayed in notification
 * @param {String} type - standard bulma class for colours
 */
function displayToast(duration = 2000, message, type = 'is-info') {
  bulmaToast.toast({
    single: true,
    duration,
    message,
    type,
    position: 'bottom-center',
  });
}

export default displayToast;
