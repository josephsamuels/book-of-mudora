import DungeonsService from '../../services/dungeons.service';
import RequirementsService from '../../services/requirements.service';

export default class DungeonController {

  /**
   * @param {DungeonsService} DungeonsService
   * @param {RequirementsService} RequirementsService
   */
  constructor(DungeonsService, RequirementsService) {
    'ngInject';

    this._DungeonsService = DungeonsService;
    this._RequirementsService = RequirementsService;
  }

  getDungeonAccessClasses() {
    if (this._DungeonsService.getDungeonItemCount(this.name) === 0) {
      return 'btn-secondary disabled';
    }

    if (this._DungeonsService.getDungeonClearRequirements(this.name)) {
      return this._RequirementsService.checkRequirements(
        this._DungeonsService.getDungeonAccessRequirements(this.name)

      ) ? 'btn-warning' :
        (this._DungeonsService.getDungeonClearRequirements(this.name) &&
          this._RequirementsService.checkRequirements(this._DungeonsService.getDungeonAccessRequirements(this.name))) ? 'btn-success' : 'btn-danger';
    }

    return 'btn-success';
  }

  getDungeonClearClasses() {
    if (this._DungeonsService.getDungeonCleared(this.name)) {
      return 'btn-secondary disabled';
    }

    if (this._DungeonsService.getDungeonClearRequirements(this.name)) {
      return this._RequirementsService.checkRequirements(
        this._DungeonsService.getDungeonAccessRequirements(this.name)
      ) && this._RequirementsService.checkRequirements(
        this._DungeonsService.getDungeonClearRequirements(this.name)
      ) ? 'btn-success' : 'btn-danger'
    }

    return 'btn-success';
  }
}
