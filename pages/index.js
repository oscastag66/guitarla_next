
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {
  //console.log(entradas)
  //
  //<Curso 
  //curso={curso}    
  ///>
      
   return (
    
      <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
      >

      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado 
          guitarras={guitarras}
        />
      </main>
      <section>
        <ListadoBlog 
          entradas={entradas}
        />
      </section>
      </Layout>
    
  )
}
export async function getServerSideProps() {
   //const urlGuitarras = `${process.env.API_URL}?action=getguitarras&jwt=&aplica=blogs&usuario=Demo`
  //const urlCursos = `${process.env.API_URL}?action=getcursos&jwt=&aplica=blogs&usuario=Demo`
  //const urlBlog = `${process.env.API_URL}?action=getblogs&jwt=&aplica=blogs&usuario=Demo`
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  //const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc` 
  //fetch(urlCursos),
  //resCursos,  
  const [resGuitarras,  resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlog)
  ])
  //resCursos.json(),
   //curso,  
  const [guitarras, entradas] = await Promise.all([
    resGuitarras.json(),
    resBlog.json()
  ])
  //console.log(urlCursos)
  //console.log(curso) 
  //curso: curso,
  return {
    props: {
        guitarras: guitarras,
        entradas: entradas
    }
  }

}

