export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip);

    // Bind

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove({ pageX, pageY }) {
    this.tooltipBox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${pageX + 20}px`;
    }
  }

  onMouseOut({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseout", this.onMouseOut);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    const tooltipText = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = tooltipText;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltip(currentTarget);
    currentTarget.addEventListener("mouseout", this.onMouseOut);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  tooltipEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    this.tooltipEvent();
    return this;
  }
}
