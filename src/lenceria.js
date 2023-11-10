const lenceria = document.querySelector(".lenceria")

class Modelo{
    constructor({modelo,imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,descripcion,tela,tela2,tela3,talla,precio,precio2}){
    this.modelo = modelo
    this.imagen1 = imagen1
    this.imagen2 = imagen2
    this.imagen3 = imagen3
    this.imagen4 = imagen4
    this.imagen5 = imagen5
    this.imagen6 = imagen6
    this.descripcion = descripcion
    this.tela = tela
    this.tela2 = tela2
    this.tela3 = tela3
    this.talla = talla
    this.precio= precio
    this.precio2= precio2
}}

let modelol1 = new Modelo({
    modelo:"Panty negra",
    imagen1: "./media/lenceria/pn1a.png",
    imagen2: "./media/lenceria/pn1b.png",
    imagen3: "",
    imagen4: "",
    imagen5: "",
    imagen6: "",
    descripcion: "La mezcla de telas es mejor",
    talla:"S | M | G",
    tela:"Mesh",
    tela2:"lycra",
    tela3:"algodón",
    precio:"$30.oo mxn",
    precio2:"3 x 80.oo mxn"
})
let modelol2 = new Modelo({
  modelo:"Tanga blanca",
  imagen1: "./media/lenceria/tb1a.png",
  imagen2: "./media/lenceria/tb1b.png",
  imagen3: "",
  imagen4: "",
  imagen5: "",
  imagen6: "",
  descripcion: "Este modelo tiene resorte ornamentado que asegura mayor resistencia. El compuesto es de mesh y el puente de algodón para cuidar la higiene femenina en todo momento",
  talla:"S | M | G",
  tela:"Mesh",
  tela2:"Algoón",
  precio:"$30.oo mxn",
  precio2:"3 x 80.oo mxn"
})
let modelol3 = new Modelo({
  modelo:"Tanga rosa",
  imagen1: "./media/lenceria/tr1a.png",
  imagen2: "./media/lenceria/tr1b.png",
  imagen3: "",
  imagen4: "",
  imagen5: "",
  imagen6: "",
  descripcion: "Este modelo tiene resorte ornamentado que asegura mayor resistencia. El compuesto es de mesh y el puente de algodón para cuidar la higiene femenina en todo momento",
  talla:"S | M | G",
  tela:"Lycra",
  tela2:"Algoón",
  precio:"$30.oo mxn",
  precio2:"3 x 80.oo mxn"
})
let modelol4 = new Modelo({
  modelo:"Tanga negra",
  imagen1: "./media/lenceria/tn1a.png",
  imagen2: "./media/lenceria/tn1b.png",
  imagen3: "./media/lenceria/tn1c.png",
  imagen4: "",
  imagen5: "",
  imagen6: "",
  descripcion: "Este modelo tiene resorte ornamentado que asegura mayor resistencia. El compuesto es de mesh y el puente de algodón para cuidar la higiene femenina en todo momento",
  talla:"S | M | G",
  tela:"Mesh",
  tela2:"Algoón",
  precio:"$30.oo mxn",
  precio2:"3 x 80.oo mxn"
})
let modelol5 = new Modelo({
  modelo:"Panty blanca",
  imagen1: "./media/lenceria/pb1a.png",
  imagen2: "./media/lenceria/pb1b.png",
  imagen3: "",
  imagen4: "",
  imagen5: "",
  imagen6: "",
  descripcion: "Este modelo tiene resorte ornamentado que asegura mayor resistencia. El compuesto es de mesh y el puente de algodón para cuidar la higiene femenina en todo momento",
  talla:"S | M | G",
  tela:"Mesh",
  tela2:"lycra",
  precio:"$30.oo mxn",
  precio2:"3 x 80.oo mxn"
})
let modelol6 = new Modelo({
  modelo:"Boxer blanco",
  imagen1: "./media/lenceria/bb1a.png",
  imagen2: "./media/lenceria/bb1b.png",
  imagen3: "",
  imagen4: "",
  imagen5: "",
  imagen6: "",
  descripcion: "Este modelo tiene resorte ornamentado que asegura mayor resistencia. El compuesto es de mesh y el puente de algodón para cuidar la higiene femenina en todo momento",
  talla:"S | M | G",
  tela:"poliester",
  tela2:"",
  precio:"$30.oo mxn",
  precio2:"3 x 80.oo mxn"
})

var productos =[modelol1,modelol5,modelol6,modelol2,modelol3,modelol4]


function cargarProductoDiferido(index) {
  if (index < productos.length) {
    var producto = productos[index];

    var productoElement = document.createElement("div");
    productoElement.classList.add("modelo")
    productoElement.innerHTML = `
      <h4>${producto.modelo}</h4>
    <div class= "caja">
        <div class="galeria">
          ${producto.imagen1 ? `<img src="${producto.imagen1}" alt="">` : ''}
          ${producto.imagen2 ? `<img src="${producto.imagen2}" alt="">` : ''}
          ${producto.imagen3 ? `<img src="${producto.imagen3}" alt="">` : ''}
          ${producto.imagen4 ? `<img src="${producto.imagen4}" alt="">` : ''}
        </div>
    </div>
    <div class="contenedorVistaPrevia">
      ${producto.imagen1 ? `<img src="${producto.imagen1}" alt="">` : ''}
      ${producto.imagen2 ? `<img src="${producto.imagen2}" alt="">` : ''}
      ${producto.imagen3 ? `<img src="${producto.imagen3}" alt="">` : ''}
      ${producto.imagen4 ? `<img src="${producto.imagen4}" alt="">` : ''}
    </div>
    <h4>Descripción</h4>
    <p>${producto.descripcion}</p>
    <div class="detalles">
      <div>
          <h5>Talla</h5>
          <p>Tallas: ${producto.talla}</p>
      </div>
      <div>
          <h5>Tela</h5>
          <p>${producto.tela ? `<p>${producto.tela}</p>`:''}
          <p>${producto.tela2 ? `<p>${producto.tela2}</p>`:''}
          <p>${producto.tela3 ? `<p>${producto.tela3}</p>`:''}
      </div>
      <div>
          <h5>Precio</h5>
          <p>${producto.precio ? `<p>${producto.precio}</p>`:''}
          <p>${producto.precio2 ? `<p>${producto.precio2}</p>`:''}
      </div>    
    </div>`;
  
    // Calcula el ancho del contenedor .galeria en función de la cantidad de imágenes
    var numImagenes = 0;
    if (producto.imagen1) numImagenes++;
    if (producto.imagen2) numImagenes++;
    if (producto.imagen3) numImagenes++;
    if (producto.imagen4) numImagenes++;
  
    // Aplica el ancho calculado al contenedor .galeria
    var galeriaElement = productoElement.querySelector(".galeria");
    galeriaElement.style.width = numImagenes * 100 + "%";
  
    lenceria.appendChild(productoElement);
    // Añade un retraso de 500 milisegundos (0.5 segundos) antes de cargar el siguiente producto
    setTimeout(function () {
      cargarProductoDiferido(index + 1);
    }, 500); // 500 ms de retraso entre la carga de cada producto
  }
}

// Inicia la carga del primer producto con un retraso
cargarProductoDiferido(0);