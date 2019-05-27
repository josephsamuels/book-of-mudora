import template from './close-modal.template.html';

export default {
  bindings: {
    close: '&',
    dismiss: '&'
  },
  el: 'closeModal',
  template: template
};
