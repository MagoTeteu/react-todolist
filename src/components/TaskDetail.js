import styles from './TaskDetail.module.css';
import { useState } from "react";


const TaskDetail = ({task}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.taskdetail}>
      {isChecked ? <h3>Parabéns Você Concluiu Todas as Tarefas.</h3> : null}
        <div className={styles.taskcontainer}>
          <input 
          type = "checkbox" 
          id = "taskList" 
          name = "taskList" 
          value = "taskList"
          checked={isChecked}
          onChange={handleOnChange}
          />
          <h2>{task.title}</h2>
        </div>
        <div className='taskp'>
          <p>Descrição: {task.body}</p>
        </div>
    </div>

  )
}

export default TaskDetail;