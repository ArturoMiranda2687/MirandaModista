const bienvenida = document.querySelector('.bienvenida')
const direcciones = document.querySelector('.direcciones')
const contacto = document.querySelector('.contacto')

const divInicio = document.createElement("div")
    divInicio.classList.add("bannerInicio")
const tituloPrincipal = document.createElement("h1")
const imgPrincipal = document.createElement("img")
    imgPrincipal.src = "../media/logo/logo.png"
    imgPrincipal.alt = "Logo empresa"
const acotacion = document.createElement("p")
    acotacion.classList.add("acotacion")
const mensajeBienvenida = document.createElement("h2")
const contTituloPrincipal = document.createTextNode("Modista Miranda")
const tacotacion = document.createTextNode("Intimates")
const contMensajedeBienvenida = document.createTextNode("Queremos que disfrutes nuestros productos, como nadie lo ha hecho nunca.")

tituloPrincipal.appendChild(contTituloPrincipal)
acotacion.appendChild(tacotacion)
mensajeBienvenida.appendChild(contMensajedeBienvenida)
bienvenida.appendChild(divInicio)
divInicio.appendChild(imgPrincipal)
divInicio.appendChild(tituloPrincipal)
bienvenida.appendChild(acotacion)
bienvenida.appendChild(mensajeBienvenida)

//////

const botonLenceria = document.createElement("div")
        botonLenceria.classList.add("link")



const textoBotonLenceria = document.createTextNode("Lencería")

botonLenceria.appendChild(textoBotonLenceria)
direcciones.appendChild(botonLenceria)

///////
const cajaContacto = document.createElement("div")
const h3contacto = document.createElement("h3")
const pcontacto = document.createElement("p")

const th3contacto = document.createTextNode("Contáctame")
const tpcontacto = document.createTextNode("554854545454544")

contacto.appendChild(cajaContacto)
cajaContacto.appendChild(h3contacto)
h3contacto.appendChild(th3contacto)
cajaContacto.appendChild(pcontacto)
pcontacto.appendChild(tpcontacto)