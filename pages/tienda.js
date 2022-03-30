import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({guitarras}) => {
  //console.log(guitarras)
  return (
    <div>
      <Layout 
        pagina='Tienda Virtaul'
      >
        <main className='contenedor'>  
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
        </Layout>
      
    </div>
  )
}
export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`
  //const url = `${process.env.API_URL}/guitarras.json`
  //const url = `${process.env.API_URL}?action=getguitarras&jwt=&aplica=blogs&usuario=Demo`
 
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  //console.log(guitarras) ?_sort=created_at:desc
  return {
    props: {
        guitarras: guitarras
    }
  }

}
export default Tienda