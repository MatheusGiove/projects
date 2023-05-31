export default function scrollSuave() {
  const menu = document.querySelectorAll("[data-menu='menu'] a[href^='#']");
  if (menu.length) {
    function scrollToSection(elemento) {
      elemento.preventDefault();
      const href = this.getAttribute("href");
      const sessao = document.querySelector(href);
      sessao.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    menu.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
