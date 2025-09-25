import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cssPages/form.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logar = {email, password}
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logar)
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
    <div className="containerPage">
      <form className="formPage" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <div className="senhaContainer">
          <input
            type={mostrarSenha ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "🙈" : "🐵"}
          </button>
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
