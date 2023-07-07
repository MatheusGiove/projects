export default class ScrollSuave {
  constructor(links, options) {
    this.link = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(elemento) {
    elemento.preventDefault();
    const href = elemento.currentTarget.getAttribute("href");
    const sessao = document.querySelector(href);
    sessao.scrollIntoView(this.options);
  }

  linkEvent() {
    this.link.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.link.length) {
      this.linkEvent();
    }
    return this;
  }
}
