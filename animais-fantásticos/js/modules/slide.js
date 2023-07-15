import debounce from "./debounce.js";

export default class Slide {
  constructor (slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.activeClass = "ativo"
    this.changeEvent = new Event("changeEvent")
  }

  // Mouse event

  onMouseDown(e) {
    let moveType;
    if (e.type === "mousedown") {
      e.preventDefault();
      this.dist.startX = e.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = e.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.slide.addEventListener(moveType, this.onMouseMove, { passive: true });
    this.transition(false);
  }

  onMouseMove(e) {
    const pointerPosition =
      e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onMouseUp(e) {
    const moveType = e.type === "mouseup" ? "mousemove" : "touchmove";
    this.slide.removeEventListener(moveType, this.onMouseMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.onMouseUpChangedSlide();
  }

  onMouseUpChangedSlide() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.nextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.prevSlide();
    } else {
      this.changeSlidePosition(this.index.active);
    }
  }

  // Slide presets

  updatePosition(clientXrecebido) {
    this.dist.movement = (this.dist.startX - clientXrecebido) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  moveSlide(distanceMove) {
    this.dist.movePosition = distanceMove;
    this.slide.style.transform = `translate3d(${distanceMove}px, 0, 0)`;
  }

  slideEvent() {
    this.slide.addEventListener("mousedown", this.onMouseDown);
    this.slide.addEventListener("touchstart", this.onMouseDown, {
      passive: true,
    });
    this.slide.addEventListener("mouseup", this.onMouseUp);
    this.slide.addEventListener("touchend", this.onMouseUp, { passive: true });
  }

  // Slide config

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slideConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element,
      };
    });
  }

  changeSlidePosition(index) {
    const activeSlide = this.slideArray[index];
    this.dist.finalPosition = activeSlide.position;
    this.moveSlide(activeSlide.position);
    this.slideIndexNav(index);
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent)
  }

  changeActiveClass() {
    this.slideArray.forEach((slide) => slide.element.classList.remove(this.activeClass))
    this.slideArray[this.index.active].element.classList.add(this.activeClass)
  }

  prevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlidePosition(this.index.prev);
    }
  }

  nextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlidePosition(this.index.next);
    }
  }

  // Config

  onResize() {
    setTimeout(() => {
      this.slideConfig()
      this.changeSlidePosition(this.index.active)
    }, 1000)
  }

  addEventResize() {
    window.addEventListener("resize", this.onResize)
  }

  bindEvents() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  transition(active) {
    this.slide.style.transition = active ? "transform .4s" : "";
  }

  init() {
    this.bindEvents();
    this.slideEvent();
    this.slideConfig();
    this.transition(true)
    this.changeSlidePosition(0);
    this.addEventResize()
    return this;
  }
}
