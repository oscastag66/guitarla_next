import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({entradas}) => {
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs` se utiliza el de entradas
  //console.log(url)
  return (
    <div>
      <Layout 
      pagina='blog'
      >
      <main className='contendor'> 
          <ListadoBlog
            entradas={entradas}
          />
      
      </main>
      </Layout>
      
    </div>
  )
}

export async function getStaticProps() {

    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc` 
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    //console.log(resultado)  
  
    return {
    props: {
      entradas: entradas
      
    }
   } 
     

}

export default Blog