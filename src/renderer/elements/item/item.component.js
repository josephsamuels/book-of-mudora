import ItemController from './item.controller';
import template from './item.template.html';
import './item.styles.css';

export default {
  bindings: {
    type: '@'
  },
  controller: ItemController,
  template: template
};
