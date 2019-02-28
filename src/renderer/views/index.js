import angular from 'angular';

let appViews = angular.module('app.views', []);

import main from './main';
appViews.component('main', main);

export default appViews;
