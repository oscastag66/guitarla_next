import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    const carritoLS  = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLS);
  },[])
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito]) 
  console.log(carrito)
  const agregarCarrito = (producto) => {
   
    //console.log(producto)
    setCarrito ([...carrito, producto])
    /*
    if (carrito.some( articulo => articulo.id === producto.id )) {
      const carritoActualizado = carrito.map( articulo => {
        if (articulo.id === producto.id ) {
          articulo.cantidad = producto.cantidad
          return articulo
        }
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito ([...carrito, producto])
    } 
    */  
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( articulo => articulo.id !== id )
    setCarrito(carritoActualizado)
  }
  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito = {agregarCarrito}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
