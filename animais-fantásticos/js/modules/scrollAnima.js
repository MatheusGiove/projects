import debounce from "./debounce.js"

export default class ScrollAnima {
  constructor(sections, porcentagem) {
    this.sections = document.querySelectorAll(sections);
    this.windowAltura = Math.round(window.innerHeight * porcentagem);
    this.checkDistance = debounce(this.checkDistance.bind(this), 100)
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offsetTop: sectionTop - this.windowAltura
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offsetTop) {
        section.element.classList.add("ativo");
      } else if (section.element.classList.contains("ativo")) {
        section.element.classList.remove("ativo")
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
