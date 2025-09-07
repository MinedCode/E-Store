import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./estilo_login.css"; 
export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf, senha }),
      });

      if (response.ok) {
        alert("Login realizado com sucesso!");
        navigate("/dashboard"); 
      } else {
        alert("CPF ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="container">
      <form className="form-box" id="form-login" onSubmit={handleSubmit}>
        <h1>Login</h1>

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

        <div className="senha-label">
          <label htmlFor="senha">Senha</label>
          <a href="#" className="esqueceu">
            Esqueceu?
          </a>
        </div>

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
          Login
        </button>

        <p className="cadastro-link">
          Não tem uma conta?{" "}
          <a href="/cadastro">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}
