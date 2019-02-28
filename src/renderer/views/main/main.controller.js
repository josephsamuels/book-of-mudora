export default class MainController {
  constructor() {
    'ngInject';

    this.total = 0;
  }

  incrementTotal() {
    this.total++;
  }
}
