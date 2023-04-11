import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";


const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: tasks } = useFetchDocuments("tasks", null, uid);

  const { deleteDocument } = useDeleteDocument("tasks");

  return (
<div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie as suas Tarefas</p>
      {tasks && tasks.length === 0 ? (
        <div className={styles.notaks}>
          <p>Não foram encontrados Tarefas.</p>
          <Link to="/tasks/create" className="btn">
            Criar Sua primeira tarefa. 
          </Link>
        </div>
      ) : (
        <div className={styles.tasks_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {tasks &&
        tasks.map((task) => (
          <div className={styles.tasks_row} key={task.id}>
            <p>{task.title}</p>
            <div className={styles.actions}>
              <Link to={`/tasks/edit/${task.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(task.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Dashboard