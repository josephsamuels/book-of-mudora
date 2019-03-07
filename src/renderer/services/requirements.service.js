import ItemsService from './items.service';
import RegionsService from './regions.service';

export default class RequirementsService {
  /**
   * @param {ItemsService}   ItemsService
   * @param {RegionsService} RegionsService
   */
  constructor(ItemsService, RegionsService) {
    'ngInject';

    this._ItemsService = ItemsService;
    this._RegionsService = RegionsService;
  }

  /**
   * Check a location's requirements.
   *
   * @param {array|object} requirements The requirement to check.
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
      case 'item':
        return this.checkItemRequirement(requirements);
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
   */
  checkBossRequirement(requirement) {
    return true;
  }

  /**
   * Checks a given item requirement.
   *
   * @param {object} requirement The requirement to check.
   */
  checkItemRequirement(requirement) {
    let level = requirement.level || 1;

    return this._ItemsService.getItemLevel(requirement.name) >= level;
  }

  /**
   * Checks a given prize requirement.
   *
   * @param {object} requirement The requirement to check.
   */
  checkPrizeRequirement(requirement) {
    return true;
  }

  /**
   * Checks a given region requirement.
   *
   * @param {object} requirement The requirement to check.
   */
  checkRegionRequirement(requirement) {
    return this.checkRequirements(this._RegionsService.getRegionAccessRequirements(requirement.name));
  }
}
