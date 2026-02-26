export default class Poutine {
  constructor(element) {
    // console.log('testetstst');

    this.element = element;
    this.types = this.element.querySelectorAll('.js-btnPoutine');
    this.selectedType = '';
    // this.isActive = true;
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
      //   console.log(type);
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const typePoutine = this.types[i];
      typePoutine.classList.remove('is-active');
      // if (condition) {
      // }
      console.log(typePoutine);
    }
    event.currentTarget.classList.add('is-active');
    // this.typePoutine.classList.add('is-active');
    this.selectType.innerText = this.types;
    this.updatePhoto();
  }

  updatePhoto() {}
}
