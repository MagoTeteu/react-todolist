//CSS
import styles from './About.module.css'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o TodoList</h2>
      <p>Este projeto consiste em um TodoList feito com React no front-end e Firebase no Back-end.</p>
      <Link to="/register" className='btn'>Criar Tarefa</Link>
    </div>
  )
}

export default About