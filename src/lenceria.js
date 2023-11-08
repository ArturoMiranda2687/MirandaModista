const lenceria = document.querySelector(".lenceria")

class Modelo{
    constructor(modelo,imagen,descripcion,talla,material,precio){
    this.imagen = imagen
    this.descripcion = descripcion
    this.modelo = modelo
    this.talla = talla
    this.material = material
    this.precio= precio
}}

let modelol1 = new Modelo(
    "Blanco", "./media/lenceria/1.png","muy bonito","grabde","mesh","$30.oo mxn"
)
const modelitos = document.createElement("section")
    modelitos.classList.add("modelo")

const tituloProducto = document.createElement("h3")
const ImgProducto = document.createElement("img")
const descripcionProducto = document.createElement("h4")
const pdescripcionProducto = document.createElement("p")
const divDetalles = document.createElement("div")
    divDetalles.classList.add("detalles")

const divTalla = document.createElement("div")
const divTela = document.createElement("div")
const divPrecio = document.createElement("div")

const h5Talla = document.createElement("h5")
const pTalla = document.createElement("p")

const h5Tela = document.createElement("h5")
const p1Tela = document.createElement("p")
const p2Tela = document.createElement("p")

const h5Precio = document.createElement("h5")
const p1Precio = document.createElement("p")
const p2Precio = document.createElement("p")

let tTituloProducto = document.createTextNode(`${modelol1.modelo}`)
     ImgProducto.src = `${modelol1.imagen}`
let tDescripcionProducto = document.createTextNode("Descripción")
let pTdescripcionProducto = document.createTextNode(`${modelol1.descripcion}`)
let tH5Talla = document.createTextNode("Talla")
let tPTalla = document.createTextNode(`${modelol1.talla}`)
let tH5Tela = document.createTextNode("Tela")
let pp1Tela = document.createTextNode(`${modelol1.material}`)
let tH5Precio = document.createTextNode("Precio")
let pp1Precio = document.createTextNode(`${modelol1.precio}`)

tituloProducto.appendChild(tTituloProducto)
descripcionProducto.appendChild(tDescripcionProducto)
pdescripcionProducto.appendChild(pTdescripcionProducto)
h5Talla.appendChild(tH5Talla)
pTalla.appendChild(tPTalla)
h5Tela.appendChild(tH5Tela)
p1Tela.appendChild(pp1Tela)
h5Precio.appendChild(tH5Precio)
p1Precio.appendChild(pp1Precio)

lenceria.appendChild(modelitos)

modelitos.appendChild(tituloProducto)
modelitos.appendChild(ImgProducto)
modelitos.appendChild(descripcionProducto)
modelitos.appendChild(pdescripcionProducto)
modelitos.appendChild(divDetalles)

divDetalles.appendChild(divTalla)
divDetalles.appendChild(divTela)
divDetalles.appendChild(divPrecio)

divTalla.appendChild(h5Talla)
divTalla.appendChild(pTalla)

divTela.appendChild(h5Tela)
divTela.appendChild(p1Tela)
divTela.appendChild(p2Tela)

divPrecio.appendChild(h5Precio)
divPrecio.appendChild(p1Precio)
divPrecio.appendChild(p2Precio)

