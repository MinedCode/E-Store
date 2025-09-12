import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./estilo_register.css";

export default function Cadastro() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = { cpf, nome, idade, email, senha };

    try {
      const response = await fetch("http://localhost:3000/cadastro", {
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
    <div className="container">
      <form className="form-box" id="form-cadastro" onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>

        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="idade">Idade</label>
        <input
          type="number"
          id="idade"
          name="idade"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <div className="senha-box">
          <input
            type={mostrarSenha ? "text" : "password"}
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-senha"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "🙈" : "🐵"}
          </button>
        </div>

        <button type="submit" className="btn-login">
          Criar conta
        </button>

        <p className="cadastro-link">
          Já tem uma conta? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );  
}