import angular from 'angular';

angular.module('app.elements', []);

import item from './item';
angular.module('app.elements').component('item', item);

import items from './items';
angular.module('app.elements').component('items', items);
