import dungeons from './configs/dungeons';

export default class DungeonsService {
  constructor() {
    'ngInject';

    this.dungeons = dungeons;
  }

  /**
   * Returns the dungeon's access requirements.
   *
   * @param {string} dungeon The dungeon's key.
   * 
   * @returns {array|object}
   */
  getDungeonAccessRequirements(dungeon) {
    return this.dungeons[dungeon].requiredToAccess;
  }

  /**
   * Returns the dungeon's clear requirements.
   * 
   * @param {string} dungeon The dungeon's key.
   * 
   * @returns {array|object}
   */
  getDungeonClearRequirements(dungeon) {
    return this.dungeons[dungeon].requiredToClear;
  }

  getDungeonCleared(dungeon) {
    return !!this.dungeons[dungeon].cleared;
  }

  /**
   * Return the dungeon's item count.
   * 
   * @param {string} dungeon The dungeon's key.
   * 
   * @returns {array|object}
   */
  getDungeonItemCount(dungeon) {
    if (this.dungeons[dungeon].items === undefined) {
      this.dungeons[dungeon].items = this.dungeons[dungeon].maxItems;
    }

    return this.dungeons[dungeon].items;
  }

  getDungeonLabel(dungeon) {
    return this.dungeons[dungeon].label;
  }

  getDungeonPrize(dungeon) {
    if (!this.dungeons[dungeon].prize) {
      this.dungeons[dungeon].prize = 1;
    }

    return this.dungeons[dungeon].prize;
  }

  decrementItemCount(dungeon) {
    this.dungeons[dungeon].items--;

    if (this.dungeons[dungeon].items < 0) {
      this.dungeons[dungeon].items = this.dungeons[dungeon].maxItems;
    }
  }

  toggleDungeonCleared(dungeon) {
    this.dungeons[dungeon].cleared = !!!this.dungeons[dungeon].cleared;
  }
}
