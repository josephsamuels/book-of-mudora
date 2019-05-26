import angular from 'angular';
import items from './configs/items.json';

export default class ItemsService {
  constructor(localStorageService) {
    this._localStorageService = localStorageService;

    this.items = angular.copy(items);

    if (this._localStorageService.get('items')) {
      this.items = this._localStorageService.get('items');
    }
  }

  /**
   * Returns true or false if this item is a medallion.
   * 
   * @param {String} type The item's type.
   */
  isMedallion(type) {
    return !!this.items[type].isMedallion;
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

    this.save();
  }

  /**
   * Increments the item's dungeon requirement value.
   * 
   * @param {string} type The item's type.
   */
  incrementDungeonRequirement(type) {
    this.items[type].dungeon = (this.items[type].dungeon + 1) % 4;

    this.save();
  }

  /**
   * Reset items to default.
   */
  reset() {
    this.items = angular.copy(items);

    this.save();
  }

  save() {
    this._localStorageService.set('items', this.items);
  }
}

ItemsService.$inject = ['localStorageService'];
