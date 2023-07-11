import ScrollSuave from "./modules/scrollSuave.js";
import sessoesAnimacao from "./modules/sessoesAnimacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/navTab.js";
import Modal from './modules/modal.js';
import Tooltip from "./modules/tooltip.js";
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

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']")
modal.init()

const tooltip = new Tooltip("[data-tooltip]")
tooltip.init()

sessoesAnimacao();
dropdownMenu();
menuMobile();
horario();
animais();
bitcoin();
