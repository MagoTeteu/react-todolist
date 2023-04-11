// CSS
import styles from "./Task.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Task = () => {
  const { id } = useParams();
  const { document: task } = useFetchDocument("task", id);

  return (
    <div className={styles.task_container}>
      {task && (
        <>
          <h1>{task.title}</h1>
          <p>{task.body}</p>
        </>
      )}
    </div>
  );
};

export default Task;
