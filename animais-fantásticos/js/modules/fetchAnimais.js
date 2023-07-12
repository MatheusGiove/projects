import AnimaNumeros from "./animaNumeros.js";

export default function fetchAnimais(url, target) {
  function criarAnimalElemento(animais) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animais.especie}</h3><span data-numero>${animais.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const animaisDiv = criarAnimalElemento(animal);
    numerosGrid.appendChild(animaisDiv);
  }

  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisReponse = await fetch(url);
      const animaisJson = await animaisReponse.json();
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero()
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
