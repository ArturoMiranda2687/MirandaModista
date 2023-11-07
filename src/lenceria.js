const lenceria = document.querySelector(".lenceria")

class Modelo{
    constructor(modelo,imagen,descripcion,talla,material){
    this.imagen = imagen
    this.descripcion = descripcion
    this.modelo = modelo
    this.talla = talla
    this.material = material
}}

let modelol1 = new Modelo(
    "Blanco", "alguna","tela"
)
const modelitos = document.createElement("section")

const tituloProducto = document.createElement("h3")
const ImgProducto = document.createElement("img")
const descripcionProducto = document.createElement("h4")
const divDetalles = document.createElement("div")

const divTalla = document.createElement("div")
const divTela = document.createElement("div")
const divPrecio = document.createElement("div")

const h5Talla = document.createElement("h4")
const pTalla = document.createElement("p")

const h5Tela = document.createElement("h4")
const p1Tela = document.createElement("p")
const p2Tela = document.createElement("p")

const h5Precio = document.createElement("h4")
const p1Precio = document.createElement("p")
const p2Precio = document.createElement("p")
