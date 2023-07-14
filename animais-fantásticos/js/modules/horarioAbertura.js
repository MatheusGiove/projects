export default class HorarioAbertura {
  constructor (funcionamento, activeClass, fusoHorario) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass
    this.fusoHorario = fusoHorario;
  }

  dadosAgora() {
    this.data = new Date();
    this.diaSemana = this.data.getDay();
    this.horarioAtual = this.data.getUTCHours() - this.fusoHorario;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioFuncionamento = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  isOpen() {
    const diaSemanaAberto = this.diasSemana.indexOf(this.diaSemana) !== -1;
    const horarioAberto = this.horarioAtual >= this.horarioFuncionamento[0] && this.horarioAtual < this.horarioFuncionamento[1];
    return diaSemanaAberto && horarioAberto;
  }
  
  abrir() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.activeClass)
    } else {
      this.funcionamento.classList.remove(this.activeClass)
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosAgora()
      this.dadosFuncionamento()
      this.abrir()
    }
    return this
  } 
}
