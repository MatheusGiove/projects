export default function sessaoAnimacao() {
  const sessoes = document.querySelectorAll("[data-sessao='sessao']");

  function animarSessao() {
    sessoes.forEach((item) => {
      const distancia = item.getBoundingClientRect().top;
      const windowAltura = window.innerHeight * 0.7;
      const visivel = distancia - windowAltura < 0;
      if (visivel) item.classList.add("ativo"); // if de uma linha 
    });
  }

  if (sessoes.length) {
    window.addEventListener("scroll", animarSessao);
    animarSessao();
  }
}
