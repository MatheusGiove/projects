export default class Accordion {
  constructor(lista) {
    this.lista = document.querySelectorAll(lista);
    this.ativo = "ativo"
  }

  toggleAccordion(pergunta) {
    pergunta.classList.toggle(this.ativo);
    pergunta.nextElementSibling.classList.toggle(this.ativo);
  }

  listaEvent() {
    this.lista.forEach((pergunta) => {
      pergunta.addEventListener("click", () => this.toggleAccordion(pergunta));
    });
  }

  init() {
    if (this.lista.length) {
      this.toggleAccordion(this.lista[0])
      this.listaEvent();
    }
    return this;
  }
}
