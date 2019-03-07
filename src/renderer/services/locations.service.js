import locations from './configs/locations.json';
import RequirementsService from './requirements.service';

export default class LocationsService {
  /**
   * @param {RequirementsService} RequirementsService
   */
  constructor(RequirementsService) {
    'ngInject';

    this.locations = locations;
    this._RequirementsService = RequirementsService;
  }

  /**
   * Returns the location's current checked status.
   *
   * @param {string} location The identifier of the location to get the checked status of.
   *
   * @returns {string}
   */
  getLocationStatus(location) {
    if (this.locations[location].checked) {
      return 'checked';
    }

    if (this.locations[location].requiredToGet) {
      return this._RequirementsService.checkRequirements(this.locations[location].requiredToGet) ? 'can-acquire' :
        (this.locations[location].requiredToCheck && this._RequirementsService.checkRequirements(this.locations[location].requiredToCheck)) ? 'can-check' : 'unavailable';
    }

    return 'can-acquire';
  }

  /**
   * Return the collection of locations.
   *
   * @returns {array}
   */
  getLocations() {
    return this.locations;
  }

  /**
   * Returns the location's item count.
   *
   * @param {string} location The location to get the item count of.
   *
   * @returns {number}
   */
  getLocationItemCount(location) {
    return this.locations[location].items;
  }

  /**
   * Returns the location's name.
   *
   * @param {string} location The location to get the name of.
   *
   * @returns {string}
   */
  getLocationName(location) {
    return this.locations[location].name;
  }

  /**
   * Toggle the locations checked status.
   *
   * @param {string} location The identifier of the location to check.
   */
  toggleLocationCheckedStatus(location) {
    this.locations[location].checked = !this.locations[location].checked;
  }
}
