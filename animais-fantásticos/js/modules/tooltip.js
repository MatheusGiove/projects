export default function initTooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");
  const onMouseOut = {
    handleEvent() {
      this.tooltipbox.remove();
      this.element.removeEventListener("mouseout", onMouseOut);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipbox.style.top = event.pageY + 20 + "px";
      this.tooltipbox.style.left = event.pageX + 20 + "px";
    },
  };

  function onMouseOver() {
    const tooltipBox = criarTooltip(this);
    onMouseMove.tooltipbox = tooltipBox;
    onMouseOut.tooltipbox = tooltipBox;
    onMouseOut.element = this;
    this.addEventListener("mouseout", onMouseOut);
    this.addEventListener("mousemove", onMouseMove);
  }
  tooltip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    const tooltipText = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = tooltipText;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
