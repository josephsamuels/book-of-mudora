import DungeonsService from '../../services/dungeons.service';

export default class DungeonController {

  /**
   * @param {DungeonsService} DungeonsService
   */
  constructor(DungeonsService) {
    this._DungeonsService = DungeonsService;
  }

  getDungeonAccessClasses() {
    if (this._DungeonsService.getDungeonItemCount(this.name) === 0) {
      return 'btn-secondary disabled';
    }

    return 'btn-success';
  }

  getDungeonClearClasses() {
    if (this._DungeonsService.getDungeonCleared(this.name)) {
      return 'btn-secondary disabled';
    }

    return 'btn-success';
  }
}

DungeonController.$inject = ['DungeonsService'];
