import DungeonController from './dungeon.controller';
import template from './dungeon.template.html';
import './dungeon.styles.css';

export default {
  bindings: {
    type: '@'
  },
  controller: DungeonController,
  template: template
};