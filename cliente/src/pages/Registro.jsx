import { useState } from "react";

export default function Registrar() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const registrarUsuario =  async(event) => {
    event.preventDefault();
    try{
      await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          nome: nome,
          email: email
        })
      })
    }catch{
      alert("Ocorreu um erro!")
    }
  }


  return (
    <>
      <main>
        <form onSubmit={registrarUsuario}>
          <label htmlFor="nome"></label>
          <input name="nome" value= {nome} onChange={(event) => setNome(event.target.value)}></input>
          <label htmlFor="email"></label>
          <input name="email" value= {email} onChange={(event) => setEmail(event.target.value)}></input>
          <button>Registrar</button>
        </form>
      </main>
    </> 
  )
}