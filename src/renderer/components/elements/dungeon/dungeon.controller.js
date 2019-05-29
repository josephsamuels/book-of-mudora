import DungeonsService from '../../../services/dungeons.service';

export default class DungeonController {

  /**
   * @param {DungeonsService} DungeonsService
   */
  constructor(DungeonsService) {
    this._DungeonsService = DungeonsService;
  }

  getDungeonItemsClasses() {
    if (this._DungeonsService.getDungeonItemCount(this.name) === 0) {
      return 'btn-dark disabled';
    }

    return 'btn-secondary';
  }

  getDungeonStatusClasses() {
    if (this._DungeonsService.getDungeonCleared(this.name)) {
      return 'btn-dark disabled';
    }

    switch (this._DungeonsService.getDungeonPrize(this.name)) {
      case 1:
        return 'btn-danger';
      case 2:
        return 'btn-primary';
      case 3:
        return 'btn-success';
      default:
        return 'btn-info';
    }
  }

  getTreasureIconClass() {
    switch (this._DungeonsService.getDungeonItemCount(this.name)) {
      case 0:
        return 'treasure-empty';
      default:
        return 'treasure-full';
    }
  }

  /**
   * Fired when an item button is clicked.
   * 
   * @param {MouseEvent} event The triggering mouse event.
   */
  dungeonClicked(event) {
    if (event.which === 1) {
      this._DungeonsService.toggleDungeonCleared(this.name);
    } else if (event.which === 3) {
      this._DungeonsService.incrementDungeonPrize(this.name);
    }
  }
}

DungeonController.$inject = ['DungeonsService'];
