import resetModal from '../../modals/reset-modal';
import closeModal from '../../modals/close-modal';

export default class MainController {
  constructor($uibModal, RemoteService, DungeonsService, ItemsService) {
    this._$uibModal = $uibModal;
    this._RemoteService = RemoteService;
    this._DungeonsService = DungeonsService;
    this._ItemsService = ItemsService;
  }

  quit() {
    let modal = this._$uibModal.open({
      component: closeModal.el
    });

    modal.result.then(() => {
      this._RemoteService.close()
    }).catch(() => { });
  }

  resetAll() {
    let modal = this._$uibModal.open({
      component: resetModal.el
    });

    modal.result.then(() => {
      this._DungeonsService.reset();
      this._ItemsService.reset();
    }).catch(() => { });
  }
}

MainController.$inject = ['$uibModal', 'RemoteService', 'DungeonsService', 'ItemsService']
