export default function animaNumeros() {
  function animarNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }
  const observadorTarget = document.querySelector(".numeros");
  let observador;
  function mutation(mutationEvent) {
    if (mutationEvent[0].target.classList.contains("ativo")) {
      observador.disconnect()
      animarNumeros()
    }
  }
  observador = new MutationObserver(mutation);
  observador.observe(observadorTarget, { attributes: true });
}
