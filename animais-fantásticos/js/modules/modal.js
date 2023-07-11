export default class Modal {
  constructor(abrir, fechar, containerModal) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(containerModal);

    // Bind no this para mudar a referência do "this" na função de toggleModal

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickFora = this.clickFora.bind(this)
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickFora({ target }) {
    if (target === this.containerModal) {
      this.toggleModal();
    }
  }

  modalEvent() {
    this.abrir.addEventListener("click", this.eventToggleModal);
    this.fechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickFora);
  }

  init() {
    if (this.toggleModal && this.containerModal) {
      this.modalEvent();
    }
    return this 
  }
}
