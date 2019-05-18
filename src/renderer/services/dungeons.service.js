import dungeons from './configs/dungeons';

export default class DungeonsService {
  constructor() {
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
    return this.dungeons[dungeon].requiredToAccess || [];
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

  /**
   * Returns the dungeon's cleared status.
   *
   * @param {string} dungeon The dungeon's key.
   *
   * @returns {boolean}
   */
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

  /**
   * Returns the dungeon's label.
   *
   * @param {string} dungeon The dungeon's key.
   *
   * @returns {string}
   */
  getDungeonLabel(dungeon) {
    return this.dungeons[dungeon].label;
  }

  /**
   * Returns the dungeon's prize.
   *
   * @param {string} dungeon The dungeon's key.
   *
   * @returns {string}
   */
  getDungeonPrize(dungeon) {
    if (!this.dungeons[dungeon].prize) {
      this.dungeons[dungeon].prize = 0;
    }

    return this.dungeons[dungeon].prize;
  }

  /**
   * Decrements the dungeon's item count.
   *
   * @param {string} dungeon The dungeon's key.
   */
  decrementItemCount(dungeon) {
    this.dungeons[dungeon].items--;

    if (this.dungeons[dungeon].items < 0) {
      this.dungeons[dungeon].items = this.dungeons[dungeon].maxItems;
    }
  }

  /**
   * Toggles the dungeon's clear status.
   *
   * @param {string} dungeon The dungeon's key.
   */
  toggleDungeonCleared(dungeon) {
    this.dungeons[dungeon].cleared = !!!this.dungeons[dungeon].cleared;
  }

  incrementDungeonPrize(dungeon) {
    this.dungeons[dungeon].prize = (this.dungeons[dungeon].prize + 1) % 5;
  }
}
