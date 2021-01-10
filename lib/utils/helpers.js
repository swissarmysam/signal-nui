const capitalize = word =>
  typeof word === 'string'
    ? `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    : '';

function getRandIntToXPlaces(min, max, decimalPlaces) {
  const power = 10 ** decimalPlaces;
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
    Math.floor(Math.random() * (max * power - min * power) + min * power) /
    (min * power)
  ).toFixed(decimalPlaces);
}

function addRemoveClass(el, cls) {
  el = document.querySelector(el);
  if (el.classList.contains(cls)) {
    el.classList.remove(cls);
  } else {
    el.classList.add(cls);
  }
}

export { capitalize, getRandIntToXPlaces as randomInt, addRemoveClass };
