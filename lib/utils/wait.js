/** @file little pause helper function */

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

export default wait;
