import React, { useState } from "react";
import './App.css'

const About = () => {
  return (
    <div id="about">
      <h1 style={{textAlign: "center", fontFamily: "Sansita One", fontSize: 31}}>Smart Calendar</h1>
      <p>
      &emsp; Desperte o potencial do seu dia-a-dia<br/>
        com o Smart Calendar - sua chave para<br/>
        uma rotina fluida e organizada. Com<br/>
        recursos intuitivos e personalizados,<br/>
        otimize seu tempo e alcance seus objetivos<br/>
        com facilidade. Viva com propósito<br/>
        agende ocm inteligência!<br/>
      </p>
    </div>
  )
}

const LoginArea = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de autenticação, por exemplo, fazer uma solicitação para um servidor.
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div id="login">
      <form>
        <div>
          <label>Email:</label><br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="" style={{fontSize: 19, textAlign: "right"}}>esqueci minha senha</a>
        </div><br/>
        <button style={{textAlign: "center"}} type="submit" onClick={handleLogin}>logar</button>
      </form>
      <p>Não possui cadastro?<br/><a href="">cadastre-se</a></p>
    </div>
  );
}

const LoginPage = () => {
  return (
    <div id="Login-page">
      
      <About/>
      {(2< 9) ? <LoginArea/> : <About/>}
    </div>
  )
};

export default LoginPage;
