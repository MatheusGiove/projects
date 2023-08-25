class CriarCategoria {
  constructor () {
    this.categoria = document.querySelector('#criarCategoria')
    this.adicionar = document.querySelector('#adicionarCategoria')
  }

  pegarValorCategoria(valorDaCategoria) {
    return valorDaCategoria
  }
  
  adicionarNovaCategoria() {
    const article = document.createElement('article')
    const title = document.createElement("h1")
    title.appendChild(article)
    if (this.categoria.value) {
      console.log('Valor verdadeiro')
    } else {
      console.log('Valor falso')
    }

  }
  adicionandoCategoria() {
    this.adicionar.addEventListener('click', this.adicionarNovaCategoria)
  }
  init() {
    console.log(this.adicionar)
    console.log(this.categoria)
    this.adicionandoCategoria()
    return this
  }
}
const adicionar = new CriarCategoria().init()
