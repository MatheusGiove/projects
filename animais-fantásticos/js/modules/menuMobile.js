import outsideClick from "./outsideClick.js";

export default function menuMobilie() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click"];
  
  function openMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }
  
  eventos.forEach(evento => {
    menuButton.addEventListener(evento, openMenu);
  });
}
