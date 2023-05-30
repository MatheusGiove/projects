function navTab() {
  const lista = document.querySelectorAll(".js-animais-lista > li");
  const descricao = document.querySelectorAll(
    ".js-animais-descricao > section"
  );

  if (lista.length && descricao.length) {
    descricao[0].classList.add("ativo");
    function ativarTab(index) {
      descricao.forEach((valor) => {
        valor.classList.remove("ativo");
      });
      descricao[index].classList.add("ativo");
    }
    lista.forEach((imagem, index) => {
      imagem.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}
navTab();

function accordion() {
  const lista = document.querySelectorAll(".js-accordion dt");
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
accordion();

function scrollSuave() {
  const menu = document.querySelectorAll('.js-menu a[href^="#"]');
  if (menu.length) {
    function scrollToSection(elemento) {
      elemento.preventDefault();
      const href = this.getAttribute("href");
      const sessao = document.querySelector(href);
      sessao.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    menu.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
scrollSuave();

function sessaoAnimacao() {
  const sessoes = document.querySelectorAll(".js-sessao");
  if (sessoes.length) {
    function animarSessao() {
      sessoes.forEach((item) => {
        const distancia = item.getBoundingClientRect().top;
        const windowAltura = window.innerHeight * 0.7;
        const visivel = distancia - windowAltura < 0;
        if (visivel) {
          item.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", animarSessao);
  }
  animarSessao()
}
sessaoAnimacao()
