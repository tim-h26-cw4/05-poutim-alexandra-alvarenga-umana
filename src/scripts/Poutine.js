export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-btnPoutine');
    this.selectedType = '';

    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const typePoutine = this.types[i];
      typePoutine.classList.remove('is-active');

      console.log(typePoutine);
    }
    event.currentTarget.classList.add('is-active');

    this.selectedType = event.currentTarget.innerText;
    this.updatePhoto();
  }

  updatePhoto() {
    const imgPoutines = this.element.querySelectorAll('img');

    for (let i = 0; i < imgPoutines.length; i++) {
      const imgPoutine = imgPoutines[i];
      imgPoutine.classList.add('is-active');

      imgPoutine.src = `assets/images/${this.selectedType}.png`;
    }
  }
}
