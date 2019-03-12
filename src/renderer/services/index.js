import angular from 'angular';

angular.module('app.services', []);

import DungeonsService from './dungeons.service';
angular.module('app.services').service('DungeonsService', DungeonsService);

import ItemsService from './items.service';
angular.module('app.services').service('ItemsService', ItemsService);

import LocationsService from './locations.service';
angular.module('app.services').service('LocationsService', LocationsService);

import RegionsService from './regions.service';
angular.module('app.services').service('RegionsService', RegionsService);

import RequirementsService from './requirements.service';
angular.module('app.services').service('RequirementsService', RequirementsService);
