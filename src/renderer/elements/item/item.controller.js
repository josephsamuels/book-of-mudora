import ItemsService from "../../services/items.service";

export default class ItemController {
  
    /**
     * @param {ItemsService} ItemsService The Items service.
     */
    constructor(ItemsService) {
        'ngInject';

        this._ItemsService = ItemsService;
    }
}
