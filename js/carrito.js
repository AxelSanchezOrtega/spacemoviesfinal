
function guardarcarritoalmacenamientolocal(carrito_llave, valor_a_guardar2) {
    localStorage.setItem(carrito_llave, JSON.stringify(valor_a_guardar2))
  }
  function obtenerAlmacenamientoLocal(carrito_llave) {
    const datos = JSON.parse(localStorage.getItem(carrito_llave))
    return datos
  }
  
  let carrito = obtenerAlmacenamientoLocal('carrito') || [];
  let mensaje2 = document.getElementById('mensaje2')
  
  //Añadir un producto carrito
 
  
  /* function mostrar(){
    document.getElementById('modal').style.display='block';
  }
  function ocultar(){
    document.getElementById('modal').style.display='none';
  } */
  
  document.getElementById("compracarrito").addEventListener("click", function (event) {
    event.preventDefault()
    const nombre_2 = document.getElementById('numerodeseriocarrito')
    const descripcion_2 = document.getElementById('descripcioncarrito')
    const precio_2 = document.getElementById('preciocarrito')
    const imagen_2 = document.getElementById('imagencarrito')
    const cantidad_2 = document.getElementById('cantidadcarrito')
    // let nombre = nombre_const.value
   console.log(descripcion_2);

    let nombre = nombre_2.innerText 
    let descripcion = descripcion_2.innerText 
    let precio = precio_2.innerText
    let imagen = imagen_2.innerText
    let cantidad = cantidad_2.innerText
   
  
    
  
    /* if (nombre == '' || precio == '' || imagen == '' || cantidad == ''|| descripcion == '') {
        mensaje2.classList.add('llenarCampos')
        setTimeout(() => { mensaje2.classList.remove('llenarCampos') }, 2500)
        van = false
    }
    else {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].nombre == nombre) {
              alert('YA EXISTE');
                //mensaje2.classList.add('repetidoError')
                //setTimeout(() => { mensaje2.classList.remove('repetidoError') }, 2500)
                van = false
            }
        }
    } */
  
   
        carrito.push({
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen,
            cantidad: cantidad
        })
        alert('REALIZADO');
        alert(cantidad)
       // mensaje2.classList.add('realizado')
        /* setTimeout(() => {
           // mensaje2.classList.remove('repetidoError')
            window.location.reload()
        }, 1500) */
    
    guardarcarritoalmacenamientolocal('carrito', carrito);
  
    window.open('detalles del carrito.html');
   
    

})
/**DETALLE CARRITOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO   */
document.getElementById("comprarproductoindividual").addEventListener("click", function (event) {
  event.preventDefault()
  alert('entraste');


  const nombre_2 = document.getElementById('detallenombre')
    const descripcion_2 = document.getElementById('detalledescripcion')
    const precio_2 = document.getElementById('detalleprecio')
    const imagen_2 = document.getElementById('detalleimagen')
    const cantidad_2 = document.getElementById('detallecantidad')
    // let nombre = nombre_const.value


    


    let nombre = nombre_2.innerText 
    let descripcion = descripcion_2.innerText 
    let precio = precio_2.innerText
    let imagen  = imagen_2.src
    let cantidad = cantidad_2.value
carrito.push({
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen,
            cantidad: cantidad
        })
   
      guardarcarritoalmacenamientolocal('carrito', carrito)
  

   
  
    window.open('detalles del carrito.html');
})

        

    






  