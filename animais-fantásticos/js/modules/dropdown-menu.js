export default function dropdrown() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  dropdownMenu.forEach((menu) => {
    menu.addEventListener("click", handleClick);
  });
  function handleClick(e) {
    e.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  }
  function outsideClick(elemento, functionCallback) {
    const html = document.documentElement;
    const outside = "data-outside";
    if (!elemento.hasAttribute(outside)) {
      elemento.setAttribute(outside, "");
      html.addEventListener("click", handleClickOutside);
    }
    function handleClickOutside(e) {
      if (!elemento.contains(e.target)) {
        elemento.removeAttribute(outside);
        html.removeEventListener("click", handleClickOutside);
        functionCallback();
      }
    }
  }
}
