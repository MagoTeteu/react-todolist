//CSS
import styles from "./Footer.module.css"

const Footer = () => {
  return (
  <footer className={styles.footer}>
    <h4>Crie Suas Tarefas!</h4>
    <p className="copyT">&copy;2023 TodoList, inc.</p>
  </footer>
  );
};

export default Footer