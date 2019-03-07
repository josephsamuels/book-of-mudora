import LocationController from './location.controller';
import template from './location.template.html';
import './location.styles.css';

export default {
  bindings: {
    name: '@'
  },
  controller: LocationController,
  template: template
};