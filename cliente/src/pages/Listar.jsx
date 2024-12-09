import { useEffect, useState } from "react";
import Remover from "./Remover";
import styles from "../styles/listar.module.css";
import jsPDF from "jspdf";
import 'jspdf-autotable'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Listar() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

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

  const exportarPdf = () => {
    const doc = new jsPDF();
    const tableDados = usuarios.map((usuario) => [
      usuario.nome,
      usuario.email,
    ]);

    doc.text("Lista de Usuários", 10, 10);
    doc.autoTable({
      head: [["Nome", "E-mail"]],
      body: tableDados,
    });

    doc.save("alunosIFMS.pdf");
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        Voltar
      </button>
      <Button variant="contained" onClick={exportarPdf} className={styles.pdfButton}>
        Gerar PDF
      </Button>
      <table className={styles.table}>
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
                <Remover usuario={usuario} classe={styles.remove} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
