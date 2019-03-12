import DungeonsService from '../../services/dungeons.service';

export default class DungeonController {

  /**
   * @param {DungeonsService} DungeonsService 
   */
  constructor(DungeonsService) {
    'ngInject';

    this._DungeonsService = DungeonsService;
  }
}