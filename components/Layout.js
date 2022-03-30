import Head from 'next/head'
import Header from './Header'
import Footer from '../components/Footer'

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
      <title>Guitar LA - {pagina} </title>
      <meta name="descripcion" content='Sitio web de venta de guitarras'/>  
      </Head>  
      <Header 
        guitarra={guitarra}
      />
      {children}
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  guitarra: null
}
export default Layout
