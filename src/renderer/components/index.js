// Load vendor packages.
import angular from 'angular';
// Load module packages.
import elements from './elements';
import views from './views';

const MODULE_NAME = 'app.components';

angular.module('app.components', [elements, views]);

export default MODULE_NAME;
