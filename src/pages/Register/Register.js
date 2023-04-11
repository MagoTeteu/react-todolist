import styles from './Register.module.css';

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';




const Register = () => {
  //Const para definir os estados.
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    };
    //Primeira validação com Senha
    if(password !== confirmPassword){
      setError("As Senhas Precisam ser Iguais")
      return
    }

    const res = await createUser(user);


    console.log(res);
  };

  useEffect(() => {

    if(authError) {
      setError(authError)
    }
  }, [authError]);
  
  return (
    <div className={styles.formRegister}>
      <h1>Cadastre-se para Postar</h1>
      <p>Crie Seu Usuario e Anote Suas Atividade.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type="text" 
          name='displayName' 
          required
          placeholder='Nome do Usuário'
          value={displayName}
          onChange={(e)=> setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
          type="email" 
          name='email' 
          required 
          placeholder='Email do Usuário'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password" 
          name='password' 
          required 
          placeholder='Insira Sua Senha'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input 
          type="password" 
          name='ConfirmPassword' 
          required 
          placeholder='Confirme a Sua Senha'
          value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register