//Ativar barra no Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar items de compra

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Ativar anime

if (window.SimpleAnime) {
  new SimpleAnime();
}

Soma(a + b)
Subtração(a - b)
Multipicacão(a * b)
Divisão(a / b)

