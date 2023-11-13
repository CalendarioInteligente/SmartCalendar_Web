

import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import Button from "./Button";
import './Login.css'

import axios from "../api/axios"
const LOGIN_URL = '/api/login'

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])*/

  const handleLogin = async (e) => {
    // Previni botão de dar submit
    e.preventDefault();

    const params = {
      email: email,
      senha: password
    }

    try {
      const response = await axios.get(LOGIN_URL,
        JSON.stringify(params),
        {
          withCredentials: true
        }
      );

      console.log(JSON.stringify(response?.data))
      //const sessionId = response?.data?.sessionId;
      //setAuth({ email, password, sessionId });

      setEmail('')
      setPassword('')
    } catch (err) {
      if (!err?.response) {
        // No server response
      } else if (err.response?.status === 400) {
        // Missing email or password
      } else if (err.response?.status === 401) {
        // Unauthorized
      } else {
        // Login failed
      }
    }

    // Envia informações para API
    //axios.get('https://localhost:3000/api/login')
  }

  return (
    <div className="login-container">
      <form>
        <label htmlFor="email">Email:</label><br/>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/><br/>
        <label htmlFor="password">Senha:</label><br/>
        <input
          type="password"
          id="password"
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