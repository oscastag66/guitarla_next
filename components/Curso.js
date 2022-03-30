import styles from '../styles/Curso.module.css'
// para section
//style={{ backgroundColor: 'red' }}
//{styles.curso}
const Curso = ({curso}) => {
    const { titulo, contenido, imagen} = curso
  return (
    <section > 
      <div className={`contenedor ${styles.grid}`}>
          <div className={styles.contenido}>
            <h2 className='heading'>{titulo}</h2>
            <p className={styles.texto}>{contenido}</p>
            <a className={styles.enlace} href="#">Más información</a>
          </div>
      </div>

    </section>
  )
}

export default Curso
