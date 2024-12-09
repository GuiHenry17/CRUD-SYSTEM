import { useEffect, useState } from "react";
import Remover from "./Remover";
import styles from "../styles/home.module.css";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert("Ocorreu um erro no app!");
      }
    };
    buscarUsuario();
  }, []);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <Remover usuario={usuario} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
