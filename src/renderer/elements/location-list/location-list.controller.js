import LocationsService from '../../services/locations.service';

export default class LocationListController {

  /**
   * @param {LocationsService} LocationsService
   */
  constructor(LocationsService) {
    'ngInject';

    this.locations = LocationsService.getLocations();
  }
}
