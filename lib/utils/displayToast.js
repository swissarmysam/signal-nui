/** @file */

import * as bulmaToast from 'bulma-toast';

function displayToast(duration = 2000, message, type = 'is-info') {
  bulmaToast.toast({
    single: true,
    duration,
    message,
    type,
    position: 'bottom-center',
    // closeOnClick: true,
    // animate: { in: 'slideInUp', out: 'slideOutDown' },
  });
}

export default displayToast;
