import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelectorAll('.js-container');

    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
      // console.log(this.menu);
    }

    const btnCommandes = this.element.querySelectorAll('.js-btnCommande');
    for (let i = 0; i < btnCommandes.length; i++) {
      const btnCommande = btnCommandes[i];
      btnCommande.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    // const nbrPoutine = Math.floor(this.menu);
    // console.log(nbrPoutine);
    // this.menu += 1;
    for (let i = 0; i < this.menu.length; i++) {
      const nbrPoutine = this.menu[i];
      this.menu[i] += 1;
      console.log(nbrPoutine);

      for (let i = 0; i < this.container.length; i++) {
        const container = this.container[i];
        const p = document.createElement('p');
        p.innerText = `Nombre total de poutine(s) : ${nbrPoutine}`;
        container.innerHTML = '';
        container.appendChild(p);
        console.log(this.container);
      }
    }
  }
}
