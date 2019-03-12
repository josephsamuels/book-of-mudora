import DungeonsService from './dungeons.service';
import ItemsService from './items.service';
import LocationsService from './locations.service';
import RegionsService from './regions.service';

export default class RequirementsService {
  /**
   * @param {DungeonsService}  DungeonsService
   * @param {ItemsService}     ItemsService
   * @param {LocationsService} LocationsService
   * @param {RegionsService}   RegionsService
   */
  constructor(DungeonsService, ItemsService, LocationsService, RegionsService) {
    'ngInject';

    this._DungeonsService = DungeonsService;
    this._ItemsService = ItemsService;
    this._LocationsService = LocationsService;
    this._RegionsService = RegionsService;
  }

  /**
   * Check a location's requirements.
   *
   * @param {array|object} requirements The requirement to check.
   * 
   * @returns {boolean}
   */
  checkRequirements(requirements) {
    if (Array.isArray(requirements)) {
      let result = null;

      if (requirements.length === 0) {
        return true;
      }

      for (let requirement of requirements) {
        if (result === null) {
          result = !Array.isArray(requirement);
        }

        if (Array.isArray(requirement)) {
          result = result || this.checkRequirements(requirement);
        } else {
          result = result && this.checkRequirements(requirement);
        }
      }

      return result;
    }

    switch (requirements.type) {
      case 'boss':
        return this.checkBossRequirement(requirements);
      case 'dungeon':
        return this.checkDungeonRequirement(requirements);
      case 'item':
        return this.checkItemRequirement(requirements);
      case 'location':
        return this.checkLocationRequirement(requirements);
      case 'prize':
        return this.checkPrizeRequirement(requirements);
      case 'region':
        return this.checkRegionRequirement(requirements);
    }

    return false;
  }

  /**
   * Checks a given boss requirement.
   *
   * @param {object} requirement The requirement to check.
   * 
   * @returns {boolean}
   */
  checkBossRequirement(requirement) {
    return true;
  }

  /**
   * Checks a given dungeon requirement.
   * 
   * @param {object} requirement The requirement to check.
   * 
   * @returns {boolean}
   */
  checkDungeonRequirement(requirement) {
    return this.checkRequirements(this._DungeonsService.getDungeonAccessRequirements(requirement.name));
  }

  /**
   * Checks a given item requirement.
   *
   * @param {object} requirement The requirement to check.
   * 
   * @returns {boolean}
   */
  checkItemRequirement(requirement) {
    let level = requirement.level || 1;

    if (Array.isArray(level)) {
      for (let lvl of level) {
        if (this._ItemsService.getItemLevel(requirement.name) === lvl) {
          return true;
        }
      }

      return false;
    }

    return this._ItemsService.getItemLevel(requirement.name) >= level;
  }

  /**
   * Checks a given location requirement.
   * 
   * @param {object} requirement The requirement to check.
   * 
   * @returns {boolean}
   */
  checkLocationRequirement(requirement) {
    return this._LocationsService.getLocationCheckedStatus(requirement.name);
  }

  /**
   * Checks a given prize requirement.
   *
   * @param {object} requirement The requirement to check.
   * 
   * @returns {boolean}
   */
  checkPrizeRequirement(requirement) {
    return true;
  }

  /**
   * Checks a given region requirement.
   *
   * @param {object} requirement The requirement to check.
   * 
   * @returns {boolean}
   */
  checkRegionRequirement(requirement) {
    return this.checkRequirements(this._RegionsService.getRegionAccessRequirements(requirement.name));
  }
}
