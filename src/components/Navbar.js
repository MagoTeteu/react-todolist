//CSS
import styles from "./Navbar.module.css"
//NavLink Access entre os Links
import { NavLink } from "react-router-dom"

import { useAuthentication } from "../hooks/useAuthentication"

import { useAuthValue } from "../context/AuthContext"


const Navbar = () => {
  const {user} = useAuthValue();
  const {logout} = useAuthentication();
  
  return (
  <nav className={styles.navbar}>
    <NavLink to="/" className={styles.brand}>
        TodoList
    </NavLink>
    <ul className={styles.links_list}>
        <li><NavLink to="/" className={({isActive})=> (isActive ? styles.active : "")}>Inicio</NavLink></li>
        {!user && (
          <>
            <li><NavLink to="/login" className={({isActive})=> (isActive ? styles.active : "")}>Entrar</NavLink></li>
            <li><NavLink to="/register" className={({isActive})=> (isActive ? styles.active : "")}>Registrar</NavLink></li>
          </>
        )}
        {user && (
          <>
            <li><NavLink to="/home" className={({isActive})=> (isActive ? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to="/tasks/create" className={({isActive})=> (isActive ? styles.active : "")}>Nova Tarefa</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive})=> (isActive ? styles.active : "")}>DashBoard</NavLink></li>
          </>
        )}
        <li><NavLink to="/about" className={({isActive})=> (isActive ? styles.active : "")}>Sobre</NavLink></li>
        {user && <li><button onClick={logout}>Sair</button></li>}
    </ul>
  </nav>
  )
}

export default Navbar