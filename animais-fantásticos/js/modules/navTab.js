export default function navTab() {
  const lista = document.querySelectorAll("[data-lista='lista'] > li");
  const descricao = document.querySelectorAll(
    "[data-descricao='descricao'] > section"
  );

  function ativarTab(index) {
    descricao.forEach((valor) => {
      valor.classList.remove("ativo", descricao[index].dataset.anima);
    });
    descricao[index].classList.add("ativo", descricao[index].dataset.anima);
  }

  if (lista.length && descricao.length) {
    descricao[0].classList.add(descricao[0].dataset.anima);
    descricao[0].classList.add("ativo");
    lista.forEach((imagem, index) => {
      imagem.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}
