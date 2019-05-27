import template from './reset-modal.template.html';

export default {
  bindings: {
    close: '&',
    dismiss: '&'
  },
  el: 'resetModal',
  template: template
};
