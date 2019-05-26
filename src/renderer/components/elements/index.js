// Load vendor packages.
import angular from 'angular';
// Load module packages.
import dungeon from './dungeon';
import dungeonGrid from './dungeon-grid';
import item from './item';
import itemGrid from './item-grid';

const MODULE_NAME = 'app.components.elements';

angular.module(MODULE_NAME, [])
  .component(dungeon.el, dungeon)
  .component(dungeonGrid.el, dungeonGrid)
  .component(item.el, item)
  .component(itemGrid.el, itemGrid);

export default MODULE_NAME;
