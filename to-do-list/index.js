const ola = () => {
  console.log(this)
}

function ola2() {
  console.log(this)
}

console.log(ola())
console.log(ola2())