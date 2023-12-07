
import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import Button from "./Button";
import './Login.css'

import { useNavigate } from "react-router-dom";

import axios from "../api/axios"
import authenticate from "../api/authenticate";

const LOGIN_URL = "/api/login"
const SIGNUP_URL = "/api/signup"

const Signup = ( props ) => {
  useEffect(() => {
    async function fetchData() {
        const validation = await authenticate();

        if (validation) {
            navigate('/')
        }
    };
    fetchData();    
}, [])

  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const changeForm = (e) => {
    e.preventDefault();
    props.handleSignup();
  }

  useEffect(() => {
    setErrMsg('');
  }, [email, password, telefone, name, sobrenome])

  const handleLogin = async (e) => {
    // Previni botão de dar submit
    e.preventDefault();
    const params = {
      email: email,
      senha: password,
      telefone: telefone,
      nome: name,
      sobrenome: sobrenome
    }

    if (!params.email || !params.senha || !params.telefone || !params.nome || !params.sobrenome) {
      setErrMsg("Dados faltando.")
      return;
    }

    let response;
    try {
      response = await axios.post(SIGNUP_URL, JSON.stringify(params));
      //const sessionId = response?.data?.sessionId;
      //setAuth({ email, password, sessionId });

      props.setAutenticado(true);
      navigate("/"); 
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Servidor fora do ar")
        // No server response
      } else if (err.response?.status === 400) {
        setErrMsg("Dados inválidos ou email ou telefone já utilizado.")
        // Missing email or password
      } else if (err.response?.status === 401) {
        // Unauthorized
        setErrMsg("Sem autorização")
      } else {
        // Login failed
        setErrMsg("Senha ou email errado")
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
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/><br/>
        <label htmlFor="password">Senha:</label><br/>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/><br/>
        <label htmlFor="telefone">Telefone:</label><br/>
        <input
          type="tel"
          id="telefone"
          autoComplete="off"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <br/><br/>
        <label htmlFor="nome">Nome:</label><br/>
        <input
          type="text"
          id="nome"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/><br/>
        <label htmlFor="sobrenome">Sobrenome:</label><br/>
        <input
          type="text"
          id="sobrenome"
          autoComplete="off"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          required
        />
        

        <br/><br/>
        <Button style={{marginTop: 29}} onClick={handleLogin} className="bntLogin">cadastre-se</Button>
      </form>
      {errMsg ? <p style={{color: "red", fontSize:"18px", textAlign: "center"}} >{errMsg}</p> : null}
      <p style={{fontSize: 24, textAlign: "center"}}>Já tem uma conta?<br/><a href="" onClick={changeForm} className="a">login</a></p>
    </div>
  );
}

const Login = ( props ) => {
  const changeForm = (e) => {
    e.preventDefault();
    props.handleSignup();
  }

  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const handleLogin = async (e) => {
    // Previni botão de dar submit
    e.preventDefault();
    const params = {
      email: email,
      senha: password
    }

    let response;
    try {
      response = await axios.post(LOGIN_URL, JSON.stringify(params));
      //const sessionId = response?.data?.sessionId;
      //setAuth({ email, password, sessionId });

      props.setAutenticado(true);
      setEmail('')
      setPassword('')
      navigate("/"); 
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Servidor fora do ar")
        // No server response
      } else if (err.response?.status === 400) {
        setErrMsg("Senha ou email errado")
        // Missing email or password
      } else if (err.response?.status === 401) {
        // Unauthorized
        setErrMsg("Sem autorização")
      } else {
        // Login failed
        setErrMsg("Senha ou email errado")
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
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/><br/>
        <label htmlFor="password">Senha:</label><br/>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="" className="a" style={{fontSize: 19, float: "right"}}>esqueci minha senha</a>

        <br/><br/>
        <Button style={{marginTop: 29}} onClick={handleLogin} className="bntLogin">logar</Button>
      </form>
      {errMsg ? <p style={{color: "red", fontSize:"18px", textAlign: "center"}} >{errMsg}</p> : null}
      <p style={{fontSize: 24, textAlign: "center"}}>Não possui cadastro?<br/><a href="" onClick={changeForm} className="a">cadastre-se</a></p>
    </div>
  );
}

export {Login, Signup};