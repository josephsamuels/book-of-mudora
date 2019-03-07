import LocationsService from '../../services/locations.service';

export default class LocationController {

  /**
   * @param {LocationsService} LocationsService 
   */
  constructor(LocationsService) {
    'ngInject';

    this._LocationsService = LocationsService;
  }

  getLocationClasses() {
    switch (this._LocationsService.getLocationStatus(this.name)) {
      case 'checked':
        return 'btn-secondary disabled';
      case 'can-acquire':
        return 'btn-success';
      case 'can-check':
        return 'btn-warning';
      default:
        return 'btn-danger';
    }
  }
}