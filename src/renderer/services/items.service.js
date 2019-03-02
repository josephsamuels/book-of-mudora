export default class ItemsService {
  constructor() {
    'ngInject';

    this.items = {
      'bomb': {},
      'bombos-medallion': {},
      'book-of-mudora': {},
      'boomerangs': { max: 3 },
      'bottle': {},
      'bow': { max: 3 },
      'bug-net': {},
      'canes': { max: 3 },
      'ether-medallion': {},
      'flippers': {},
      'flute': {},
      'gloves': { max: 2 },
      'hookshot': {},
      'lamp': {},
      'magic-cape': {},
      'magic-hammer': {},
      'magic-mirror': {},
      'magic-powder': {},
      'moon-pearl': {},
      'mushroom': {},
      'pegasus-boots': {},
      'quake-medallion': {},
      'rods': { max: 3 },
      'shield': { max: 3 },
      'shovel': {},
      'tunic': { min: 1, max: 3 },
      'sword': { max: 4 }
    };
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
}
