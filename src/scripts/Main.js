import Chef from './Chef.js';
import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main
Icons.load();

class Main {
  constructor() {
    this.init();
  }

  init() {
    const chefs = document.querySelector('[data-component="Chefs"]');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
      console.log(chef);
    }
  }
}

new Main();
