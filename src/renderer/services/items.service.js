import items from './configs/items.json';

export default class ItemsService {
  constructor() {
    this.items = items;
  }

  /**
   * Returns the item's dungeon requirement value.
   * 
   * @param {string} type The item's type.
   */
  getItemDungeonRequirement(type) {
    if (!this.items[type].dungeon) {
      this.items[type].dungeon = 0;
    }

    return this.items[type].dungeon;
  }

  /**
   * Returns the item's current level.
   *
   * @param {string} type The item's type.
   */
  getItemLevel(type) {
    if (!this.items[type].level) {
      this.items[type].level = this.items[type].min || 0;
    }

    return this.items[type].level;
  }

  /**
   * Increments the item's current level.
   *
   * @param {string} type The item's type.
   */
  incrementItemLevel(type) {
    this.items[type].level = (this.items[type].level + 1) % ((this.items[type].max || 1) + 1);

    if (this.items[type].level < this.items[type].min) {
      this.items[type].level = this.items[type].min;
    }
  }

  /**
   * Increments the item's dungeon requirement value.
   * 
   * @param {string} type The item's type.
   */
  incrementDungeonRequirement(type) {
    this.items[type].dungeon = (this.items[type].dungeon + 1) % 4;
  }
}
