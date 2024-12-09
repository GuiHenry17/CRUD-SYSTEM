import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/registro.module.css";

export default function Registrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const registrarUsuario = async (event) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email }),
      });
      alert("Usuário Registrado!");
      navigate("/");
    } catch {
      alert("Ocorreu um erro!");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={registrarUsuario}>
        <label htmlFor="nome">Nome:</label>
        <input
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button>Registrar</button>
      </form>
    </div>
  );
}
