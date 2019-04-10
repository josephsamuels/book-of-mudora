import locations from './configs/locations.json';

export default class LocationsService {
  constructor() {
    this.locations = locations;
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
   * Returns the location's checked status.
   * 
   * @param {string} location The location to get the checked status of.
   * 
   * @returns {boolean}
   */
  getLocationCheckedStatus(location) {
    return !!this.locations[location].checked;
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
   * Returns the location's additional requirement notes.
   * 
   * @param {string} location The location to get notes from.
   * 
   * @returns {string}
   */
  getLocationNotes(location) {
    return this.locations[location].additionalRequirements;
  }

  /**
   * 
   * @param {*} location 
   */
  getLocationCheckRequirements(location) {
    return this.locations[location].requiredToCheck;
  }

  getLocationGetRequirements(location) {
    return this.locations[location].requiredToGet;
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
