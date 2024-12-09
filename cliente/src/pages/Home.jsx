import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao nosso sistema!</h1>
      <h2 className={styles.subtitle}>Ações:</h2>
      <div className={styles.buttonContainer}>
        <button 
          onClick={() => navigate('/listar')} 
          className={styles.button}>
          Listar Usuários
        </button>
        <button 
          onClick={() => navigate('/registro')} 
          className={styles.button}>
          Registrar Usuários
        </button>
      </div>
    </div>
  );
}
