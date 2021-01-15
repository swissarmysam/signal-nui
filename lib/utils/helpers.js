/**
 * @file grouped helper functions
 */

/** @param {String} word - text to be capitalised */
const capitalize = word =>
  typeof word === 'string'
    ? `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    : '';

/**
 * @param {number} min - lower range
 * @param {number} max - upper range
 * @param {number} decimalPlaces - how many decimal places i.e. 2 = 3.14
 */
function getRandIntToXPlaces(min, max, decimalPlaces = 0) {
  const power = 10 ** decimalPlaces;
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
    Math.floor(Math.random() * (max * power - min * power) + min * power) /
    (min * power)
  ).toFixed(decimalPlaces);
}

/**
 * @param {*} el - element to affect class on
 * @param {*} cls - name of the class
 */
function addRemoveClass(el, cls) {
  el = document.querySelector(el);
  if (el.classList.contains(cls)) {
    el.classList.remove(cls);
  } else {
    el.classList.add(cls);
  }
}

export { capitalize, getRandIntToXPlaces as randomInt, addRemoveClass };
