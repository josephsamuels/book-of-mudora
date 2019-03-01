export default class ItemsService {
  constructor() {
    'ngInject';

    this.items = {
      'bomb': { max: 1 },
      'bombos-medallion': { max: 1 },
      'book-of-mudora': { max: 1 },
      'boomerang': { max: 1 },
      'bottle': { max: 1 },
      'bow': { max: 3 },
      'bug-net': { max: 1 },
      'cane-byrna': { max: 1 },
      'cane-somaria': { max: 1 },
      'ether-medallion': { max: 1 },
      'flippers': { max: 1 },
      'fire-rod': { max: 1 },
      'flute': { max: 1 },
      'gloves': { max: 2 },
      'hookshot': { max: 1 },
      'ice-rod': { max: 1 },
      'lamp': { max: 1 },
      'magic-cape': { max: 1 },
      'magic-hammer': { max: 1 },
      'magic-mirror': { max: 1 },
      'magic-powder': { max: 1 },
      'magical-boomerang': { max: 1 },
      'moon-pearl': { max: 1 },
      'mushroom': { max: 1 },
      'pegasus-boots': { max: 1 },
      'quake-medallion': { max: 1 },
      'shield': { max: 3 },
      'shovel': { max: 1 },
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
    this.items[type].level = (this.items[type].level + 1) % (this.items[type].max + 1);

    if (this.items[type].level < this.items[type].min) {
      this.items[type].level = this.items[type].min;
    }
  }
}
