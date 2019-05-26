// Load vendor packages.
import angular from 'angular';

// Load module packages.
import './app.styles.css';
import components from './components';
import services from './services';

angular.module('app', [
  components,
  services
]);
