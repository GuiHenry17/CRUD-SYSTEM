import { useNavigate } from "react-router-dom";

export default function Remover({ usuario, classe }) {
  const remover = async () => {
    try {
      await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
        method: "DELETE",
      });
      alert("Usuário removido com sucesso!");
      location.reload()
    } catch (error) {
      console.log(error);
      alert(`Erro ocorrido! ${error}`);
    }
  };

  return <button onClick={remover} className={classe} >Remover</button>;
}
