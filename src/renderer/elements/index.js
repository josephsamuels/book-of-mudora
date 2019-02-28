import angular from 'angular';

let appElements = angular.module('app.elements', []);

import item from './item';
appElements.component('item', item);

export default appElements;
