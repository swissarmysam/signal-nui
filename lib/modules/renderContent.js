/**
 * @file Parse and render the contents of CMS object
 * @import
 */

import Handlebars from 'handlebars';

function renderContent(templateId, containerId, obj, id = '') {
  const html = document.querySelector(`${templateId}`).innerHTML;
  const renderTemplate = Handlebars.compile(html);
  if (html.includes('{{/each}}')) {
    document.querySelector(`${containerId}`).innerHTML = renderTemplate({
      slides: obj,
    });
  } else {
    id = obj[id];
    document.querySelector(`${containerId}`).innerHTML = renderTemplate(id);
  }
}

export { renderContent };
