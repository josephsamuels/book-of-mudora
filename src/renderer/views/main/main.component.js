import angular from 'angular';

import { MainController } from './main.controller';
import template from './main.template.html';

import '../../elements/item/item.component';

const main = {
  controller: MainController,
  template: template
};

angular.module('BookOfMudora').component('main', main);
