import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor (menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.eventos = ["click"];
    else this.eventos = events;
    this.openMenu = this.openMenu.bind(this)
  }
  
  openMenu() {
    this.menuList.classList.add("ativo");
    this.menuButton.classList.add("ativo");
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove("ativo");
      this.menuButton.classList.remove("ativo");
    });
  }
  
  menuEvent() {
    this.eventos.forEach(evento => {
    this.menuButton.addEventListener(evento, this.openMenu);
  });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.menuEvent();
    }
    return this
  }
}
