export default class ScrollAnima {
  constructor(sections, porcentagem) {
    this.sections = document.querySelectorAll(sections);
    this.windowAltura = window.innerHeight * porcentagem;
    this.checkDistance = this.checkDistance.bind(this)
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offsetTop: Math.round(sectionTop - this.windowAltura),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offsetTop) {
        section.element.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance)
  } 
}
