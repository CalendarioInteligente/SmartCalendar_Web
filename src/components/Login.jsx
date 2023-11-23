
import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import Button from "./Button";
import './Login.css'

import { useNavigate } from "react-router-dom";

import axios from "../api/axios"
const LOGIN_URL = "/api/login"

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

    console.log(JSON.stringify(params));

    let response;
    try {
      response = await axios.post(LOGIN_URL, JSON.stringify(params));
      //const sessionId = response?.data?.sessionId;
      //setAuth({ email, password, sessionId });

      setEmail('')
      setPassword('')
      navigate("/");
      
    } catch (err) {
      console.error(err?.response?.data?.message)
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
        <a href="" className="a" style={{fontSize: 19, float: "right"}}>esqueci minha senha</a>

        <br/><br/>
        <Button style={{marginTop: 29}} onClick={handleLogin} className="bntLogin">logar</Button>
      </form>
      <p style={{fontSize: 24, textAlign: "center"}}>Não possui cadastro?<br/><a href="" className="a">cadastre-se</a></p>
    </div>
  );
}

export default Login;