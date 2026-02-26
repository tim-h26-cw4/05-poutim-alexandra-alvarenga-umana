import Poutine from './Poutine.js';

export default class Chef {
  constructor() {
    this.element = element;
    this.menu = [];
    this.container = '';
    console.log('Test');

    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
      console.log(this.menu);
    }
  }
}
