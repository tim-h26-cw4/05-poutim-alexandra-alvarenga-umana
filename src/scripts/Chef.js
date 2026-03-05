import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelectorAll('.js-container');
    this.types = this.element.querySelectorAll('.js-btnPoutine');

    this.isActive = false;
    // this.sendOrder();
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnCommandes = this.element.querySelectorAll('.js-btnCommande');
    for (let i = 0; i < btnCommandes.length; i++) {
      const btnCommande = btnCommandes[i];
      btnCommande.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    let nbrPoutine = 0;
    let poutineActive = false;
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      if (type[this.menu] == this.selectedType) {
        poutineActive = true;
        nbrPoutine++;
        console.log(nbrPoutine);
      }
      // console.log(nbrPoutine);
      // for (let i = 0; i < this.container.length; i++) {
      //   const container = this.container[i];
      //   const p = document.createElement('p');
      //   p.innerText = `Nombre total de poutine(s) : ${nbrPoutine}`;
      //   container.innerHTML = '';
      //   container.appendChild(p);
      //   console.log(this.container);
      // }
    }
  }
}
