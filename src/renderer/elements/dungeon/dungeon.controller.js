import DungeonsService from '../../services/dungeons.service';

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
        return 'btn-primary';
      case 2:
        return 'btn-success';
      case 3:
        return 'btn-info';
      case 4:
        return 'btn-danger';
      default:
        return 'btn-secondary';
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
