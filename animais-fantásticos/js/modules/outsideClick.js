export default function outsideClick(elemento, eventos, callback) {
  const html = document.documentElement;
  const outside = "data-outside"
  if (!elemento.hasAttribute(outside)) {
    eventos.forEach(evento => {
      setTimeout(() => html.addEventListener(evento, cliqueFora))
    }, 0)
    elemento.setAttribute(outside, "")
  }
  function cliqueFora(evento) {
    if (!elemento.contains(evento.target)){
      elemento.removeAttribute(outside)
      eventos.forEach((evento) => {
        html.removeEventListener(evento, cliqueFora)
      })
      callback()
    }
  }
}