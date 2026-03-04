import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelectorAll('.js-container');
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
    let poutineSelect = true;
    console.log(poutineSelect);

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.isActive == true) {
        poutineSelect = true;
        poutine++;
      }
    }

    // let nbrPoutine = 0;
    // let poutineSelected = false;
    // for (let i = 0; i < this.menu.length; i++) {
    //   const typePoutine = this.menu[i];
    //   if (typePoutine.isActive == true) {
    //     poutineSelected = true;
    //     nbrPoutine += 1;
    //     console.log(poutineSelectede);
    //   }

    // let nbrPoutine = 0;
    // for (let i = 0; i < this.menu.length; i++) {
    //   const typePoutine = this.menu[i];
    //   if (typePoutine[i] == this.types) {
    //     nbrPoutine++;
    //   }
    //   console.log(nbrPoutine);
    //   for (let i = 0; i < this.container.length; i++) {
    //     const container = this.container[i];
    //     const p = document.createElement('p');
    //     p.innerText = `Nombre total de poutine(s) : ${nbrPoutine}`;
    //     container.innerHTML = '';
    //     container.appendChild(p);
    //     console.log(this.container);
    //   }
    // }
  }
}
