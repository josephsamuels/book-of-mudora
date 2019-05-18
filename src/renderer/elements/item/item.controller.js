import ItemsService from "../../services/items.service";

export default class ItemController {

  /**
   * @param {ItemsService} ItemsService The Items service.
   */
  constructor(ItemsService) {
    this._ItemsService = ItemsService;
  }

  /**
   * Fired when an item button is clicked.
   * 
   * @param {MouseEvent} event The triggering mouse event.
   */
  itemClicked(event) {
    if (event.which === 1) {
      this._ItemsService.incrementItemLevel(this.type);
    } else if (event.which === 3 && this.isMedallion) {
      this._ItemsService.incrementDungeonRequirement(this.type);
    }
  }
}

ItemController.$inject = ['ItemsService'];
