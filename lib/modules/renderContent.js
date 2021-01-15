/**
 * @file Parse and render the contents of CMS object
 */

import Handlebars from 'handlebars';

/**
 * @param {String} templateId - the template element where content will be rendered
 * @param {String} containerId - the template container (parent el)
 * @param {Object} obj - CMS object
 * @param {Number} id - id of the required content from URL query
 */
function renderContent(templateId, containerId, obj, id = '') {
  const html = document.querySelector(`${templateId}`).innerHTML;
  const renderTemplate = Handlebars.compile(html);
  // if html is an array
  if (html.includes('{{/each}}')) {
    document.querySelector(`${containerId}`).innerHTML = renderTemplate({
      slides: obj, // loop over CMS object
    });
  } else {
    // else grab required content
    id = obj[id];
    document.querySelector(`${containerId}`).innerHTML = renderTemplate(id);
  }
}

export { renderContent };
