import ScrollSuave from "./modules/scrollSuave.js";
import ScrollAnima from "./modules/scrollAnima.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/navTab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menuMobile.js";
import HorarioAbertura from "./modules/horarioAbertura.js";
import SlideNav from "./modules/slideNav.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";

fetchAnimais("./animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrollSuave = new ScrollSuave("[data-menu='menu'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-accordion='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-lista='lista'] > li",
  "[data-descricao='descricao'] > section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima("[data-sessao='sessao']", 0.7);
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const horarioAbertura = new HorarioAbertura("[data-semana]", "aberto", 3);
horarioAbertura.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow("#previousButton", "#nextButton");
slide.addControl("#custom-controls")
