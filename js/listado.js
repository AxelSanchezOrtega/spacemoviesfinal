


/* GALERIA*/
/*Function anonima se ejecutan todo el tiempo */
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
  localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
  const datos = JSON.parse(localStorage.getItem(llave))
  return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];

(function(){
   
   
  

    
   /**GALERIA */
/*aqui esta el boton para ir a detalle producto */
  let detalle_producto = document.getElementById('peliculas')
  detalle_producto.innerHTML = '';
for (let i = 0; i < productos.length; i++) {
    detalle_producto.innerHTML +=
    `<li class="productos">

    <div class="image-container">


    <a class="btn btn-info" id="dar-alta" data-bs-toggle="modal" data-bs-target="#myModal" onclick="detalleproducto(${productos[i].nombre})" href="detalle del producto ${productos[i].nombre}.html">
    <img  class="" height='300px' src="${productos[i].imagen}" alt="${productos[i].nombre}" width="250" height="400">
    <div class="zoomed-image"></div>
    </div>
   
    </a>
    <p class="pelis">Nombre del producto:<br> 
      ${productos[i].descripcion}<br>
      
    </p>
    <input type="number" placeholder="${productos[i].cantidad}">
    <span>Precio: $${productos[i].precio}</span>
   
    <button id="boton-agregar" onclick="carrito_flotante(${productos[i].nombre})" name="${productos[i].nombre}" class="btn btn-outline-info"><img src="img/carrito.png" alt="" width="30px"></button>
  </li>`
  }


})();


let carrito_flotante = function(identificador){
   

  let detalle_producto = document.getElementById('carrito-contenido')
  document.getElementById('carrito1').classList.add('carritoflotante_mostrar');
      detalle_producto.innerHTML = '';
    for (let i = 0; i < productos.length; i++){
      if (productos[i].nombre == identificador) {
        detalle_producto.innerHTML +=
        `     
               

            <p class="peli">Producto agregado al carrito:</p>
            <h3  id="numerodeseriocarrito" class="peli">${productos[i].nombre} </h3>
            <img  id="imagencarrito" width='100px' height='150px' src="${productos[i].imagen}" alt="aqui va la imagen">
            <h3 id="descripcioncarrito" class="peli">NOMBRE: ${productos[i].descripcion} </h3>
            <p id="cantidadcarrito" class="pelis">CANTIDAD: ${productos[i].cantidad} </p>
            <p id="preciocarrito" class="pelis">PRECIO: $${productos[i].precio}</p>
            <p class="pelis">Subtotal: </p>
            
        `
        }
      }
      
      
  }

let ocultar = function (){
        document.getElementById('carrito1').classList.remove('carritoflotante_mostrar');

}





/*DETALLE PRODUCTO----------------------------------------------- */

 let detalleproducto = function(identificador){
  alert('hola');
  let detalle_producto2 = document.getElementById('informacion')
  detalle_producto2.innerHTML = '';
  for (let i = 0; i < productos.length; i++){
    if (productos[i].nombre == identificador) {
      detalle_producto2.innerHTML +=
      `
      <h2>hola</h2>      
      <h3  id="detallenombre" class="peli">${productos[i].nombre} </h3>
     

       
        
         
          <div class="image-container">
               <img   id="detalleimagen" width='200px' height='300px' src="${productos[i].imagen}" alt="aqui va la imagen">
                  <div class="zoomed-image"></div>
         </div>

          <h3 id="detalledescripcion" class="peli">NOMBRE: ${productos[i].descripcion} </h3>
         <input   id="detallecantidad" type="number">
          <p id="detalleprecio" class="pelis">PRECIO: $${productos[i].precio}</p>
          <p class="pelis">Subtotal: </p>
  
             
          
      `
      } 
    }
   

    let container = document.querySelector(".image-container");
    const zoomedImage = container.querySelector(".zoomed-image");
    const image = container.querySelector("img");

    container.addEventListener("mousemove", (event) => {
      const x = event.clientX - container.offsetLeft;
      const y = event.clientY - container.offsetTop;
    
      zoomedImage.style.backgroundImage = `url(${image.src})`;
      zoomedImage.style.backgroundPosition = `-${x}px -${y}px`;
      zoomedImage.style.display = "block";
    });
    
    container.addEventListener("mouseleave", () => {
      zoomedImage.style.display = "none";
    });
} 
 /* let detalleproducto =  function(identificador){
 
  window.open('detalles del producto.html');
  let identificador2=identificador
  
 

} */




 







