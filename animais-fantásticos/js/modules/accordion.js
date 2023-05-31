export default function accordion() {
  const lista = document.querySelectorAll("[data-accordion='accordion'] dt");
  const ativo = "ativo";
  if (lista.length) {
    lista[0].classList.add(ativo);
    lista[0].nextElementSibling.classList.add(ativo);
    function ativarAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }
    lista.forEach((pergunta) => {
      pergunta.addEventListener("click", ativarAccordion);
    });
  }
}
