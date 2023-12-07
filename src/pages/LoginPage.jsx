import React, { useState, useEffect } from "react";
import './LoginPage.css'

import About from '../components/About'

import { Login, Signup } from "../components/Login";
import { useNavigate } from "react-router-dom";
import authenticate from "../api/authenticate";


const LoginPage = (props) => {
  const [signupForm, setSignupForm] = useState(true);
  const navigate = useNavigate();

  const handleSignup = () => {
    setSignupForm(!signupForm)
  }

  useEffect(() => {
    async function fetchData() {
        const validation = await authenticate();

        if (validation) {
          props.setAutenticado(true);
          navigate('/')
        }
    };
    fetchData();    
  }, [])

  return (
    <div className="login-page-container">
      { signupForm ? <About/> : null}
      { signupForm ? <Login setAutenticado={props.setAutenticado} handleSignup={handleSignup} /> : <Signup setAutenticado={props.setAutenticado} handleSignup={handleSignup} />}
    </div>
  )
};

export default LoginPage;