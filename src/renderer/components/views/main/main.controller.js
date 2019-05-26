export default class MainController {
  constructor(RemoteService, DungeonsService, ItemsService) {
    this._RemoteService = RemoteService;
    this._DungeonsService = DungeonsService;
    this._ItemsService = ItemsService;
  }

  resetAll() {
    this._DungeonsService.reset();
    this._ItemsService.reset();
  }
}

MainController.$inject = ['RemoteService', 'DungeonsService', 'ItemsService']
