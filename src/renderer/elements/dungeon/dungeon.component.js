import DungeonController from './dungeon.controller';
import template from './dungeon.template.html';
import './dungeon.styles.css';

export default {
  bindings: {
    name: '@'
  },
  controller: DungeonController,
  template: template
};
