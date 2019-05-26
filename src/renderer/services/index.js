// Load vendor packages.
import angular from 'angular';
import 'angular-local-storage';
// Load module packages.
import DungeonsService from './dungeons.service';
import ItemsService from './items.service';
import LocationsService from './locations.service';
import RegionsService from './regions.service';
import RemoteService from './remote.service';
import localStorageConfig from './local-storage.config';

const MODULE_NAME = 'app.services';

angular.module(MODULE_NAME, ['LocalStorageModule'])
  .config(localStorageConfig)
  .service('DungeonsService', DungeonsService)
  .service('ItemsService', ItemsService)
  .service('LocationsService', LocationsService)
  .service('RegionsService', RegionsService)
  .service('RemoteService', RemoteService);

export default MODULE_NAME;
