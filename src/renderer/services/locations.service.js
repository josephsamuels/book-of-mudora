import locations from './configs/locations.json';
import ItemsService from './items.service';

export default class LocationsService {
  /**
   * @param {ItemsService} ItemsService 
   */
  constructor(ItemsService) {
    'ngInject';

    this.locations = locations;
    this._ItemsService = ItemsService;
  }

  /**
   * Returns the location's current checked status.
   * 
   * @param {string} location The identifier of the location to get the checked status of.
   */
  getLocationStatus(location) {
    if (this.locations[location].checked) {
      return 'checked';
    }

    if (this.locations[location].requiredToGet) {
      if (this.locations[location].requiredToCheck) {
        return this.checkLocationRequirements(this.locations[location].requiredToGet) ? 'can-acquire' :
          this.checkLocationRequirements(this.locations[location].requiredToCheck) ? 'can-check' : 'unavailable';
      }

      return this.checkLocationRequirements(this.locations[location].requiredToGet) ? 'can-acquire' : 'unavailable';
    }

    return 'can-acquire';
  }

  /**
   * Check a location's requirements.
   * 
   * @param {array|object} requirements The requirement to check.
   */
  checkLocationRequirements(requirements) {
    if (Array.isArray(requirements)) {
      let result = null;

      if (requirements.length === 0) {
        return true;
      }

      for (let requirement of requirements) {
        if (Array.isArray(requirement)) {
          if (result === null) {
            result = false;
          }

          result = result || this.checkLocationRequirements(requirement);
        } else {
          if (result === null) {
            result = true;
          }

          result = result && this.checkLocationRequirements(requirement);
        }
      }

      return result;
    }

    let level = requirements.level || 1;

    return this._ItemsService.getItemLevel(requirements.type) >= level;
  }

  /**
   * Returns the location's name.
   * 
   * @param {string} location The location to get the name of.
   */
  getLocationName(location) {
    return this.locations[location].name
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