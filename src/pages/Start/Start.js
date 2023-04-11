//CSS
import styles from './Start.module.css';

const Start = () => {
  return (
    <div className={styles.start_1}>
        <div className={styles.layout_1}>
            <h1>Organize Suas Tarefas, e Facilite o seu Dia-Dia.</h1>
        </div>
        <div className={styles.img_1}>
            <img src="./home_page_img.png" alt="Imagem da Home" />
        </div>
        <div className={styles.text_1}>
          <p>Todo List - Crie Todas as Tarefas Que Deseje.</p>
        </div>
    </div>
  )
}

export default Start