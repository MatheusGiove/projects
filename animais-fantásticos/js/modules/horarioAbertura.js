export default function horarioAbertura() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioFuncionamento = funcionamento.dataset.horario.split(",").map(Number);
  const data = new Date();
  const diaSemana = data.getDay();
  const horarioAtual = data.getHours();
  const diaSemanaAberto = diasSemana.indexOf(diaSemana) !== -1;
  const horarioAberto =
    horarioAtual >= horarioFuncionamento[0] &&
    horarioAtual < horarioFuncionamento[1];
  if (diaSemanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.remove("aberto");
  }
}
