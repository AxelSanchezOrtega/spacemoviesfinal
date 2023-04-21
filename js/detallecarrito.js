function guardarcarritoalmacenamientolocal(carrito_llave, valor_a_guardar2) {
    localStorage.setItem(carrito_llave, JSON.stringify(valor_a_guardar2))
  }
  function obtenerAlmacenamientoLocal(carrito_llave) {
    const datos = JSON.parse(localStorage.getItem(carrito_llave))
    return datos
  }
  
  let carrito = obtenerAlmacenamientoLocal('carrito') || [];
  
  (function(){
     
     
    
  
      
     
  
    let carritocomprar_2 = document.getElementById('carritos')
    carritocomprar_2.innerHTML = '';
  for (let i = 0; i < carrito.length; i++) {
      carritocomprar_2.innerHTML +=
      `<li class="carrito">
      <p class="pelis">${carrito[i].descripcion}</p>
      <span>Cantidad: ${carrito[i].cantidad}</span><br> 
      <span>Precio: $${carrito[i].precio}</span>
      <img   id="detalleimagen" width='200px' height='300px' src="${carrito[i].imagen}" alt="aqui va la imagen">

      <th><button id="boton-agregar" onclick="eliminar(${carrito[i].nombre})"  class="btn btn-outline-info"><img src="img/delete.png" alt="" width="30px"></button>
      </li>`
    }
  
  })();

  document.getElementById("vaciar").addEventListener("click", function (event) {
    event.preventDefault()

    localStorage.setItem("carrito", JSON.stringify([]));
})


let eliminar =function (productoEliminar){
        
  alert('BORRADO');
  for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre == productoEliminar) {
       
          carrito.splice(i, 1)
          
      }
      else{

      }
  }

  guardarcarritoalmacenamientolocal('carrito', carrito);
  
  
  window.open('detalles del carrito.html');

  }

    