import { useEffect, useState } from "react";

export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  const remover = async (pessoa) => {
    try{
      await fetch(`http://localhost:3000/usuarios/${pessoa.id}`, {
        method: 'DELETE'
      })
      location.reload()
    }catch (error){
      console.log(error)
      alert(`Erro ocorrido! ${error}`)
    }
  }

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarUsuario();
  }, [])

  return (
    <>
    <table>
    <tbody>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
      </tr>
      {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.email}</td>
          <button onClick={() => remover(usuario)}>Remover</button>
        </tr>
      )}
      </tbody>
    </table>
    </>
  );
}