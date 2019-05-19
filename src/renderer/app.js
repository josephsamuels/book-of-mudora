// Load vendor packages.
import angular from 'angular';

// Load module packages.
import './app.styles.css';
import './elements';
import './services';
import './views';

angular.module('app', [
  'app.elements',
  'app.services',
  'app.views'
]);
