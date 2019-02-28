import angular from 'angular';

import { ItemController } from './item.controller';
import template from './item.template.html';
import './item.styles.css';

const item = {
    bindings: {

    },
    controller: ItemController,
    template: template
};

angular.module('BookOfMudora').component('item', item);