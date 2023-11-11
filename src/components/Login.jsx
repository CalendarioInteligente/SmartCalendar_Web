import React, { useState } from "react";
import Button from "./Button";

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      // Aqui você pode implementar a lógica de autenticação, por exemplo, fazer uma solicitação para um servidor.
      console.log("Email:", email);
      console.log("Senha:", password);
    };
  
    return (
      <div className="login-container">
        <form>
          <label>Email:</label><br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/><br/>
          <label>Senha:</label><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="" style={{fontSize: 19, float: "right"}}>esqueci minha senha</a>
  
          <br/><br/>
          <Button style={{marginTop: 29}} onClick={handleLogin}>logar</Button>
        </form>
        <p style={{fontSize: 24, textAlign: "center"}}>Não possui cadastro?<br/><a href="">cadastre-se</a></p>
      </div>
    );
  }

  export default Login;