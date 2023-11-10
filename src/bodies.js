const bodies = document.querySelector(".bodies")

let modbod1 = new Modelo({
    modelo:"Body blanco",
    imagen1: "./media/lenceria/pn1a.png",
    imagen2: "./media/lenceria/pn1b.png",
    imagen3: "",
    imagen4: "",
    imagen5: "",
    imagen6: "",
    descripcion: "Un body ideal para momentos espaciales, inspirado en buenos momentos.",
    talla:"S | M | G",
    tela:"Mesh",
    tela2:"lycra",
    tela3:"algodón",
    precio:"$30.oo mxn",
    precio2:"3 x 80.oo mxn"
})

var productos = [modbod1]

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
    
      bodies.appendChild(productoElement);
      // Añade un retraso de 500 milisegundos (0.5 segundos) antes de cargar el siguiente producto
      setTimeout(function () {
        cargarProductoDiferido(index + 1);
      }, 500); // 500 ms de retraso entre la carga de cada producto
    }
  }
  
  // Inicia la carga del primer producto con un retraso
  cargarProductoDiferido(0);