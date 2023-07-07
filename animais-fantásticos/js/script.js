import ScrollSuave from "./modules/scrollSuave.js";
import sessoesAnimacao from "./modules/sessoesAnimacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/navTab.js";
import modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import dropdownMenu from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menuMobile.js";
import horario from "./modules/horarioAbertura.js";
import animais from "./modules/fetchAnimais.js";
import bitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='menu'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-accordion='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-lista='lista'] > li", "[data-descricao='descricao'] > section");
tabNav.init()
console.log(tabNav)

sessoesAnimacao();
modal();
initTooltip();
dropdownMenu();
menuMobile();
horario();
animais();
bitcoin();
