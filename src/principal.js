const bienvenida = document.querySelector('.bienvenida')
const direcciones = document.querySelector('.direcciones')
const contacto = document.querySelector('.contacto')

const divInicio = document.createElement("div")
    divInicio.classList.add("bannerInicio")
const tituloPrincipal = document.createElement("h1")
const linea = document.createElement("div")
const imgPrincipal = document.createElement("img")
    imgPrincipal.src = "./media/logo/logo.png"
    imgPrincipal.alt = "Logo empresa"
const acotacion = document.createElement("p")
    acotacion.classList.add("acotacion")
const mensajeBienvenida = document.createElement("p")
const contTituloPrincipal = document.createTextNode("Modista Miranda")
const tacotacion = document.createTextNode("Intimates")
const contMensajedeBienvenida = document.createTextNode("Queremos que disfrutes nuestros productos, como nadie lo ha hecho nunca. Recuerda que podemos fabricar el modelo que tú busques, quieras o si quieres que te lo diseñemos especialmente para ti.")

tituloPrincipal.appendChild(contTituloPrincipal)
acotacion.appendChild(tacotacion)
mensajeBienvenida.appendChild(contMensajedeBienvenida)
bienvenida.appendChild(divInicio)
divInicio.appendChild(imgPrincipal)
divInicio.appendChild(tituloPrincipal)
divInicio.appendChild(linea)
divInicio.appendChild(acotacion)
bienvenida.appendChild(mensajeBienvenida)

///////
const cboton1 = document.createElement("div")
    cboton1.classList.add("botpri")
const botonl = document.createElement("a")
    botonl.href = "./lenceria.html"
    botonl.textContent = "Lencería"
const tbotonl = document.createElement("p")

const cboton2 = document.createElement("div")
    cboton2.classList.add("botpri")
const boton2 = document.createElement("a")
    boton2.href = "./body.html"
    boton2.textContent = "Bodies"
const tboton2 = document.createElement("p")

cboton1.appendChild(botonl)
cboton2.appendChild(boton2)
direcciones.appendChild(cboton1)
direcciones.appendChild(cboton2)



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


