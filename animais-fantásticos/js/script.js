import ScrollSuave from "./modules/scrollSuave.js";
import sessoesAnimacao from "./modules/sessoesAnimacao.js";
import accordion from "./modules/accordion.js";
import navTab from "./modules/navTab.js";
import modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import dropdownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menuMobile.js";
import horario from "./modules/horarioAbertura.js";
import animais from "./modules/fetchAnimais.js";
import bitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='menu'] a[href^='#']")
scrollSuave.init()

navTab();
accordion();
sessoesAnimacao();
modal();
initTooltip();
dropdownMenu();
menuMobile();
horario();
animais();
bitcoin();
