import styles from './Search.module.css';

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
//Component
import TaskDetail from '../../components/TaskDetail';

import { Link } from 'react-router-dom';

const Search = () => {

    const query = useQuery();
    const search = query.get("q");

    const {documents:tasks} = useFetchDocuments("tasks", search);

  return (
    <div className={styles.search}>
        <h2>Search</h2>
        <div>
            {tasks && tasks.lenght === 0 && (
                <>
                <p>Não Foi Encontrado Nenhuma Tarefa.</p>
                <Link to="/" className="btn btn-dark">
                    Voltar
                </Link>
                </>
            )}
            {tasks && tasks.map((task) => (<TaskDetail key={task.id} task={task}/>))}
        </div>
    </div>
  )
}

export default Search