import React, { useState } from "react";
import './LoginPage.css'

import About from '../components/About'

import axios from "../api/axios";
import { useEffect } from "react";
import authenticate from "../api/authenticate";
import { useNavigate } from "react-router-dom";
import { Login, Signup } from "../components/Login";


const LoginPage = () => {
  const [signupForm, setSignupForm] = useState(true);

  const handleSignup = () => {
    setSignupForm(!signupForm)
  }

  return (
    <div className="login-page-container">
      { signupForm ? <About/> : null}
      { signupForm ? <Login handleSignup={handleSignup} /> : <Signup handleSignup={handleSignup} />}
    </div>
  )
};

export default LoginPage;