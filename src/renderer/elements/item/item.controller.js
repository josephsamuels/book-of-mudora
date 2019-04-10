import ItemsService from "../../services/items.service";

export default class ItemController {

  /**
   * @param {ItemsService} ItemsService The Items service.
   */
  constructor(ItemsService) {
    this._ItemsService = ItemsService;
  }
}

ItemController.$inject = ['ItemsService'];
