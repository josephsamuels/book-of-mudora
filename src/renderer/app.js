import angular from 'angular';

import './app.styles.css';

import './elements';
import './services';
import './views';

angular.module('app', [
  'app.elements',
  'app.services',
  'app.views'
]);
