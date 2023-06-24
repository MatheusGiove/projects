import animaNumeros from "./animaNumeros.js";
export default function initfetchAnimais() {
  async function fetchAnimais(url) {
    const animaisReponse = await fetch(url);
    const animaisJson = await animaisReponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    animaisJson.forEach((animais) => {
      const animaisDiv = createAnimals(animais);
      numerosGrid.appendChild(animaisDiv);
    });
    animaNumeros();
  }

  function createAnimals(animais) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animais.especie}</h3><span data-numero>${animais.total}</span>`;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
