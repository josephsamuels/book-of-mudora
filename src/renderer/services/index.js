import angular from 'angular';

angular.module('app.services', []);

import ItemsService from './items.service';
angular.module('app.services').service('ItemsService', ItemsService);
