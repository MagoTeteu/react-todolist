//Style CSS
import styles from './Home.module.css';
//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useNavigate, Link} from 'react-router-dom';
// react
import { useState } from "react";
//component
import TaskDetail from '../../components/TaskDetail';


const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: tasks, loading } = useFetchDocuments("tasks");
  
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}> 
      <p>Escreva suas tarefas e fique sempre pronto.</p>
      {/*Buscar pelas Tarefas*/}
      <h1>Veja as Tarefas:</h1>
      <form onSubmit={handleSearch} className={styles.search_form}>
        <input 
        className = "search_1"
        type="text" 
        placeholder ='Ou Busque Pela Sua Tarefa ...' 
        onChange={(e) => setQuery(e.target.value)}
         />
        <button className="btn btn-dark">Pesquisar</button>      
      </form>
      <div className='tasks-list'>
        {loading && <p>Carregando...</p> }
        {tasks && tasks.map((task) => <TaskDetail key={task.id} task={task}/>)}
        {tasks && tasks.length === 0 && (
          <div className={styles.notasks}>
            <p>Não Foi Possível Encontrar as Tarefas</p>
            <Link to="/tasks/create" className='btn'>
              Criar Primeira Tarefa
            </Link>
          </div>
        )}
      </div>
    </div>
  )
};
export default Home
