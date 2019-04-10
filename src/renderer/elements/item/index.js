import ItemController from './item.controller';
import template from './item.template.html';
import './item.styles.css';

export default {
  bindings: {
    type: '@',
    isMedallion: '<',
    showLevel: '<'
  },
  controller: ItemController,
  template: template
};
