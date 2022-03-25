import {useRouter} from 'next/router'
import Image from  'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
const EntradaBlog = ({entrada}) => {
  
  const {contenido, imagen, published_at, titulo} = entrada
  //console.log({imagen})
  return (
      <Layout
      pagina={titulo}
      >
    <main className='contenedor'>
      <h1 className='heading'>{titulo} </h1>
      <article className={styles.entrada}>
      <Image priority="true" layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
      <div className={styles.contenido}>
          <p className={styles.fecha}>{formatearFecha(published_at)} </p>
          <p>{contenido} </p>
      </div>
      </article>
    </main>
    </Layout>
  )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs` 
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
          params: { url: entrada.url } //id.toString()  
    })) 
        
   
    return {
        paths,
        fallback: false  
    }
}

export async function getStaticProps({params: { url }}) {  //id
    
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}` //${id} 
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    return {
        props: {
           entrada: entrada[0]
        }
    }

}

//export async function getServerSideProps({query: { id }}) {
//    const url = `${process.env.API_URL}/blogs/${id}` 
//    const respuesta = await fetch(url)
//    const entrada = await respuesta.json()
//    return {
//        props: {
//           entrada: entrada
//        }
//    }
//}

export default EntradaBlog
