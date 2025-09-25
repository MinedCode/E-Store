import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cssPages/form.css"

export default function Cadastro() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const age = parseInt(idade);
    const dados = { name, age, email, password };

    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        alert("Conta criada com sucesso!");
        navigate("/login");
      } else {
        alert("Erro ao criar conta. Verifique os dados.");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  };

  return (
    <div className="containerPage">
      <form className="formPage" onSubmit={handleSubmit}>
        <h1>Criar conta</h1>
        
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Informe seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="age">Idade</label>
        <input 
          type="number" 
          name="age" 
          id="age" 
          placeholder="Informe sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Informe seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <div className="senhaContainer">
          <input 
            type={mostrarSenha? "text":"password"}
            id="password" 
            placeholder="Crie sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
              {mostrarSenha? "🙈" : "🐵"}
            </button>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );  
}