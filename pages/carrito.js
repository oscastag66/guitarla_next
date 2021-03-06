import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Image  from 'next/image'
import styles from "../styles/Carrito.module.css"

const Carrito = ({carrito, eliminarProducto}) => {
  const [total, setTotal] = useState(0)
  //console.log(carrito.length)
  //console.log(carrito.Image)
  useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])
  return (
    <Layout pagina="Carrito de compras">
        <h1 className="heading">Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>
              <h1>Artículos</h1>
              {carrito.length === 0 
                ? "Carrito Vacio" 
                : carrito.map((producto) => (
                  
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image 
                      layout="responsive" 
                      width={250} 
                      height={480} 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      />
                    </div>
                    <div>
                     
                    <p className={styles.nombre}>{producto.nombre} </p>
                      <div className={styles.cantidad}>
                      <p className={styles.cantidad}>Cantidad: {producto.cantidad} </p>
                      </div>
                      <p className={styles.precio}>$<span>{producto.precio}</span> </p>
                      <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span> </p>
                    </div>
                    <button
                      type='buton'
                      className={styles.eliminar}
                      onClick={() => eliminarProducto(producto.id)}
                    >X</button>
                  </div>
                ))} 
            </div>
            <div className={styles.resumen}>
              
              {total > 0 ? (
                <>
                <h3>Resumen del Pedido</h3>
                <p>Total a Pagar:${total} </p>
                </>
              ) : <p>No hay productos en el carrito</p>}
            </div>
        </main>    
    </Layout>
  )
}

export default Carrito
