import LocationsService from '../../services/locations.service';
import RequirementsService from '../../services/requirements.service';

export default class LocationController {

  /**
   * @param {LocationsService}    LocationsService
   * @param {RequirementsService} RequirementsService
   */
  constructor(LocationsService, RequirementsService) {
    'ngInject';

    this._LocationsService = LocationsService;
    this._RequirementsService = RequirementsService;
  }

  /**
   * Returns additional CSS classes for the location.
   */
  getLocationClasses() {
    if (this._LocationsService.getLocationCheckedStatus(this.name)) {
      return 'btn-secondary disabled';
    }

    if (this._LocationsService.getLocationGetRequirements(this.name)) {
      return this._RequirementsService.checkRequirements(
        this._LocationsService.getLocationGetRequirements(this.name)
      ) ? 'btn-success' :
        (this._LocationsService.getLocationCheckRequirements(this.name) &&
          this._RequirementsService.checkRequirements(this._LocationsService.getLocationCheckRequirements(this.name))) ? 'btn-warning' : 'btn-danger';
    }

    return 'btn-success';
  }
}
