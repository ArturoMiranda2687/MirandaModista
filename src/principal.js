const bienvenida = document.querySelector('.bienvenida')

const tituloPrincipal = document.createElement("h1")
const mensajeBienvenida = document.createElement("h2")
const contTituloPrincipal = document.createTextNode("Modista Miranda")
const contMensajedeBienvenida = document.createTextNode("Queremos que disfrutes nuestros productos, como nadie lo ha hecho nunca.")

tituloPrincipal.appendChild(contTituloPrincipal)
mensajeBienvenida.appendChild(contMensajedeBienvenida)
bienvenida.appendChild(tituloPrincipal)
bienvenida.appendChild(mensajeBienvenida)