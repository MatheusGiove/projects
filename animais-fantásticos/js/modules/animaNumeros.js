export default class AnimaNumeros {
  constructor(numeros, observadorTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observadorTarget = document.querySelector(observadorTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementarNumeros(numero) {
    const total = +numero.innerText;
    let start = 0;
    const incremento = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 20 * Math.random());
  }

  addNumeros() {
    // Usa-se o "constructor" pois a função incrementarNumeros faz parte da Classe e não do objeto
    this.numeros.forEach(numero => this.constructor.incrementarNumeros(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observador.disconnect();
      this.addNumeros();
    }
  }

  addMutationObserver() {
    this.observador = new MutationObserver(this.handleMutation);
    this.observador.observe(this.observadorTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observadorTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
