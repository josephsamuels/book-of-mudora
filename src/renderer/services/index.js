import angular from 'angular';

angular.module('app.services', []);

import ItemsService from './items.service';
angular.module('app.services').service('ItemsService', ItemsService);

import LocationsService from './locations.service';
angular.module('app.services').service('LocationsService', LocationsService);

import RequirementsService from './requirements.service';
angular.module('app.services').service('RequirementsService', RequirementsService);
