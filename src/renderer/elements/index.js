import angular from 'angular';

angular.module('app.elements', []);

import item from './item';
angular.module('app.elements').component('item', item);

import itemGrid from './item-grid';
angular.module('app.elements').component('itemGrid', itemGrid);

import location from './location';
angular.module('app.elements').component('location', location);

import locationList from './location-list';
angular.module('app.elements').component('locationList', locationList);
