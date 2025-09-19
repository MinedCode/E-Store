import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./estilo_login.css"; 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
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
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login realizado com sucesso!");
        navigate("/"); 
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

        <label htmlFor="cpf">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            value={password}
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
