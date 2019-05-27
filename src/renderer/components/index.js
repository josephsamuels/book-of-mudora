// Load vendor packages.
import angular from 'angular';
// Load module packages.
import './components.styles.css';
import elements from './elements';
import modals from './modals';
import views from './views';

const MODULE_NAME = 'app.components';

angular.module('app.components', [elements, modals, views]);

export default MODULE_NAME;
