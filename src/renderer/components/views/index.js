// Load vendor packages.
import angular from 'angular';
import 'angular-animate';
import 'angular-local-storage';
import uiBootstrap from 'ui-bootstrap4';
// Load module packages.
import main from './main';

const MODULE_NAME = 'app.components.views';

angular.module(MODULE_NAME, ['ngAnimate', 'LocalStorageModule', uiBootstrap])
  .component(main.el, main);

export default MODULE_NAME;
