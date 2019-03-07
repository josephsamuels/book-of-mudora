import regions from './configs/regions';

export default class RegionsService {
  constructor() {
    'ngInject';

    this.regions = regions;
  }

  /**
   * Returns the region's access requirements.
   *
   * @param {string} region The region's key.
   */
  getRegionAccessRequirements(region) {
    return this.regions[region].requiredToAccess;
  }
}
