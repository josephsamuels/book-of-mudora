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

  getDungeonClasses() {
    if (this._DungeonsService.getDungeonCleared(this.name)) {
      return 'btn-secondary disabled';
    }

    return 'btn-success';
  }
}
