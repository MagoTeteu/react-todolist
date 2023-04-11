import styles from './CreateTask.module.css';

import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';



const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("tasks");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    
    // check values
    if (!title || !body) {
      setFormError("Por favor, preencha todos os campos!");
    };


    console.log({
      title,
      body,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return


    insertDocument({
      title,
      body,
      uid: user.uid,
      createdBy: user.displayName,
    });

    //Redirect for home
    navigate("/home");
  };
  
  return (
    <div className={styles.createTask}>
      <h2>Adicionar Tarefa</h2>
      <p>Escreva suas tarefas e fique sempre pronto.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome da Tarefa:</span>
          <input 
          type="text" 
          name='text' 
          required 
          placeholder='Nova Tarefa...' 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}/>
        </label>
        <label>
          <span>Descrição:</span>
          <textarea 
          name='body' 
          placeholder='Nova Tarefa...' 
          onChange={(e) => setBody(e.target.value)} 
          value={body} 
          ></textarea>
        </label>
        {!response.loading && <button className="btn">Criar Tarefa!</button>}
        {response.loading && (<button className="btn" disabled>Aguarde.. .</button>)}
        {(response.error || formError) && (<p className="error">{response.error || formError}</p>)}
      </form>
    </div>
  )
}

export default CreateTask
