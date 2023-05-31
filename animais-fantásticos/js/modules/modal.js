export default function modal() {
  const abrirModal = document.querySelector("[data-modal='abrir']");
  const fecharModal = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (abrirModal && fecharModal && containerModal) {
    function abraModal(e) {
      e.preventDefault();
      containerModal.classList.add("ativo");
    }
    abrirModal.addEventListener("click", abraModal);

    function fechaModal() {
      containerModal.classList.remove("ativo");
    }
    fecharModal.addEventListener("click", fechaModal);

    function clickFora(e) {
      if (e.target === this) {
        fechaModal();
      }
    }
    containerModal.addEventListener("click", clickFora);
  }
}
