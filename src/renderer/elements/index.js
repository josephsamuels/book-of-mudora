// Load vendor packages.
import angular from 'angular';

// Load module packages.
import dungeon from './dungeon';
import dungeonGrid from './dungeon-grid';
import item from './item';
import itemGrid from './item-grid';

angular.module('app.elements', [])
  .component('dungeon', dungeon)
  .component('dungeonGrid', dungeonGrid)
  .component('item', item)
  .component('itemGrid', itemGrid);
