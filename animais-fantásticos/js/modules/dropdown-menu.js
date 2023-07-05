import outsideClick from './outsideClick.js';

export default function initDropdownMenu() {
  const eventos = ["click"]
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, eventos, () => {
      this.classList.remove('ativo');
    });
  };
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    eventos.forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
