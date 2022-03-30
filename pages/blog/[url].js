import {useRouter} from 'next/router'
import Image from  'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
const EntradaBlog = ({entrada}) => {
  const router = useRouter()

  const {contenido, imagen, published_at, titulo} = entrada
  console.log(router.query)
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
//entrada.id.toString()   url: entrada.url
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs` 
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.map(entrada => ({
          params: { url: entrada.url } 
    })) 
    //console.log(paths)
    return {
        paths,
        fallback: false  
    }
}
// url
export async function getStaticProps({params: { url }}) {   
    //${id}  ?url=${url}
    //const urlBlog = `${process.env.API_URL}/blogs/${id}` 
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}` //${id} 
    //const urlBlog = `${process.env.API_URL}?action=getblogs&jwt=&aplica=blogs&usuario=Demo&id=${url}`
    
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    console.log(entrada[0])
    return {
        props: {
           entrada: entrada[0]
        }
    }

}

export default EntradaBlog
