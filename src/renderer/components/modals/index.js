// Load vendor packages.
import angular from 'angular';
// Load module packages.
import resetModal from './reset-modal';
import closeModal from './close-modal';

const MODULE_NAME = 'app.components.modals';

angular.module(MODULE_NAME, [])
  .component(closeModal.el, closeModal)
  .component(resetModal.el, resetModal);

export default MODULE_NAME;
