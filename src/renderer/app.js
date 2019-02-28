import angular from 'angular';

import './app.styles.css';

import './elements';
import './views';

angular.module('app', [
  'app.elements',
  'app.views'
]);
