import angular from 'angular';

angular.module('app.views', ['LocalStorageModule']);

import main from './main';
angular.module('app.views').component('main', main);
