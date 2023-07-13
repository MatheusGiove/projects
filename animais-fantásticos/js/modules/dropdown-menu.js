import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor (dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (events === undefined) this.eventos = ["click"];
    else this.eventos = events;
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    const element = e.currentTarget
    element.classList.add('ativo');
    outsideClick(element, this.eventos, () => {
      element.classList.remove('ativo');
    });
  };

  dropdownEvent() {
    this.dropdownMenus.forEach(menu => {
    this.eventos.forEach(userEvent => {
      menu.addEventListener(userEvent, this.handleClick);
    });
  });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.dropdownEvent()
    };
    return this;
  };
}
