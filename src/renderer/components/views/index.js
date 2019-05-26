// Load vendor packages.
import angular from 'angular';
import 'angular-animate';
import 'angular-local-storage';
import modal from 'ui-bootstrap4/src/modal';
// Load module packages.
import main from './main';

const MODULE_NAME = 'app.components.views';

angular.module(MODULE_NAME, ['ngAnimate', 'LocalStorageModule', modal])
  .component(main.el, main);

export default MODULE_NAME;
