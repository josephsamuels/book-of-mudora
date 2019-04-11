export default class MainController {
  constructor(RemoteService) {
    this._RemoteService = RemoteService;
  }
}

MainController.$inject = ['RemoteService']
