/** @file little pause helper function */

// return fulfilled promise after time passes
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

export default wait;
