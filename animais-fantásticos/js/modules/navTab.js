export default class NavTab {
  constructor(lista, descricao) {
    this.lista = document.querySelectorAll(lista);
    this.descricao = document.querySelectorAll(descricao)
  }

  ativarTab(index) {
    this.descricao.forEach((valor) => {
      valor.classList.remove("ativo", this.descricao[index].dataset.anima);
    });
    this.descricao[index].classList.add("ativo", this.descricao[index].dataset.anima);
  }

  listaEvent() {
    this.lista.forEach((image, index) => {
      image.addEventListener("click", () => this.ativarTab(index))
    })
  }

  init() {
    if (this.lista.length && this.descricao.length) {
      this.ativarTab(0)
      this.listaEvent()
    }
  }
}
