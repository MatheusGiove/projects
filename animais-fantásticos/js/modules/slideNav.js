import Slide from "./slide.js";

export default class SlideNav extends Slide {
  constructor (slide, wrapper) {
    super (slide, wrapper)
    this.bindEventControl()
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev)
    this.nextElement = document.querySelector(next)
    this.arrowEvents()
  }

  arrowEvents() {
    this.prevElement.addEventListener("click", this.prevSlide)
    this.nextElement.addEventListener("click", this.nextSlide)
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href=#slide${index + 1}></a></li>`
    })
    this.wrapper.appendChild(control)
    return control
  }

  eventControl(item, index) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeSlidePosition(index)
    })
    this.wrapper.addEventListener("changeEvent", this.activeControlItem)
  }

  activeControlItem() {
    this.controlArray.forEach((element) => element.classList.remove(this.activeClass));
    this.controlArray[this.index.active].classList.add(this.activeClass)
  }

  addControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children]
    this.activeControlItem()
    this.controlArray.forEach(this.eventControl)
    // Mesma coisa que:
    // ...forEach((item, index) => this.eventControl(item, index))
  }

  bindEventControl() {
    this.eventControl = this.eventControl.bind(this)
    this.activeControlItem = this.activeControlItem.bind(this)
  }
}