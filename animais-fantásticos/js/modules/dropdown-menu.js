import outsideClick from './outsideClick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const eventos = ["click"]
  dropdownMenus.forEach(menu => {
    eventos.forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, eventos, () => {
      this.classList.remove('ativo');
    });
  };
}