export default function modal() {
  const abrirModal = document.querySelector("[data-modal='abrir']");
  const fecharModal = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

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
  if (abrirModal && fecharModal && containerModal) {
    containerModal.addEventListener("click", clickFora);
  }
}
